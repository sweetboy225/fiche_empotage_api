/**
 * FicheempotageStatutController.js
 * @description :: exports action methods for FicheempotageStatut.
 */

const FicheempotageStatut = require('../../../model/FicheempotageStatut');
const FicheempotageStatutSchemaKey = require('../../../utils/validation/FicheempotageStatutValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of FicheempotageStatut in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created FicheempotageStatut. {status, message, data}
 */ 
const addFicheempotageStatut = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      FicheempotageStatutSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdFicheempotageStatut = await dbService.createOne(FicheempotageStatut,dataToCreate);
    return  res.success({ data :createdFicheempotageStatut });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of FicheempotageStatut in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created FicheempotageStatuts. {status, message, data}
 */
const bulkInsertFicheempotageStatut = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdFicheempotageStatut = await dbService.createMany(FicheempotageStatut,dataToCreate); 
      return  res.success({ data :{ count :createdFicheempotageStatut.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of FicheempotageStatut from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found FicheempotageStatut(s). {status, message, data}
 */
const findAllFicheempotageStatut = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundFicheempotageStatut;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      FicheempotageStatutSchemaKey.findFilterKeys,
      FicheempotageStatut.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundFicheempotageStatut = await dbService.count(FicheempotageStatut, query);
      if (!foundFicheempotageStatut) {
        return res.recordNotFound();
      } 
      foundFicheempotageStatut = { totalRecords: foundFicheempotageStatut };
      return res.success({ data :foundFicheempotageStatut });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundFicheempotageStatut = await dbService.paginate( FicheempotageStatut,query,options);
    if (!foundFicheempotageStatut){
      return res.recordNotFound();
    }
    return res.success({ data:foundFicheempotageStatut }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of FicheempotageStatut from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found FicheempotageStatut. {status, message, data}
 */
const getFicheempotageStatut = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundFicheempotageStatut = await dbService.findOne(FicheempotageStatut,{ id :id });
    if (!foundFicheempotageStatut){
      return res.recordNotFound();
    }
    return  res.success({ data :foundFicheempotageStatut });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of FicheempotageStatut.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getFicheempotageStatutCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      FicheempotageStatutSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedFicheempotageStatut = await dbService.count(FicheempotageStatut,where);
    if (!countedFicheempotageStatut){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedFicheempotageStatut } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of FicheempotageStatut with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated FicheempotageStatut.
 * @return {Object} : updated FicheempotageStatut. {status, message, data}
 */
const updateFicheempotageStatut = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      FicheempotageStatutSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedFicheempotageStatut = await dbService.update(FicheempotageStatut,query,dataToUpdate);
    return  res.success({ data :updatedFicheempotageStatut }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of FicheempotageStatut with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated FicheempotageStatuts.
 * @return {Object} : updated FicheempotageStatuts. {status, message, data}
 */
const bulkUpdateFicheempotageStatut = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedFicheempotageStatut = await dbService.update(FicheempotageStatut,filter,dataToUpdate);
    if (!updatedFicheempotageStatut){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedFicheempotageStatut.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of FicheempotageStatut with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated FicheempotageStatut.
 * @return {Object} : updated FicheempotageStatut. {status, message, data}
 */
const partialUpdateFicheempotageStatut = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      FicheempotageStatutSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedFicheempotageStatut = await dbService.update(FicheempotageStatut, query, dataToUpdate);
    if (!updatedFicheempotageStatut) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedFicheempotageStatut });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of FicheempotageStatut from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of FicheempotageStatut.
 * @return {Object} : deactivated FicheempotageStatut. {status, message, data}
 */
const softDeleteFicheempotageStatut = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(FicheempotageStatut, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of FicheempotageStatut from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted FicheempotageStatut. {status, message, data}
 */
const deleteFicheempotageStatut = async (req, res) => {
  const result = await dbService.deleteByPk(FicheempotageStatut, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of FicheempotageStatut in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyFicheempotageStatut = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedFicheempotageStatut = await dbService.destroy(FicheempotageStatut,query);
    return res.success({ data :{ count :deletedFicheempotageStatut.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of FicheempotageStatut from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of FicheempotageStatut.
 * @return {Object} : number of deactivated documents of FicheempotageStatut. {status, message, data}
 */
const softDeleteManyFicheempotageStatut = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedFicheempotageStatut = await dbService.update(FicheempotageStatut,query,updateBody, options);
    if (!updatedFicheempotageStatut) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedFicheempotageStatut.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addFicheempotageStatut,
  bulkInsertFicheempotageStatut,
  findAllFicheempotageStatut,
  getFicheempotageStatut,
  getFicheempotageStatutCount,
  updateFicheempotageStatut,
  bulkUpdateFicheempotageStatut,
  partialUpdateFicheempotageStatut,
  softDeleteFicheempotageStatut,
  deleteFicheempotageStatut,
  deleteManyFicheempotageStatut,
  softDeleteManyFicheempotageStatut,
};
