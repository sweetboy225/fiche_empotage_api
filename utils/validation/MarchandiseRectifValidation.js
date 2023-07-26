/**
 * MarchandiseRectifValidation.js
 * @description :: validate each post and put request as per MarchandiseRectif model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of MarchandiseRectif */
exports.schemaKeys = joi.object({
  MarchandiseRectif_posTar: joi.string().allow(null).allow(''),
  MarchandiseRectif_designation: joi.string().allow(null).allow(''),
  MarchandiseRectif_quantite: joi.number().integer().allow(0),
  MarchandiseRectif_poidsNet: joi.number().integer().allow(0),
  MarchandiseRectif_numConteneur: joi.string().allow(null).allow(''),
  rectif_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of MarchandiseRectif for updation */
exports.updateSchemaKeys = joi.object({
  MarchandiseRectif_posTar: joi.string().allow(null).allow(''),
  MarchandiseRectif_designation: joi.string().allow(null).allow(''),
  MarchandiseRectif_quantite: joi.number().integer().allow(0),
  MarchandiseRectif_poidsNet: joi.number().integer().allow(0),
  MarchandiseRectif_numConteneur: joi.string().allow(null).allow(''),
  rectif_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of MarchandiseRectif for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      MarchandiseRectif_posTar: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      MarchandiseRectif_designation: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      MarchandiseRectif_quantite: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      MarchandiseRectif_poidsNet: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      MarchandiseRectif_numConteneur: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
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
