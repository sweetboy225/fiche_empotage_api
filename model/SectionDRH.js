/**
 * SectionDRH.js
 * @description :: sequelize model of database table SectionDRH
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let SectionDRH = sequelize.define('SectionDRH',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  sectionDRH_libelle:{ type:DataTypes.STRING },
  sectionDRH_statut:{ type:DataTypes.STRING },
  directionDRH_id:{ type:DataTypes.INTEGER },
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
      async function (SectionDRH,options){
        SectionDRH.isActive = true;
        SectionDRH.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (SectionDRH,options){
        if (SectionDRH !== undefined && SectionDRH.length) { 
          for (let index = 0; index < SectionDRH.length; index++) { 
        
            const element = SectionDRH[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
SectionDRH.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(SectionDRH);
sequelizePaginate.paginate(SectionDRH);
module.exports = SectionDRH;
