/**
 * FicheEmpotageValidation.js
 * @description :: validate each post and put request as per FicheEmpotage model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of FicheEmpotage */
exports.schemaKeys = joi.object({
  operateurCDA_id: joi.number().integer().allow(0),
  cda_code: joi.string().allow(null).allow(''),
  operateurExportateur_id: joi.number().integer().allow(0),
  exportateur_code: joi.string().allow(null).allow(''),
  section_id: joi.number().integer().allow(0),
  agent_matricule: joi.string().allow(null).allow(''),
  ficheEmpotage_lieu: joi.string().allow(null).allow(''),
  ficheEmpotage_numeroCamion: joi.string().allow(null).allow(''),
  ficheEmpotage_dateOperateur: joi.date().options({ convert: true }).allow(null).allow(''),
  ficheEmpotage_dateValide: joi.date().options({ convert: true }).allow(null).allow(''),
  ficheEmpotage_numTravail: joi.string().allow(null).allow(''),
  ficheEmpotage_numFiche: joi.string().allow(null).allow(''),
  ficheEmpotage_debutVisite: joi.date().options({ convert: true }).allow(null).allow(''),
  ficheEmpotage_finVisite: joi.date().options({ convert: true }).allow(null).allow(''),
  ficheEmpotage_statut: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of FicheEmpotage for updation */
exports.updateSchemaKeys = joi.object({
  operateurCDA_id: joi.number().integer().allow(0),
  cda_code: joi.string().allow(null).allow(''),
  operateurExportateur_id: joi.number().integer().allow(0),
  exportateur_code: joi.string().allow(null).allow(''),
  section_id: joi.number().integer().allow(0),
  agent_matricule: joi.string().allow(null).allow(''),
  ficheEmpotage_lieu: joi.string().allow(null).allow(''),
  ficheEmpotage_numeroCamion: joi.string().allow(null).allow(''),
  ficheEmpotage_dateOperateur: joi.date().options({ convert: true }).allow(null).allow(''),
  ficheEmpotage_dateValide: joi.date().options({ convert: true }).allow(null).allow(''),
  ficheEmpotage_numTravail: joi.string().allow(null).allow(''),
  ficheEmpotage_numFiche: joi.string().allow(null).allow(''),
  ficheEmpotage_debutVisite: joi.date().options({ convert: true }).allow(null).allow(''),
  ficheEmpotage_finVisite: joi.date().options({ convert: true }).allow(null).allow(''),
  ficheEmpotage_statut: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of FicheEmpotage for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      operateurCDA_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      cda_code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      operateurExportateur_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      exportateur_code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      section_id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      agent_matricule: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      ficheEmpotage_lieu: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      ficheEmpotage_numeroCamion: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      ficheEmpotage_dateOperateur: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      ficheEmpotage_dateValide: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      ficheEmpotage_numTravail: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      ficheEmpotage_numFiche: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      ficheEmpotage_debutVisite: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      ficheEmpotage_finVisite: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      ficheEmpotage_statut: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
