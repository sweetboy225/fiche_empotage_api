/**
 * FicheempotageStatut.js
 * @description :: sequelize model of database table FicheempotageStatut
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let FicheempotageStatut = sequelize.define('FicheempotageStatut',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  FicheempotageStatut_id:{ type:DataTypes.STRING },
  FicheempotageStatut_date:{ type:DataTypes.STRING },
  statut_id:{ type:DataTypes.STRING },
  ficheEmpotage_id:{ type:DataTypes.STRING },
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
      async function (FicheempotageStatut,options){
        FicheempotageStatut.isActive = true;
        FicheempotageStatut.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (FicheempotageStatut,options){
        if (FicheempotageStatut !== undefined && FicheempotageStatut.length) { 
          for (let index = 0; index < FicheempotageStatut.length; index++) { 
        
            const element = FicheempotageStatut[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
FicheempotageStatut.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(FicheempotageStatut);
sequelizePaginate.paginate(FicheempotageStatut);
module.exports = FicheempotageStatut;
