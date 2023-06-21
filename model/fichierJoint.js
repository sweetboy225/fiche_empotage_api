/**
 * fichierJoint.js
 * @description :: sequelize model of database table fichierJoint
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let FichierJoint = sequelize.define('fichierJoint',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  fichierJoint_libelle:{ type:DataTypes.STRING },
  ficheEmpotage_id:{ type:DataTypes.INTEGER },
  fichierJoint_type:{ type:DataTypes.INTEGER },
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
      async function (fichierJoint,options){
        fichierJoint.isActive = true;
        fichierJoint.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (fichierJoint,options){
        if (fichierJoint !== undefined && fichierJoint.length) { 
          for (let index = 0; index < fichierJoint.length; index++) { 
        
            const element = fichierJoint[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
FichierJoint.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(FichierJoint);
sequelizePaginate.paginate(FichierJoint);
module.exports = FichierJoint;
