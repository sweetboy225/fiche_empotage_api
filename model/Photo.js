/**
 * Photo.js
 * @description :: sequelize model of database table Photo
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let Photo = sequelize.define('Photo',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  photo_type:{ type:DataTypes.INTEGER },
  photo_libelle:{ type:DataTypes.STRING },
  ficheEmpotage_id:{ type:DataTypes.INTEGER },
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
      async function (Photo,options){
        Photo.isActive = true;
        Photo.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (Photo,options){
        if (Photo !== undefined && Photo.length) { 
          for (let index = 0; index < Photo.length; index++) { 
        
            const element = Photo[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
Photo.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(Photo);
sequelizePaginate.paginate(Photo);
module.exports = Photo;
