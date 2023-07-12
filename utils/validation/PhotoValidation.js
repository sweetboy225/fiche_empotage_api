/**
 * PhotoValidation.js
 * @description :: validate each post and put request as per Photo model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of Photo */
exports.schemaKeys = joi.object({
  photo_type: joi.number().integer().allow(0),
  photo_libelle: joi.string().allow(null).allow(''),
  ficheEmpotage_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of Photo for updation */
exports.updateSchemaKeys = joi.object({
  photo_type: joi.number().integer().allow(0),
  photo_libelle: joi.string().allow(null).allow(''),
  ficheEmpotage_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of Photo for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      photo_type: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      photo_libelle: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      ficheEmpotage_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
