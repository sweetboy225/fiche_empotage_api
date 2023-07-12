/**
 * conteneurRectifValidation.js
 * @description :: validate each post and put request as per conteneurRectif model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of conteneurRectif */
exports.schemaKeys = joi.object({
  conteneur_id: joi.number().integer().allow(0),
  conteneurRectif_typeTc: joi.string().allow(null).allow(''),
  conteneurRectif_plomb: joi.string().allow(null).allow(''),
  conteneurRectif_lieu: joi.string().allow(null).allow(''),
  conteneurRectif_conditionnement: joi.string().allow(null).allow(''),
  rectif_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of conteneurRectif for updation */
exports.updateSchemaKeys = joi.object({
  conteneur_id: joi.number().integer().allow(0),
  conteneurRectif_typeTc: joi.string().allow(null).allow(''),
  conteneurRectif_plomb: joi.string().allow(null).allow(''),
  conteneurRectif_lieu: joi.string().allow(null).allow(''),
  conteneurRectif_conditionnement: joi.string().allow(null).allow(''),
  rectif_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of conteneurRectif for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      conteneur_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      conteneurRectif_typeTc: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      conteneurRectif_plomb: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      conteneurRectif_lieu: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      conteneurRectif_conditionnement: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      rectif_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
