/**
 * FicheempotageStatutValidation.js
 * @description :: validate each post and put request as per FicheempotageStatut model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of FicheempotageStatut */
exports.schemaKeys = joi.object({
  FicheempotageStatut_id: joi.string().allow(null).allow(''),
  FicheempotageStatut_date: joi.string().allow(null).allow(''),
  statut_id: joi.string().allow(null).allow(''),
  ficheEmpotage_id: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of FicheempotageStatut for updation */
exports.updateSchemaKeys = joi.object({
  FicheempotageStatut_id: joi.string().allow(null).allow(''),
  FicheempotageStatut_date: joi.string().allow(null).allow(''),
  statut_id: joi.string().allow(null).allow(''),
  ficheEmpotage_id: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of FicheempotageStatut for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      FicheempotageStatut_id: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      FicheempotageStatut_date: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      statut_id: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      ficheEmpotage_id: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
