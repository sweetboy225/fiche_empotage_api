/**
 * ServiceDRHValidation.js
 * @description :: validate each post and put request as per ServiceDRH model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of ServiceDRH */
exports.schemaKeys = joi.object({
  sectionDRH_code: joi.string().allow(null).allow(''),
  sectionDRH_libelle: joi.string().allow(null).allow(''),
  directionDRH_code: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of ServiceDRH for updation */
exports.updateSchemaKeys = joi.object({
  sectionDRH_code: joi.string().allow(null).allow(''),
  sectionDRH_libelle: joi.string().allow(null).allow(''),
  directionDRH_code: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of ServiceDRH for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      sectionDRH_code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      sectionDRH_libelle: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      directionDRH_code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
