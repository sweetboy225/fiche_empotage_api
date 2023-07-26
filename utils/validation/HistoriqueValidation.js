/**
 * HistoriqueValidation.js
 * @description :: validate each post and put request as per Historique model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of Historique */
exports.schemaKeys = joi.object({
  historique_utilisateur: joi.number().integer().allow(0),
  historique_transaction: joi.string().allow(null).allow(''),
  historique_statutTransaction: joi.string().allow(null).allow(''),
  historique_date: joi.date().options({ convert: true }).allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of Historique for updation */
exports.updateSchemaKeys = joi.object({
  historique_utilisateur: joi.number().integer().allow(0),
  historique_transaction: joi.string().allow(null).allow(''),
  historique_statutTransaction: joi.string().allow(null).allow(''),
  historique_date: joi.date().options({ convert: true }).allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of Historique for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      historique_utilisateur: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      historique_transaction: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      historique_statutTransaction: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      historique_date: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
