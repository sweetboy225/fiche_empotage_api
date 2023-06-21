/**
 * SectionDRHValidation.js
 * @description :: validate each post and put request as per SectionDRH model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of SectionDRH */
exports.schemaKeys = joi.object({
  sectionDRH_libelle: joi.string().allow(null).allow(''),
  sectionDRH_statut: joi.string().allow(null).allow(''),
  directionDRH_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of SectionDRH for updation */
exports.updateSchemaKeys = joi.object({
  sectionDRH_libelle: joi.string().allow(null).allow(''),
  sectionDRH_statut: joi.string().allow(null).allow(''),
  directionDRH_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of SectionDRH for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      sectionDRH_libelle: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      sectionDRH_statut: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      directionDRH_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
