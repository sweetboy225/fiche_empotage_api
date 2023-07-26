/**
 * DirectionApp.js
 * @description :: sequelize model of database table DirectionApp
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let DirectionApp = sequelize.define('DirectionApp',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  direction_code:{ type:DataTypes.STRING },
  direction_libelle:{ type:DataTypes.STRING },
  direction_statut:{ type:DataTypes.BOOLEAN },
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
      async function (DirectionApp,options){
        DirectionApp.isActive = true;
        DirectionApp.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (DirectionApp,options){
        if (DirectionApp !== undefined && DirectionApp.length) { 
          for (let index = 0; index < DirectionApp.length; index++) { 
        
            const element = DirectionApp[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
DirectionApp.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(DirectionApp);
sequelizePaginate.paginate(DirectionApp);
module.exports = DirectionApp;
