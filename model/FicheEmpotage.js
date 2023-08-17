/**
 * FicheEmpotage.js
 * @description :: sequelize model of database table FicheEmpotage
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let FicheEmpotage = sequelize.define('FicheEmpotage',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  operateurCDA_id:{ type:DataTypes.INTEGER },
  cda_code:{ type:DataTypes.STRING },
  operateurExportateur_id:{ type:DataTypes.INTEGER },
  exportateur_code:{ type:DataTypes.STRING },
  section_id:{ type:DataTypes.INTEGER },
  agent_matricule:{ type:DataTypes.STRING },
  ficheEmpotage_lieu:{ type:DataTypes.STRING },
  ficheEmpotage_numeroCamion:{ type:DataTypes.STRING },
  ficheEmpotage_dateOperateur:{ type:DataTypes.DATE },
  ficheEmpotage_dateValide:{ type:DataTypes.DATE },
  ficheEmpotage_numTravail:{ type:DataTypes.STRING },
  ficheEmpotage_numFiche:{ type:DataTypes.STRING },
  ficheEmpotage_debutVisite:{ type:DataTypes.DATE },
  ficheEmpotage_finVisite:{ type:DataTypes.DATE },
  ficheEmpotage_statut:{ type:DataTypes.INTEGER },
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
      async function (FicheEmpotage,options){
        FicheEmpotage.isActive = true;
        FicheEmpotage.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (FicheEmpotage,options){
        if (FicheEmpotage !== undefined && FicheEmpotage.length) { 
          for (let index = 0; index < FicheEmpotage.length; index++) { 
        
            const element = FicheEmpotage[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
FicheEmpotage.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(FicheEmpotage);
sequelizePaginate.paginate(FicheEmpotage);
module.exports = FicheEmpotage;
