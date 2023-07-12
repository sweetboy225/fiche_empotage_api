/**
 * Marchandise.js
 * @description :: sequelize model of database table Marchandise
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let Marchandise = sequelize.define('Marchandise',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  marchandise_posTarCDA:{ type:DataTypes.STRING },
  marchandise_posTarDouanes:{ type:DataTypes.STRING },
  marchandise_posTarRectif:{ type:DataTypes.STRING },
  marchandise_designationCDA:{ type:DataTypes.STRING },
  marchandise_designationDouanes:{ type:DataTypes.STRING },
  marchandise_designationRectif:{ type:DataTypes.STRING },
  marchandise_quantiteCDA:{ type:DataTypes.INTEGER },
  marchandise_quantiteDouanes:{ type:DataTypes.INTEGER },
  marchandise_quantiteRectif:{ type:DataTypes.INTEGER },
  marchandise_poidsNetCDA:{ type:DataTypes.INTEGER },
  marchandise_poidsNetDouanes:{ type:DataTypes.INTEGER },
  marchandise_poidsNetRectif:{ type:DataTypes.INTEGER },
  marchandise_numConteneur:{ type:DataTypes.STRING },
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
      async function (Marchandise,options){
        Marchandise.isActive = true;
        Marchandise.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (Marchandise,options){
        if (Marchandise !== undefined && Marchandise.length) { 
          for (let index = 0; index < Marchandise.length; index++) { 
        
            const element = Marchandise[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
Marchandise.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(Marchandise);
sequelizePaginate.paginate(Marchandise);
module.exports = Marchandise;
