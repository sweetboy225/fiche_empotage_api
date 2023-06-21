/**
 * conteneurRectif.js
 * @description :: sequelize model of database table conteneurRectif
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let ConteneurRectif = sequelize.define('conteneurRectif',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  conteneur_id:{ type:DataTypes.INTEGER },
  conteneurRectif_typeTc:{ type:DataTypes.STRING },
  conteneurRectif_plomb:{ type:DataTypes.STRING },
  conteneurRectif_lieu:{ type:DataTypes.STRING },
  conteneurRectif_conditionnement:{ type:DataTypes.STRING },
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
      async function (conteneurRectif,options){
        conteneurRectif.isActive = true;
        conteneurRectif.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (conteneurRectif,options){
        if (conteneurRectif !== undefined && conteneurRectif.length) { 
          for (let index = 0; index < conteneurRectif.length; index++) { 
        
            const element = conteneurRectif[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
ConteneurRectif.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(ConteneurRectif);
sequelizePaginate.paginate(ConteneurRectif);
module.exports = ConteneurRectif;
