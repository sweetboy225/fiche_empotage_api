/**
 * NotificationValidation.js
 * @description :: validate each post and put request as per Notification model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of Notification */
exports.schemaKeys = joi.object({
  notification_titre: joi.string().allow(null).allow(''),
  notification_message: joi.string().allow(null).allow(''),
  agent_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of Notification for updation */
exports.updateSchemaKeys = joi.object({
  notification_titre: joi.string().allow(null).allow(''),
  notification_message: joi.string().allow(null).allow(''),
  agent_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of Notification for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      notification_titre: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      notification_message: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      agent_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
