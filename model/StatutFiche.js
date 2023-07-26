/**
 * StatutFiche.js
 * @description :: sequelize model of database table StatutFiche
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let StatutFiche = sequelize.define('StatutFiche',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  statut_code:{ type:DataTypes.STRING },
  statut_libelle:{ type:DataTypes.STRING },
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
      async function (StatutFiche,options){
        StatutFiche.isActive = true;
        StatutFiche.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (StatutFiche,options){
        if (StatutFiche !== undefined && StatutFiche.length) { 
          for (let index = 0; index < StatutFiche.length; index++) { 
        
            const element = StatutFiche[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
StatutFiche.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(StatutFiche);
sequelizePaginate.paginate(StatutFiche);
module.exports = StatutFiche;
