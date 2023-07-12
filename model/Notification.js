/**
 * Notification.js
 * @description :: sequelize model of database table Notification
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let Notification = sequelize.define('Notification',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  notification_titre:{ type:DataTypes.STRING },
  notification_message:{ type:DataTypes.STRING },
  agent_id:{ type:DataTypes.INTEGER },
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
      async function (Notification,options){
        Notification.isActive = true;
        Notification.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (Notification,options){
        if (Notification !== undefined && Notification.length) { 
          for (let index = 0; index < Notification.length; index++) { 
        
            const element = Notification[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
Notification.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(Notification);
sequelizePaginate.paginate(Notification);
module.exports = Notification;
