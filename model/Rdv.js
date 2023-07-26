/**
 * Rdv.js
 * @description :: sequelize model of database table Rdv
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let Rdv = sequelize.define('Rdv',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  agent_id:{ type:DataTypes.INTEGER },
  rdv_agent_delegation:{ type:DataTypes.INTEGER },
  rdv_date:{ type:DataTypes.DATE },
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
      async function (Rdv,options){
        Rdv.isActive = true;
        Rdv.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (Rdv,options){
        if (Rdv !== undefined && Rdv.length) { 
          for (let index = 0; index < Rdv.length; index++) { 
        
            const element = Rdv[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
Rdv.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(Rdv);
sequelizePaginate.paginate(Rdv);
module.exports = Rdv;
