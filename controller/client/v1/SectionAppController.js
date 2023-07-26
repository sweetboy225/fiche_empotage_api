/**
 * SectionAppController.js
 * @description :: exports action methods for SectionApp.
 */

const SectionApp = require('../../../model/SectionApp');
const SectionAppSchemaKey = require('../../../utils/validation/SectionAppValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of SectionApp in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created SectionApp. {status, message, data}
 */ 
const addSectionApp = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      SectionAppSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdSectionApp = await dbService.createOne(SectionApp,dataToCreate);
    return  res.success({ data :createdSectionApp });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of SectionApp in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created SectionApps. {status, message, data}
 */
const bulkInsertSectionApp = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdSectionApp = await dbService.createMany(SectionApp,dataToCreate); 
      return  res.success({ data :{ count :createdSectionApp.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of SectionApp from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found SectionApp(s). {status, message, data}
 */
const findAllSectionApp = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundSectionApp;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      SectionAppSchemaKey.findFilterKeys,
      SectionApp.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundSectionApp = await dbService.count(SectionApp, query);
      if (!foundSectionApp) {
        return res.recordNotFound();
      } 
      foundSectionApp = { totalRecords: foundSectionApp };
      return res.success({ data :foundSectionApp });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundSectionApp = await dbService.paginate( SectionApp,query,options);
    if (!foundSectionApp){
      return res.recordNotFound();
    }
    return res.success({ data:foundSectionApp }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of SectionApp from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found SectionApp. {status, message, data}
 */
const getSectionApp = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundSectionApp = await dbService.findOne(SectionApp,{ id :id });
    if (!foundSectionApp){
      return res.recordNotFound();
    }
    return  res.success({ data :foundSectionApp });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of SectionApp.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getSectionAppCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      SectionAppSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedSectionApp = await dbService.count(SectionApp,where);
    if (!countedSectionApp){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedSectionApp } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of SectionApp with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated SectionApp.
 * @return {Object} : updated SectionApp. {status, message, data}
 */
const updateSectionApp = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      SectionAppSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedSectionApp = await dbService.update(SectionApp,query,dataToUpdate);
    return  res.success({ data :updatedSectionApp }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of SectionApp with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated SectionApps.
 * @return {Object} : updated SectionApps. {status, message, data}
 */
const bulkUpdateSectionApp = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedSectionApp = await dbService.update(SectionApp,filter,dataToUpdate);
    if (!updatedSectionApp){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedSectionApp.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of SectionApp with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated SectionApp.
 * @return {Object} : updated SectionApp. {status, message, data}
 */
const partialUpdateSectionApp = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      SectionAppSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedSectionApp = await dbService.update(SectionApp, query, dataToUpdate);
    if (!updatedSectionApp) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedSectionApp });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of SectionApp from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of SectionApp.
 * @return {Object} : deactivated SectionApp. {status, message, data}
 */
const softDeleteSectionApp = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(SectionApp, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of SectionApp from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted SectionApp. {status, message, data}
 */
const deleteSectionApp = async (req, res) => {
  const result = await dbService.deleteByPk(SectionApp, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of SectionApp in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManySectionApp = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedSectionApp = await dbService.destroy(SectionApp,query);
    return res.success({ data :{ count :deletedSectionApp.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of SectionApp from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of SectionApp.
 * @return {Object} : number of deactivated documents of SectionApp. {status, message, data}
 */
const softDeleteManySectionApp = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedSectionApp = await dbService.update(SectionApp,query,updateBody, options);
    if (!updatedSectionApp) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedSectionApp.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addSectionApp,
  bulkInsertSectionApp,
  findAllSectionApp,
  getSectionApp,
  getSectionAppCount,
  updateSectionApp,
  bulkUpdateSectionApp,
  partialUpdateSectionApp,
  softDeleteSectionApp,
  deleteSectionApp,
  deleteManySectionApp,
  softDeleteManySectionApp,
};
