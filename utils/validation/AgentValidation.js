/**
 * AgentValidation.js
 * @description :: validate each post and put request as per Agent model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of Agent */
exports.schemaKeys = joi.object({
  agent_matricule: joi.string().allow(null).allow(''),
  agent_nom: joi.string().allow(null).allow(''),
  agent_prenoms: joi.string().allow(null).allow(''),
  agent_contact: joi.string().allow(null).allow(''),
  agent_email: joi.string().allow(null).allow(''),
  agent_password: joi.string().allow(null).allow(''),
  agent_status: joi.boolean(),
  agent_fonctionId: joi.number().integer().allow(0),
  agent_otp: joi.string().allow(null).allow(''),
  agent_sectionId: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of Agent for updation */
exports.updateSchemaKeys = joi.object({
  agent_matricule: joi.string().allow(null).allow(''),
  agent_nom: joi.string().allow(null).allow(''),
  agent_prenoms: joi.string().allow(null).allow(''),
  agent_contact: joi.string().allow(null).allow(''),
  agent_email: joi.string().allow(null).allow(''),
  agent_password: joi.string().allow(null).allow(''),
  agent_status: joi.boolean(),
  agent_fonctionId: joi.number().integer().allow(0),
  agent_otp: joi.string().allow(null).allow(''),
  agent_sectionId: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of Agent for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      agent_matricule: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      agent_nom: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      agent_prenoms: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      agent_contact: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      agent_email: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      agent_password: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      agent_status: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      agent_fonctionId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      agent_otp: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      agent_sectionId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
