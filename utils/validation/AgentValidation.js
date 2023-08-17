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
  fonction_code: joi.string().allow(null).allow(''),
  agent_otp: joi.string().allow(null).allow(''),
  agent_otpExpiration: joi.date().options({ convert: true }).allow(null).allow(''),
  section_code: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  user_id: joi.number().integer().allow(0)
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
  fonction_code: joi.string().allow(null).allow(''),
  agent_otp: joi.string().allow(null).allow(''),
  agent_otpExpiration: joi.date().options({ convert: true }).allow(null).allow(''),
  section_code: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  user_id: joi.number().integer().allow(0),
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
      fonction_code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      agent_otp: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      agent_otpExpiration: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      section_code: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      user_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
