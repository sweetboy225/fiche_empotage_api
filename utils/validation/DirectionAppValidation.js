/**
 * DirectionAppValidation.js
 * @description :: validate each post and put request as per DirectionApp model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of DirectionApp */
exports.schemaKeys = joi.object({
  direction_code: joi.string().allow(null).allow(''),
  direction_libelle: joi.string().allow(null).allow(''),
  direction_statut: joi.boolean(),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of DirectionApp for updation */
exports.updateSchemaKeys = joi.object({
  direction_code: joi.string().allow(null).allow(''),
  direction_libelle: joi.string().allow(null).allow(''),
  direction_statut: joi.boolean(),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of DirectionApp for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      direction_code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      direction_libelle: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      direction_statut: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
