/**
 * RoleDouane.js
 * @description :: sequelize model of database table RoleDouane
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let RoleDouane = sequelize.define('RoleDouane',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  roleDouane_libelle:{ type:DataTypes.STRING },
  isDeleted:{ type:DataTypes.BOOLEAN },
  isActive:{ type:DataTypes.BOOLEAN },
  createdAt:{ type:DataTypes.DATE },
  updatedAt:{ type:DataTypes.DATE },
  addedBy:{ type:DataTypes.INTEGER },
  updatedBy:{ type:DataTypes.INTEGER }
}
,{
  hooks:{
    beforeCreate: [
      async function (RoleDouane,options){
        RoleDouane.isActive = true;
        RoleDouane.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (RoleDouane,options){
        if (RoleDouane !== undefined && RoleDouane.length) { 
          for (let index = 0; index < RoleDouane.length; index++) { 
        
            const element = RoleDouane[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
RoleDouane.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(RoleDouane);
sequelizePaginate.paginate(RoleDouane);
module.exports = RoleDouane;
