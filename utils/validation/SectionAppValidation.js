/**
 * SectionAppValidation.js
 * @description :: validate each post and put request as per SectionApp model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of SectionApp */
exports.schemaKeys = joi.object({
  sectionApp_code: joi.string().allow(null).allow(''),
  sectionApp_libelle: joi.string().allow(null).allow(''),
  sectionApp_statut: joi.number().integer().allow(0),
  directionApp_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of SectionApp for updation */
exports.updateSchemaKeys = joi.object({
  sectionApp_code: joi.string().allow(null).allow(''),
  sectionApp_libelle: joi.string().allow(null).allow(''),
  sectionApp_statut: joi.number().integer().allow(0),
  directionApp_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of SectionApp for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      sectionApp_code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      sectionApp_libelle: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      sectionApp_statut: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      directionApp_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
