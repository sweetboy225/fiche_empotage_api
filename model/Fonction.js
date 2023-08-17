/**
 * Fonction.js
 * @description :: sequelize model of database table Fonction
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let Fonction = sequelize.define('Fonction',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  fonction_code:{ type:DataTypes.STRING },
  fonction_libelle:{ type:DataTypes.STRING },
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
      async function (Fonction,options){
        Fonction.isActive = true;
        Fonction.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (Fonction,options){
        if (Fonction !== undefined && Fonction.length) { 
          for (let index = 0; index < Fonction.length; index++) { 
        
            const element = Fonction[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
Fonction.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(Fonction);
sequelizePaginate.paginate(Fonction);
module.exports = Fonction;
