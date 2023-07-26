/**
 * DirectionDRHValidation.js
 * @description :: validate each post and put request as per DirectionDRH model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of DirectionDRH */
exports.schemaKeys = joi.object({
  directionDRH_code: joi.string().allow(null).allow(''),
  directionDRH_libelle: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of DirectionDRH for updation */
exports.updateSchemaKeys = joi.object({
  directionDRH_code: joi.string().allow(null).allow(''),
  directionDRH_libelle: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of DirectionDRH for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      directionDRH_code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      directionDRH_libelle: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
