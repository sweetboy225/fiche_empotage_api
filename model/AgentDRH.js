/**
 * AgentDRH.js
 * @description :: sequelize model of database table AgentDRH
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let AgentDRH = sequelize.define('AgentDRH',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  agentDRH_nom:{ type:DataTypes.STRING },
  agentDRH_prenoms:{ type:DataTypes.STRING },
  sectionDRH_id:{ type:DataTypes.INTEGER },
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
      async function (AgentDRH,options){
        AgentDRH.isActive = true;
        AgentDRH.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (AgentDRH,options){
        if (AgentDRH !== undefined && AgentDRH.length) { 
          for (let index = 0; index < AgentDRH.length; index++) { 
        
            const element = AgentDRH[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
AgentDRH.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(AgentDRH);
sequelizePaginate.paginate(AgentDRH);
module.exports = AgentDRH;
