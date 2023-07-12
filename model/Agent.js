/**
 * Agent.js
 * @description :: sequelize model of database table Agent
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let Agent = sequelize.define('Agent',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  agent_matricule:{ type:DataTypes.STRING },
  agent_nom:{ type:DataTypes.STRING },
  agent_prenoms:{ type:DataTypes.STRING },
  agent_contact:{ type:DataTypes.STRING },
  agent_email:{ type:DataTypes.STRING },
  agent_password:{ type:DataTypes.STRING },
  agent_status:{ type:DataTypes.BOOLEAN },
  agent_fonctionId:{ type:DataTypes.INTEGER },
  agent_otp:{ type:DataTypes.STRING },
  agent_sectionId:{ type:DataTypes.INTEGER },
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
      async function (Agent,options){
        Agent.isActive = true;
        Agent.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (Agent,options){
        if (Agent !== undefined && Agent.length) { 
          for (let index = 0; index < Agent.length; index++) { 
        
            const element = Agent[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
Agent.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(Agent);
sequelizePaginate.paginate(Agent);
module.exports = Agent;
