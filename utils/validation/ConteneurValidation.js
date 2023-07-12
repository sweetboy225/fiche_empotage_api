/**
 * ConteneurValidation.js
 * @description :: validate each post and put request as per Conteneur model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of Conteneur */
exports.schemaKeys = joi.object({
  conteneur_typeTcCDA: joi.string().allow(null).allow(''),
  conteneur_typeTcDouanes: joi.string().allow(null).allow(''),
  conteneur_typeTcRectif: joi.string().allow(null).allow(''),
  conteneur_plombCDA: joi.string().allow(null).allow(''),
  conteneur_plombDounes: joi.string().allow(null).allow(''),
  conteneur_plombRectif: joi.string().allow(null).allow(''),
  conteneur_lieu: joi.string().allow(null).allow(''),
  conteneur_conditionnement: joi.string().allow(null).allow(''),
  ficheEmpotage_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of Conteneur for updation */
exports.updateSchemaKeys = joi.object({
  conteneur_typeTcCDA: joi.string().allow(null).allow(''),
  conteneur_typeTcDouanes: joi.string().allow(null).allow(''),
  conteneur_typeTcRectif: joi.string().allow(null).allow(''),
  conteneur_plombCDA: joi.string().allow(null).allow(''),
  conteneur_plombDounes: joi.string().allow(null).allow(''),
  conteneur_plombRectif: joi.string().allow(null).allow(''),
  conteneur_lieu: joi.string().allow(null).allow(''),
  conteneur_conditionnement: joi.string().allow(null).allow(''),
  ficheEmpotage_id: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of Conteneur for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      conteneur_typeTcCDA: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      conteneur_typeTcDouanes: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      conteneur_typeTcRectif: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      conteneur_plombCDA: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      conteneur_plombDounes: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      conteneur_plombRectif: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      conteneur_lieu: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      conteneur_conditionnement: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      ficheEmpotage_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
