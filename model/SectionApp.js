/**
 * SectionApp.js
 * @description :: sequelize model of database table SectionApp
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let SectionApp = sequelize.define('SectionApp',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  sectionApp_code:{ type:DataTypes.STRING },
  sectionApp_libelle:{ type:DataTypes.STRING },
  sectionApp_statut:{ type:DataTypes.INTEGER },
  directionApp_id:{ type:DataTypes.INTEGER },
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
      async function (SectionApp,options){
        SectionApp.isActive = true;
        SectionApp.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (SectionApp,options){
        if (SectionApp !== undefined && SectionApp.length) { 
          for (let index = 0; index < SectionApp.length; index++) { 
        
            const element = SectionApp[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
SectionApp.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(SectionApp);
sequelizePaginate.paginate(SectionApp);
module.exports = SectionApp;
