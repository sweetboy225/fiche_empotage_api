/**
 * OperateurCDAValidation.js
 * @description :: validate each post and put request as per OperateurCDA model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of OperateurCDA */
exports.schemaKeys = joi.object({
  OperateurCDA_code: joi.string().allow(null).allow(''),
  OperateurCDA_libelle: joi.string().allow(null).allow(''),
  operateuCDA_nom: joi.string().allow(null).allow(''),
  OperateurCDA_prenoms: joi.string().allow(null).allow(''),
  OperateurCDA_contact: joi.string().allow(null).allow(''),
  OperateurCDA_email: joi.string().allow(null).allow(''),
  operateur_password: joi.string().allow(null).allow(''),
  OperateurCDA_role: joi.number().integer().allow(0),
  OperateurCDA_type: joi.number().integer().allow(0),
  OperateurCDA_statut: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of OperateurCDA for updation */
exports.updateSchemaKeys = joi.object({
  OperateurCDA_code: joi.string().allow(null).allow(''),
  OperateurCDA_libelle: joi.string().allow(null).allow(''),
  operateuCDA_nom: joi.string().allow(null).allow(''),
  OperateurCDA_prenoms: joi.string().allow(null).allow(''),
  OperateurCDA_contact: joi.string().allow(null).allow(''),
  OperateurCDA_email: joi.string().allow(null).allow(''),
  operateur_password: joi.string().allow(null).allow(''),
  OperateurCDA_role: joi.number().integer().allow(0),
  OperateurCDA_type: joi.number().integer().allow(0),
  OperateurCDA_statut: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of OperateurCDA for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      OperateurCDA_code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      OperateurCDA_libelle: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      operateuCDA_nom: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      OperateurCDA_prenoms: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      OperateurCDA_contact: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      OperateurCDA_email: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      operateur_password: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      OperateurCDA_role: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      OperateurCDA_type: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      OperateurCDA_statut: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
