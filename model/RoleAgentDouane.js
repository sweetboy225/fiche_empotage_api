/**
 * RoleAgentDouane.js
 * @description :: sequelize model of database table RoleAgentDouane
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let RoleAgentDouane = sequelize.define('RoleAgentDouane',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  roleAgent_validFrom:{ type:DataTypes.DATE },
  roleAgent_validTo:{ type:DataTypes.DATE },
  agent_id:{ type:DataTypes.INTEGER },
  roleDouane_id:{ type:DataTypes.INTEGER },
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
      async function (RoleAgentDouane,options){
        RoleAgentDouane.isActive = true;
        RoleAgentDouane.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (RoleAgentDouane,options){
        if (RoleAgentDouane !== undefined && RoleAgentDouane.length) { 
          for (let index = 0; index < RoleAgentDouane.length; index++) { 
        
            const element = RoleAgentDouane[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
RoleAgentDouane.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(RoleAgentDouane);
sequelizePaginate.paginate(RoleAgentDouane);
module.exports = RoleAgentDouane;
