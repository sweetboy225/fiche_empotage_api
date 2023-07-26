/**
 * MarchandiseValidation.js
 * @description :: validate each post and put request as per Marchandise model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of Marchandise */
exports.schemaKeys = joi.object({
  marchandise_posTarCDA: joi.string().allow(null).allow(''),
  marchandise_posTarDouanes: joi.string().allow(null).allow(''),
  marchandise_posTarRectif: joi.string().allow(null).allow(''),
  marchandise_designationCDA: joi.string().allow(null).allow(''),
  marchandise_designationDouanes: joi.string().allow(null).allow(''),
  marchandise_designationRectif: joi.string().allow(null).allow(''),
  marchandise_quantiteCDA: joi.number().integer().allow(0),
  marchandise_quantiteDouanes: joi.number().integer().allow(0),
  marchandise_quantiteRectif: joi.number().integer().allow(0),
  marchandise_poidsNetCDA: joi.number().integer().allow(0),
  marchandise_poidsNetDouanes: joi.number().integer().allow(0),
  marchandise_poidsNetRectif: joi.number().integer().allow(0),
  marchandise_numConteneur: joi.string().allow(null).allow(''),
  ficheEmpotage_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of Marchandise for updation */
exports.updateSchemaKeys = joi.object({
  marchandise_posTarCDA: joi.string().allow(null).allow(''),
  marchandise_posTarDouanes: joi.string().allow(null).allow(''),
  marchandise_posTarRectif: joi.string().allow(null).allow(''),
  marchandise_designationCDA: joi.string().allow(null).allow(''),
  marchandise_designationDouanes: joi.string().allow(null).allow(''),
  marchandise_designationRectif: joi.string().allow(null).allow(''),
  marchandise_quantiteCDA: joi.number().integer().allow(0),
  marchandise_quantiteDouanes: joi.number().integer().allow(0),
  marchandise_quantiteRectif: joi.number().integer().allow(0),
  marchandise_poidsNetCDA: joi.number().integer().allow(0),
  marchandise_poidsNetDouanes: joi.number().integer().allow(0),
  marchandise_poidsNetRectif: joi.number().integer().allow(0),
  marchandise_numConteneur: joi.string().allow(null).allow(''),
  ficheEmpotage_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of Marchandise for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      marchandise_posTarCDA: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      marchandise_posTarDouanes: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      marchandise_posTarRectif: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      marchandise_designationCDA: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      marchandise_designationDouanes: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      marchandise_designationRectif: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      marchandise_quantiteCDA: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      marchandise_quantiteDouanes: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      marchandise_quantiteRectif: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      marchandise_poidsNetCDA: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      marchandise_poidsNetDouanes: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      marchandise_poidsNetRectif: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      marchandise_numConteneur: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
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
