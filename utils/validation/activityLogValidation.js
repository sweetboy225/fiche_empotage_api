/**
 * activityLogValidation.js
 * @description :: validate each post and put request as per activityLog model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of activityLog */
exports.schemaKeys = joi.object({
  body: joi.string().allow(null).allow(''),
  params: joi.string().allow(null).allow(''),
  route: joi.string().allow(null).allow(''),
  module: joi.string().allow(null).allow(''),
  action: joi.string().allow(null).allow(''),
  referenceId: joi.string().allow(null).allow(''),
  loggedInUser: joi.number().integer().allow(0),
  method: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean()
}).unknown(true);

/** validation keys and properties of activityLog for updation */
exports.updateSchemaKeys = joi.object({
  body: joi.string().allow(null).allow(''),
  params: joi.string().allow(null).allow(''),
  route: joi.string().allow(null).allow(''),
  module: joi.string().allow(null).allow(''),
  action: joi.string().allow(null).allow(''),
  referenceId: joi.string().allow(null).allow(''),
  loggedInUser: joi.number().integer().allow(0),
  method: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of activityLog for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      body: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      params: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      route: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      module: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      action: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      referenceId: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      loggedInUser: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      method: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
