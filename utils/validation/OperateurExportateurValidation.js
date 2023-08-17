/**
 * OperateurExportateurValidation.js
 * @description :: validate each post and put request as per OperateurExportateur model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of OperateurExportateur */
exports.schemaKeys = joi.object({
  OperateurExportateur_code: joi.string().allow(null).allow(''),
  OperateurExportateur_libelle: joi.string().allow(null).allow(''),
  operateur_nom: joi.string().allow(null).allow(''),
  OperateurExportateur_prenoms: joi.string().allow(null).allow(''),
  OperateurExportateur_contact: joi.string().allow(null).allow(''),
  OperateurExportateur_email: joi.string().allow(null).allow(''),
  OperateurExportateur_password: joi.string().allow(null).allow(''),
  OperateurExportateur_role: joi.number().integer().allow(0),
  OperateurExportateur_type: joi.number().integer().allow(0),
  OperateurExportateur_statut: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  user_id: joi.number().integer().allow(0)
}).unknown(true);

/** validation keys and properties of OperateurExportateur for updation */
exports.updateSchemaKeys = joi.object({
  OperateurExportateur_code: joi.string().allow(null).allow(''),
  OperateurExportateur_libelle: joi.string().allow(null).allow(''),
  operateur_nom: joi.string().allow(null).allow(''),
  OperateurExportateur_prenoms: joi.string().allow(null).allow(''),
  OperateurExportateur_contact: joi.string().allow(null).allow(''),
  OperateurExportateur_email: joi.string().allow(null).allow(''),
  OperateurExportateur_password: joi.string().allow(null).allow(''),
  OperateurExportateur_role: joi.number().integer().allow(0),
  OperateurExportateur_type: joi.number().integer().allow(0),
  OperateurExportateur_statut: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  user_id: joi.number().integer().allow(0),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of OperateurExportateur for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      OperateurExportateur_code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      OperateurExportateur_libelle: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      operateur_nom: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      OperateurExportateur_prenoms: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      OperateurExportateur_contact: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      OperateurExportateur_email: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      OperateurExportateur_password: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      OperateurExportateur_role: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      OperateurExportateur_type: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      OperateurExportateur_statut: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
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
