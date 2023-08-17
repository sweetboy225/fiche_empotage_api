/**
 * AgentDRHValidation.js
 * @description :: validate each post and put request as per AgentDRH model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of AgentDRH */
exports.schemaKeys = joi.object({
  agentDrh_matricule: joi.string().allow(null).allow(''),
  serviceDrh_code: joi.string().allow(null).allow(''),
  agentDrh_nom: joi.string().allow(null).allow(''),
  agentDrh_prenoms: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of AgentDRH for updation */
exports.updateSchemaKeys = joi.object({
  agentDrh_matricule: joi.string().allow(null).allow(''),
  serviceDrh_code: joi.string().allow(null).allow(''),
  agentDrh_nom: joi.string().allow(null).allow(''),
  agentDrh_prenoms: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of AgentDRH for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      agentDrh_matricule: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      serviceDrh_code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      agentDrh_nom: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      agentDrh_prenoms: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
