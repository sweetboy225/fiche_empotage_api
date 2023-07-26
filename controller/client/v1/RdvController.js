/**
 * RdvController.js
 * @description :: exports action methods for Rdv.
 */

const Rdv = require('../../../model/Rdv');
const RdvSchemaKey = require('../../../utils/validation/RdvValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of Rdv in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created Rdv. {status, message, data}
 */ 
const addRdv = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      RdvSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdRdv = await dbService.createOne(Rdv,dataToCreate);
    return  res.success({ data :createdRdv });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of Rdv in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created Rdvs. {status, message, data}
 */
const bulkInsertRdv = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdRdv = await dbService.createMany(Rdv,dataToCreate); 
      return  res.success({ data :{ count :createdRdv.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of Rdv from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found Rdv(s). {status, message, data}
 */
const findAllRdv = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundRdv;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      RdvSchemaKey.findFilterKeys,
      Rdv.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundRdv = await dbService.count(Rdv, query);
      if (!foundRdv) {
        return res.recordNotFound();
      } 
      foundRdv = { totalRecords: foundRdv };
      return res.success({ data :foundRdv });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundRdv = await dbService.paginate( Rdv,query,options);
    if (!foundRdv){
      return res.recordNotFound();
    }
    return res.success({ data:foundRdv }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of Rdv from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found Rdv. {status, message, data}
 */
const getRdv = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundRdv = await dbService.findOne(Rdv,{ id :id });
    if (!foundRdv){
      return res.recordNotFound();
    }
    return  res.success({ data :foundRdv });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of Rdv.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getRdvCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      RdvSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedRdv = await dbService.count(Rdv,where);
    if (!countedRdv){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedRdv } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of Rdv with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Rdv.
 * @return {Object} : updated Rdv. {status, message, data}
 */
const updateRdv = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      RdvSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedRdv = await dbService.update(Rdv,query,dataToUpdate);
    return  res.success({ data :updatedRdv }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of Rdv with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Rdvs.
 * @return {Object} : updated Rdvs. {status, message, data}
 */
const bulkUpdateRdv = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedRdv = await dbService.update(Rdv,filter,dataToUpdate);
    if (!updatedRdv){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedRdv.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of Rdv with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Rdv.
 * @return {Object} : updated Rdv. {status, message, data}
 */
const partialUpdateRdv = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      RdvSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedRdv = await dbService.update(Rdv, query, dataToUpdate);
    if (!updatedRdv) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedRdv });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of Rdv from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of Rdv.
 * @return {Object} : deactivated Rdv. {status, message, data}
 */
const softDeleteRdv = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(Rdv, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of Rdv from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted Rdv. {status, message, data}
 */
const deleteRdv = async (req, res) => {
  const result = await dbService.deleteByPk(Rdv, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of Rdv in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyRdv = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedRdv = await dbService.destroy(Rdv,query);
    return res.success({ data :{ count :deletedRdv.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of Rdv from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of Rdv.
 * @return {Object} : number of deactivated documents of Rdv. {status, message, data}
 */
const softDeleteManyRdv = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedRdv = await dbService.update(Rdv,query,updateBody, options);
    if (!updatedRdv) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedRdv.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addRdv,
  bulkInsertRdv,
  findAllRdv,
  getRdv,
  getRdvCount,
  updateRdv,
  bulkUpdateRdv,
  partialUpdateRdv,
  softDeleteRdv,
  deleteRdv,
  deleteManyRdv,
  softDeleteManyRdv,
};
