/**
 * fichierJointValidation.js
 * @description :: validate each post and put request as per fichierJoint model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of fichierJoint */
exports.schemaKeys = joi.object({
  fichierJoint_libelle: joi.string().allow(null).allow(''),
  ficheEmpotage_id: joi.number().integer().allow(0),
  fichierJoint_type: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of fichierJoint for updation */
exports.updateSchemaKeys = joi.object({
  fichierJoint_libelle: joi.string().allow(null).allow(''),
  ficheEmpotage_id: joi.number().integer().allow(0),
  fichierJoint_type: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of fichierJoint for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      fichierJoint_libelle: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      ficheEmpotage_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      fichierJoint_type: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
