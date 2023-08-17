/**
 * OperateurExportateurController.js
 * @description :: exports action methods for OperateurExportateur.
 */

const OperateurExportateur = require('../../../model/OperateurExportateur');
const OperateurExportateurSchemaKey = require('../../../utils/validation/OperateurExportateurValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of OperateurExportateur in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created OperateurExportateur. {status, message, data}
 */ 
const addOperateurExportateur = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      OperateurExportateurSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdOperateurExportateur = await dbService.createOne(OperateurExportateur,dataToCreate);
    return  res.success({ data :createdOperateurExportateur });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of OperateurExportateur in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created OperateurExportateurs. {status, message, data}
 */
const bulkInsertOperateurExportateur = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdOperateurExportateur = await dbService.createMany(OperateurExportateur,dataToCreate); 
      return  res.success({ data :{ count :createdOperateurExportateur.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of OperateurExportateur from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found OperateurExportateur(s). {status, message, data}
 */
const findAllOperateurExportateur = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundOperateurExportateur;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      OperateurExportateurSchemaKey.findFilterKeys,
      OperateurExportateur.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundOperateurExportateur = await dbService.count(OperateurExportateur, query);
      if (!foundOperateurExportateur) {
        return res.recordNotFound();
      } 
      foundOperateurExportateur = { totalRecords: foundOperateurExportateur };
      return res.success({ data :foundOperateurExportateur });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundOperateurExportateur = await dbService.paginate( OperateurExportateur,query,options);
    if (!foundOperateurExportateur){
      return res.recordNotFound();
    }
    return res.success({ data:foundOperateurExportateur }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of OperateurExportateur from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found OperateurExportateur. {status, message, data}
 */
const getOperateurExportateur = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundOperateurExportateur = await dbService.findOne(OperateurExportateur,{ id :id });
    if (!foundOperateurExportateur){
      return res.recordNotFound();
    }
    return  res.success({ data :foundOperateurExportateur });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of OperateurExportateur.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getOperateurExportateurCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      OperateurExportateurSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedOperateurExportateur = await dbService.count(OperateurExportateur,where);
    if (!countedOperateurExportateur){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedOperateurExportateur } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of OperateurExportateur with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated OperateurExportateur.
 * @return {Object} : updated OperateurExportateur. {status, message, data}
 */
const updateOperateurExportateur = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      OperateurExportateurSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedOperateurExportateur = await dbService.update(OperateurExportateur,query,dataToUpdate);
    return  res.success({ data :updatedOperateurExportateur }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of OperateurExportateur with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated OperateurExportateurs.
 * @return {Object} : updated OperateurExportateurs. {status, message, data}
 */
const bulkUpdateOperateurExportateur = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedOperateurExportateur = await dbService.update(OperateurExportateur,filter,dataToUpdate);
    if (!updatedOperateurExportateur){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedOperateurExportateur.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of OperateurExportateur with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated OperateurExportateur.
 * @return {Object} : updated OperateurExportateur. {status, message, data}
 */
const partialUpdateOperateurExportateur = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      OperateurExportateurSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedOperateurExportateur = await dbService.update(OperateurExportateur, query, dataToUpdate);
    if (!updatedOperateurExportateur) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedOperateurExportateur });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of OperateurExportateur from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of OperateurExportateur.
 * @return {Object} : deactivated OperateurExportateur. {status, message, data}
 */
const softDeleteOperateurExportateur = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(OperateurExportateur, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of OperateurExportateur from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted OperateurExportateur. {status, message, data}
 */
const deleteOperateurExportateur = async (req, res) => {
  const result = await dbService.deleteByPk(OperateurExportateur, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of OperateurExportateur in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyOperateurExportateur = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedOperateurExportateur = await dbService.destroy(OperateurExportateur,query);
    return res.success({ data :{ count :deletedOperateurExportateur.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of OperateurExportateur from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of OperateurExportateur.
 * @return {Object} : number of deactivated documents of OperateurExportateur. {status, message, data}
 */
const softDeleteManyOperateurExportateur = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedOperateurExportateur = await dbService.update(OperateurExportateur,query,updateBody, options);
    if (!updatedOperateurExportateur) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedOperateurExportateur.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addOperateurExportateur,
  bulkInsertOperateurExportateur,
  findAllOperateurExportateur,
  getOperateurExportateur,
  getOperateurExportateurCount,
  updateOperateurExportateur,
  bulkUpdateOperateurExportateur,
  partialUpdateOperateurExportateur,
  softDeleteOperateurExportateur,
  deleteOperateurExportateur,
  deleteManyOperateurExportateur,
  softDeleteManyOperateurExportateur,
};
