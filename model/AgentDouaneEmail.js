/**
 * AgentDouaneEmail.js
 * @description :: sequelize model of database table AgentDouaneEmail
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let AgentDouaneEmail = sequelize.define('AgentDouaneEmail',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  agentDouaneEmail_matricule:{ type:DataTypes.STRING },
  agentDouaneEmail_email:{ type:DataTypes.STRING },
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
      async function (AgentDouaneEmail,options){
        AgentDouaneEmail.isActive = true;
        AgentDouaneEmail.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (AgentDouaneEmail,options){
        if (AgentDouaneEmail !== undefined && AgentDouaneEmail.length) { 
          for (let index = 0; index < AgentDouaneEmail.length; index++) { 
        
            const element = AgentDouaneEmail[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
AgentDouaneEmail.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(AgentDouaneEmail);
sequelizePaginate.paginate(AgentDouaneEmail);
module.exports = AgentDouaneEmail;
