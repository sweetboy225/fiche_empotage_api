/**
 * Rectif.js
 * @description :: sequelize model of database table Rectif
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let Rectif = sequelize.define('Rectif',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  rectif_date:{ type:DataTypes.DATE },
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
      async function (Rectif,options){
        Rectif.isActive = true;
        Rectif.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (Rectif,options){
        if (Rectif !== undefined && Rectif.length) { 
          for (let index = 0; index < Rectif.length; index++) { 
        
            const element = Rectif[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
Rectif.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(Rectif);
sequelizePaginate.paginate(Rectif);
module.exports = Rectif;
