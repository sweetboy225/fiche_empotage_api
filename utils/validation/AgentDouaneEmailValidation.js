/**
 * AgentDouaneEmailValidation.js
 * @description :: validate each post and put request as per AgentDouaneEmail model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of AgentDouaneEmail */
exports.schemaKeys = joi.object({
  agentDouaneEmail_matricule: joi.string().allow(null).allow(''),
  agentDouaneEmail_email: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of AgentDouaneEmail for updation */
exports.updateSchemaKeys = joi.object({
  agentDouaneEmail_matricule: joi.string().allow(null).allow(''),
  agentDouaneEmail_email: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of AgentDouaneEmail for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      agentDouaneEmail_matricule: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      agentDouaneEmail_email: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
