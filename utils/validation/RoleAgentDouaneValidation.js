/**
 * RoleAgentDouaneValidation.js
 * @description :: validate each post and put request as per RoleAgentDouane model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of RoleAgentDouane */
exports.schemaKeys = joi.object({
  roleAgent_validFrom: joi.date().options({ convert: true }).allow(null).allow(''),
  roleAgent_validTo: joi.date().options({ convert: true }).allow(null).allow(''),
  agent_id: joi.number().integer().allow(0),
  roleDouane_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of RoleAgentDouane for updation */
exports.updateSchemaKeys = joi.object({
  roleAgent_validFrom: joi.date().options({ convert: true }).allow(null).allow(''),
  roleAgent_validTo: joi.date().options({ convert: true }).allow(null).allow(''),
  agent_id: joi.number().integer().allow(0),
  roleDouane_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of RoleAgentDouane for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      roleAgent_validFrom: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      roleAgent_validTo: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      agent_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      roleDouane_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
