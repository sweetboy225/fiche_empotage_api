/**
 * FicheEmpotageController.js
 * @description :: exports action methods for FicheEmpotage.
 */

const FicheEmpotage = require('../../../model/FicheEmpotage');
const FicheEmpotageSchemaKey = require('../../../utils/validation/FicheEmpotageValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of FicheEmpotage in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created FicheEmpotage. {status, message, data}
 */ 
const addFicheEmpotage = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      FicheEmpotageSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdFicheEmpotage = await dbService.createOne(FicheEmpotage,dataToCreate);
    return  res.success({ data :createdFicheEmpotage });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of FicheEmpotage in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created FicheEmpotages. {status, message, data}
 */
const bulkInsertFicheEmpotage = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdFicheEmpotage = await dbService.createMany(FicheEmpotage,dataToCreate); 
      return  res.success({ data :{ count :createdFicheEmpotage.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of FicheEmpotage from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found FicheEmpotage(s). {status, message, data}
 */
const findAllFicheEmpotage = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundFicheEmpotage;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      FicheEmpotageSchemaKey.findFilterKeys,
      FicheEmpotage.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundFicheEmpotage = await dbService.count(FicheEmpotage, query);
      if (!foundFicheEmpotage) {
        return res.recordNotFound();
      } 
      foundFicheEmpotage = { totalRecords: foundFicheEmpotage };
      return res.success({ data :foundFicheEmpotage });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundFicheEmpotage = await dbService.paginate( FicheEmpotage,query,options);
    if (!foundFicheEmpotage){
      return res.recordNotFound();
    }
    return res.success({ data:foundFicheEmpotage }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of FicheEmpotage from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found FicheEmpotage. {status, message, data}
 */
const getFicheEmpotage = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundFicheEmpotage = await dbService.findOne(FicheEmpotage,{ id :id });
    if (!foundFicheEmpotage){
      return res.recordNotFound();
    }
    return  res.success({ data :foundFicheEmpotage });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of FicheEmpotage.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getFicheEmpotageCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      FicheEmpotageSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedFicheEmpotage = await dbService.count(FicheEmpotage,where);
    if (!countedFicheEmpotage){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedFicheEmpotage } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of FicheEmpotage with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated FicheEmpotage.
 * @return {Object} : updated FicheEmpotage. {status, message, data}
 */
const updateFicheEmpotage = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      FicheEmpotageSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedFicheEmpotage = await dbService.update(FicheEmpotage,query,dataToUpdate);
    return  res.success({ data :updatedFicheEmpotage }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of FicheEmpotage with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated FicheEmpotages.
 * @return {Object} : updated FicheEmpotages. {status, message, data}
 */
const bulkUpdateFicheEmpotage = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedFicheEmpotage = await dbService.update(FicheEmpotage,filter,dataToUpdate);
    if (!updatedFicheEmpotage){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedFicheEmpotage.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of FicheEmpotage with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated FicheEmpotage.
 * @return {Object} : updated FicheEmpotage. {status, message, data}
 */
const partialUpdateFicheEmpotage = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      FicheEmpotageSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedFicheEmpotage = await dbService.update(FicheEmpotage, query, dataToUpdate);
    if (!updatedFicheEmpotage) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedFicheEmpotage });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of FicheEmpotage from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of FicheEmpotage.
 * @return {Object} : deactivated FicheEmpotage. {status, message, data}
 */
const softDeleteFicheEmpotage = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(FicheEmpotage, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of FicheEmpotage from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted FicheEmpotage. {status, message, data}
 */
const deleteFicheEmpotage = async (req, res) => {
  const result = await dbService.deleteByPk(FicheEmpotage, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of FicheEmpotage in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyFicheEmpotage = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedFicheEmpotage = await dbService.destroy(FicheEmpotage,query);
    return res.success({ data :{ count :deletedFicheEmpotage.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of FicheEmpotage from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of FicheEmpotage.
 * @return {Object} : number of deactivated documents of FicheEmpotage. {status, message, data}
 */
const softDeleteManyFicheEmpotage = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedFicheEmpotage = await dbService.update(FicheEmpotage,query,updateBody, options);
    if (!updatedFicheEmpotage) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedFicheEmpotage.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addFicheEmpotage,
  bulkInsertFicheEmpotage,
  findAllFicheEmpotage,
  getFicheEmpotage,
  getFicheEmpotageCount,
  updateFicheEmpotage,
  bulkUpdateFicheEmpotage,
  partialUpdateFicheEmpotage,
  softDeleteFicheEmpotage,
  deleteFicheEmpotage,
  deleteManyFicheEmpotage,
  softDeleteManyFicheEmpotage,
};
