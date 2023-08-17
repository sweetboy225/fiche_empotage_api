/**
 * userValidation.js
 * @description :: validate each post and put request as per user model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

const { USER_TYPES } = require('../../constants/authConstant');
const { convertObjectToEnum } = require('../common');  

/** validation keys and properties of user */
exports.schemaKeys = joi.object({
  user_password: joi.string().allow(null).allow(''),
  user_email: joi.string().allow(null).allow(''),
  userType: joi.number().integer().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  otp: joi.number().integer().allow(0),
  optExpireTime: joi.date().options({ convert: true }).allow(null).allow(''),
  email: joi.string().allow(null).allow(''),
  mobileNo: joi.string().allow(null).allow(''),
  password: joi.string().allow(null).allow(''),
  username: joi.string().allow(null).allow('')
}).unknown(true);

/** validation keys and properties of user for updation */
exports.updateSchemaKeys = joi.object({
  user_password: joi.string().allow(null).allow(''),
  user_email: joi.string().allow(null).allow(''),
  userType: joi.number().integer().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  otp: joi.number().integer().allow(0),
  optExpireTime: joi.date().options({ convert: true }).allow(null).allow(''),
  email: joi.string().allow(null).allow(''),
  mobileNo: joi.string().allow(null).allow(''),
  password: joi.string().allow(null).allow(''),
  username: joi.string().allow(null).allow(''),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of user for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      user_password: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      user_email: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      userType: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      otp: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      optExpireTime: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      email: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      mobileNo: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      password: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      username: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
