/**
 * DirectionAppController.js
 * @description :: exports action methods for DirectionApp.
 */

const DirectionApp = require('../../../model/DirectionApp');
const DirectionAppSchemaKey = require('../../../utils/validation/DirectionAppValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of DirectionApp in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created DirectionApp. {status, message, data}
 */ 
const addDirectionApp = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      DirectionAppSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdDirectionApp = await dbService.createOne(DirectionApp,dataToCreate);
    return  res.success({ data :createdDirectionApp });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of DirectionApp in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created DirectionApps. {status, message, data}
 */
const bulkInsertDirectionApp = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdDirectionApp = await dbService.createMany(DirectionApp,dataToCreate); 
      return  res.success({ data :{ count :createdDirectionApp.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of DirectionApp from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found DirectionApp(s). {status, message, data}
 */
const findAllDirectionApp = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundDirectionApp;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      DirectionAppSchemaKey.findFilterKeys,
      DirectionApp.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundDirectionApp = await dbService.count(DirectionApp, query);
      if (!foundDirectionApp) {
        return res.recordNotFound();
      } 
      foundDirectionApp = { totalRecords: foundDirectionApp };
      return res.success({ data :foundDirectionApp });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundDirectionApp = await dbService.paginate( DirectionApp,query,options);
    if (!foundDirectionApp){
      return res.recordNotFound();
    }
    return res.success({ data:foundDirectionApp }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of DirectionApp from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found DirectionApp. {status, message, data}
 */
const getDirectionApp = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundDirectionApp = await dbService.findOne(DirectionApp,{ id :id });
    if (!foundDirectionApp){
      return res.recordNotFound();
    }
    return  res.success({ data :foundDirectionApp });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of DirectionApp.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getDirectionAppCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      DirectionAppSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedDirectionApp = await dbService.count(DirectionApp,where);
    if (!countedDirectionApp){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedDirectionApp } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of DirectionApp with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated DirectionApp.
 * @return {Object} : updated DirectionApp. {status, message, data}
 */
const updateDirectionApp = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      DirectionAppSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedDirectionApp = await dbService.update(DirectionApp,query,dataToUpdate);
    return  res.success({ data :updatedDirectionApp }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of DirectionApp with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated DirectionApps.
 * @return {Object} : updated DirectionApps. {status, message, data}
 */
const bulkUpdateDirectionApp = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedDirectionApp = await dbService.update(DirectionApp,filter,dataToUpdate);
    if (!updatedDirectionApp){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedDirectionApp.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of DirectionApp with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated DirectionApp.
 * @return {Object} : updated DirectionApp. {status, message, data}
 */
const partialUpdateDirectionApp = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      DirectionAppSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedDirectionApp = await dbService.update(DirectionApp, query, dataToUpdate);
    if (!updatedDirectionApp) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedDirectionApp });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of DirectionApp from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of DirectionApp.
 * @return {Object} : deactivated DirectionApp. {status, message, data}
 */
const softDeleteDirectionApp = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(DirectionApp, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of DirectionApp from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted DirectionApp. {status, message, data}
 */
const deleteDirectionApp = async (req, res) => {
  const result = await dbService.deleteByPk(DirectionApp, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of DirectionApp in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyDirectionApp = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedDirectionApp = await dbService.destroy(DirectionApp,query);
    return res.success({ data :{ count :deletedDirectionApp.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of DirectionApp from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of DirectionApp.
 * @return {Object} : number of deactivated documents of DirectionApp. {status, message, data}
 */
const softDeleteManyDirectionApp = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedDirectionApp = await dbService.update(DirectionApp,query,updateBody, options);
    if (!updatedDirectionApp) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedDirectionApp.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addDirectionApp,
  bulkInsertDirectionApp,
  findAllDirectionApp,
  getDirectionApp,
  getDirectionAppCount,
  updateDirectionApp,
  bulkUpdateDirectionApp,
  partialUpdateDirectionApp,
  softDeleteDirectionApp,
  deleteDirectionApp,
  deleteManyDirectionApp,
  softDeleteManyDirectionApp,
};
