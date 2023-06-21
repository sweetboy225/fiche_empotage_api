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
  agentDRH_nom: joi.string().allow(null).allow(''),
  agentDRH_prenoms: joi.string().allow(null).allow(''),
  sectionDRH_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of AgentDRH for updation */
exports.updateSchemaKeys = joi.object({
  agentDRH_nom: joi.string().allow(null).allow(''),
  agentDRH_prenoms: joi.string().allow(null).allow(''),
  sectionDRH_id: joi.number().integer().allow(0),
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
      agentDRH_nom: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      agentDRH_prenoms: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      sectionDRH_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
