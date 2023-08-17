/**
 * OperateurExportateur.js
 * @description :: sequelize model of database table OperateurExportateur
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let OperateurExportateur = sequelize.define('OperateurExportateur',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  OperateurExportateur_code:{ type:DataTypes.STRING },
  OperateurExportateur_libelle:{ type:DataTypes.STRING },
  operateur_nom:{ type:DataTypes.STRING },
  OperateurExportateur_prenoms:{ type:DataTypes.STRING },
  OperateurExportateur_contact:{ type:DataTypes.STRING },
  OperateurExportateur_email:{ type:DataTypes.STRING },
  OperateurExportateur_password:{ type:DataTypes.STRING },
  OperateurExportateur_role:{ type:DataTypes.INTEGER },
  OperateurExportateur_type:{ type:DataTypes.INTEGER },
  OperateurExportateur_statut:{ type:DataTypes.INTEGER },
  isDeleted:{ type:DataTypes.BOOLEAN },
  isActive:{ type:DataTypes.BOOLEAN },
  createdAt:{ type:DataTypes.DATE },
  updatedAt:{ type:DataTypes.DATE },
  addedBy:{ type:DataTypes.INTEGER },
  updatedBy:{ type:DataTypes.INTEGER },
  user_id:{ type:DataTypes.INTEGER }
}
,{
  hooks:{
    beforeCreate: [
      async function (OperateurExportateur,options){
        OperateurExportateur.isActive = true;
        OperateurExportateur.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (OperateurExportateur,options){
        if (OperateurExportateur !== undefined && OperateurExportateur.length) { 
          for (let index = 0; index < OperateurExportateur.length; index++) { 
        
            const element = OperateurExportateur[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
OperateurExportateur.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(OperateurExportateur);
sequelizePaginate.paginate(OperateurExportateur);
module.exports = OperateurExportateur;
