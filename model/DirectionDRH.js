/**
 * DirectionDRH.js
 * @description :: sequelize model of database table DirectionDRH
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let DirectionDRH = sequelize.define('DirectionDRH',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  directionDRH_code:{ type:DataTypes.STRING },
  directionDRH_libelle:{ type:DataTypes.STRING },
  directionDRH_statut:{ type:DataTypes.INTEGER },
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
      async function (DirectionDRH,options){
        DirectionDRH.isActive = true;
        DirectionDRH.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (DirectionDRH,options){
        if (DirectionDRH !== undefined && DirectionDRH.length) { 
          for (let index = 0; index < DirectionDRH.length; index++) { 
        
            const element = DirectionDRH[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
DirectionDRH.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(DirectionDRH);
sequelizePaginate.paginate(DirectionDRH);
module.exports = DirectionDRH;
