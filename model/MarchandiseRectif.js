/**
 * MarchandiseRectif.js
 * @description :: sequelize model of database table MarchandiseRectif
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let MarchandiseRectif = sequelize.define('MarchandiseRectif',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  MarchandiseRectif_posTar:{ type:DataTypes.STRING },
  MarchandiseRectif_designation:{ type:DataTypes.STRING },
  MarchandiseRectif_quantite:{ type:DataTypes.INTEGER },
  MarchandiseRectif_poidsNet:{ type:DataTypes.INTEGER },
  MarchandiseRectif_numConteneur:{ type:DataTypes.STRING },
  rectif_id:{ type:DataTypes.INTEGER },
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
      async function (MarchandiseRectif,options){
        MarchandiseRectif.isActive = true;
        MarchandiseRectif.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (MarchandiseRectif,options){
        if (MarchandiseRectif !== undefined && MarchandiseRectif.length) { 
          for (let index = 0; index < MarchandiseRectif.length; index++) { 
        
            const element = MarchandiseRectif[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
MarchandiseRectif.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(MarchandiseRectif);
sequelizePaginate.paginate(MarchandiseRectif);
module.exports = MarchandiseRectif;
