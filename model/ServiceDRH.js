/**
 * ServiceDRH.js
 * @description :: sequelize model of database table ServiceDRH
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let ServiceDRH = sequelize.define('ServiceDRH',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  sectionDRH_code:{ type:DataTypes.STRING },
  sectionDRH_libelle:{ type:DataTypes.STRING },
  directionDRH_code:{ type:DataTypes.STRING },
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
      async function (ServiceDRH,options){
        ServiceDRH.isActive = true;
        ServiceDRH.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (ServiceDRH,options){
        if (ServiceDRH !== undefined && ServiceDRH.length) { 
          for (let index = 0; index < ServiceDRH.length; index++) { 
        
            const element = ServiceDRH[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
ServiceDRH.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(ServiceDRH);
sequelizePaginate.paginate(ServiceDRH);
module.exports = ServiceDRH;
