/**
 * OperateurCDAController.js
 * @description :: exports action methods for OperateurCDA.
 */

const OperateurCDA = require('../../../model/OperateurCDA');
const OperateurCDASchemaKey = require('../../../utils/validation/OperateurCDAValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of OperateurCDA in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created OperateurCDA. {status, message, data}
 */ 
const addOperateurCDA = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      OperateurCDASchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdOperateurCDA = await dbService.createOne(OperateurCDA,dataToCreate);
    return  res.success({ data :createdOperateurCDA });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of OperateurCDA in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created OperateurCDAs. {status, message, data}
 */
const bulkInsertOperateurCDA = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdOperateurCDA = await dbService.createMany(OperateurCDA,dataToCreate); 
      return  res.success({ data :{ count :createdOperateurCDA.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of OperateurCDA from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found OperateurCDA(s). {status, message, data}
 */
const findAllOperateurCDA = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundOperateurCDA;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      OperateurCDASchemaKey.findFilterKeys,
      OperateurCDA.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundOperateurCDA = await dbService.count(OperateurCDA, query);
      if (!foundOperateurCDA) {
        return res.recordNotFound();
      } 
      foundOperateurCDA = { totalRecords: foundOperateurCDA };
      return res.success({ data :foundOperateurCDA });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundOperateurCDA = await dbService.paginate( OperateurCDA,query,options);
    if (!foundOperateurCDA){
      return res.recordNotFound();
    }
    return res.success({ data:foundOperateurCDA }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of OperateurCDA from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found OperateurCDA. {status, message, data}
 */
const getOperateurCDA = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundOperateurCDA = await dbService.findOne(OperateurCDA,{ id :id });
    if (!foundOperateurCDA){
      return res.recordNotFound();
    }
    return  res.success({ data :foundOperateurCDA });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of OperateurCDA.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getOperateurCDACount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      OperateurCDASchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedOperateurCDA = await dbService.count(OperateurCDA,where);
    if (!countedOperateurCDA){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedOperateurCDA } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of OperateurCDA with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated OperateurCDA.
 * @return {Object} : updated OperateurCDA. {status, message, data}
 */
const updateOperateurCDA = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      OperateurCDASchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedOperateurCDA = await dbService.update(OperateurCDA,query,dataToUpdate);
    return  res.success({ data :updatedOperateurCDA }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of OperateurCDA with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated OperateurCDAs.
 * @return {Object} : updated OperateurCDAs. {status, message, data}
 */
const bulkUpdateOperateurCDA = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedOperateurCDA = await dbService.update(OperateurCDA,filter,dataToUpdate);
    if (!updatedOperateurCDA){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedOperateurCDA.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of OperateurCDA with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated OperateurCDA.
 * @return {Object} : updated OperateurCDA. {status, message, data}
 */
const partialUpdateOperateurCDA = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      OperateurCDASchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedOperateurCDA = await dbService.update(OperateurCDA, query, dataToUpdate);
    if (!updatedOperateurCDA) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedOperateurCDA });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of OperateurCDA from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of OperateurCDA.
 * @return {Object} : deactivated OperateurCDA. {status, message, data}
 */
const softDeleteOperateurCDA = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(OperateurCDA, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of OperateurCDA from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted OperateurCDA. {status, message, data}
 */
const deleteOperateurCDA = async (req, res) => {
  const result = await dbService.deleteByPk(OperateurCDA, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of OperateurCDA in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyOperateurCDA = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedOperateurCDA = await dbService.destroy(OperateurCDA,query);
    return res.success({ data :{ count :deletedOperateurCDA.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of OperateurCDA from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of OperateurCDA.
 * @return {Object} : number of deactivated documents of OperateurCDA. {status, message, data}
 */
const softDeleteManyOperateurCDA = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedOperateurCDA = await dbService.update(OperateurCDA,query,updateBody, options);
    if (!updatedOperateurCDA) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedOperateurCDA.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addOperateurCDA,
  bulkInsertOperateurCDA,
  findAllOperateurCDA,
  getOperateurCDA,
  getOperateurCDACount,
  updateOperateurCDA,
  bulkUpdateOperateurCDA,
  partialUpdateOperateurCDA,
  softDeleteOperateurCDA,
  deleteOperateurCDA,
  deleteManyOperateurCDA,
  softDeleteManyOperateurCDA,
};
