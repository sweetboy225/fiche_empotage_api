/**
 * Conteneur.js
 * @description :: sequelize model of database table Conteneur
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let Conteneur = sequelize.define('Conteneur',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  conteneur_typeTcCDA:{ type:DataTypes.STRING },
  conteneur_typeTcDouanes:{ type:DataTypes.STRING },
  conteneur_typeTcRectif:{ type:DataTypes.STRING },
  conteneur_plombCDA:{ type:DataTypes.STRING },
  conteneur_plombDounes:{ type:DataTypes.STRING },
  conteneur_plombRectif:{ type:DataTypes.STRING },
  conteneur_lieu:{ type:DataTypes.STRING },
  conteneur_conditionnement:{ type:DataTypes.STRING },
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
      async function (Conteneur,options){
        Conteneur.isActive = true;
        Conteneur.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (Conteneur,options){
        if (Conteneur !== undefined && Conteneur.length) { 
          for (let index = 0; index < Conteneur.length; index++) { 
        
            const element = Conteneur[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
Conteneur.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(Conteneur);
sequelizePaginate.paginate(Conteneur);
module.exports = Conteneur;
