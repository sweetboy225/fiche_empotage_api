/**
 * OperateurCDA.js
 * @description :: sequelize model of database table OperateurCDA
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let OperateurCDA = sequelize.define('OperateurCDA',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  OperateurCDA_code:{ type:DataTypes.STRING },
  OperateurCDA_libelle:{ type:DataTypes.STRING },
  operateuCDA_nom:{ type:DataTypes.STRING },
  OperateurCDA_prenoms:{ type:DataTypes.STRING },
  OperateurCDA_contact:{ type:DataTypes.STRING },
  OperateurCDA_email:{ type:DataTypes.STRING },
  operateur_password:{ type:DataTypes.STRING },
  OperateurCDA_role:{ type:DataTypes.INTEGER },
  OperateurCDA_type:{ type:DataTypes.INTEGER },
  OperateurCDA_statut:{ type:DataTypes.INTEGER },
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
      async function (OperateurCDA,options){
        OperateurCDA.isActive = true;
        OperateurCDA.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (OperateurCDA,options){
        if (OperateurCDA !== undefined && OperateurCDA.length) { 
          for (let index = 0; index < OperateurCDA.length; index++) { 
        
            const element = OperateurCDA[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
OperateurCDA.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(OperateurCDA);
sequelizePaginate.paginate(OperateurCDA);
module.exports = OperateurCDA;
