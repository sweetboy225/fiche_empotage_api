/**
 * user.js
 * @description :: sequelize model of database table user
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
const bcrypt = require('bcrypt');
let User = sequelize.define('user',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    unique:true
  },
  username:{ type:DataTypes.STRING },
  password:{ type:DataTypes.STRING },
  email:{ type:DataTypes.STRING },
  name:{ type:DataTypes.STRING },
  userType:{ type:DataTypes.INTEGER },
  isActive:{ type:DataTypes.BOOLEAN },
  isDeleted:{ type:DataTypes.BOOLEAN },
  createdAt:{ type:DataTypes.DATE },
  updatedAt:{ type:DataTypes.DATE },
  addedBy:{ type:DataTypes.INTEGER },
  updatedBy:{ type:DataTypes.INTEGER },
  otp:{ type:DataTypes.INTEGER },
  optExpireTime:{ type:DataTypes.DATE },
  mobileNo:{ type:DataTypes.STRING }
}
,{
  hooks:{
    beforeCreate: [
      async function (user,options){
        if (user.password){ user.password =
          await bcrypt.hash(user.password, 8);}
        user.isActive = true;
        user.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (user,options){
        if (user !== undefined && user.length) { 
          for (let index = 0; index < user.length; index++) { 
            const element = user[index];
            if (element.password){ 
              element.password = await bcrypt.hash(element.password, 8);
            }
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
    afterCreate: [
      async function (user,options){
        sequelize.model('userAuthSettings').create({ userId:user.id });
      },
    ],
  }
}
);
User.prototype.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};
User.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  delete values.password;
  return values;
};
sequelizeTransforms(User);
sequelizePaginate.paginate(User);
module.exports = User;
