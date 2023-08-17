/**
 * Historique.js
 * @description :: sequelize model of database table Historique
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let Historique = sequelize.define('Historique',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  historique_utilisateur:{ type:DataTypes.INTEGER },
  historique_transaction:{ type:DataTypes.STRING },
  historique_statutTransaction:{ type:DataTypes.STRING },
  historique_date:{ type:DataTypes.DATE },
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
      async function (Historique,options){
        Historique.isActive = true;
        Historique.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (Historique,options){
        if (Historique !== undefined && Historique.length) { 
          for (let index = 0; index < Historique.length; index++) { 
        
            const element = Historique[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
Historique.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(Historique);
sequelizePaginate.paginate(Historique);
module.exports = Historique;
