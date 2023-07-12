/**
 * ServiceDRHController.js
 * @description :: exports action methods for ServiceDRH.
 */

const ServiceDRH = require('../../../model/ServiceDRH');
const ServiceDRHSchemaKey = require('../../../utils/validation/ServiceDRHValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of ServiceDRH in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created ServiceDRH. {status, message, data}
 */ 
const addServiceDRH = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      ServiceDRHSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
    dataToCreate.addedBy = req.user.id;
    delete dataToCreate['updatedBy'];
        
    let createdServiceDRH = await dbService.createOne(ServiceDRH,dataToCreate);
    return  res.success({ data :createdServiceDRH });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of ServiceDRH in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created ServiceDRHs. {status, message, data}
 */
const bulkInsertServiceDRH = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      dataToCreate = dataToCreate.map(item=>{
        delete item.updatedBy;
        item.addedBy = req.user.id;
              
        return item;
      });
      let createdServiceDRH = await dbService.createMany(ServiceDRH,dataToCreate); 
      return  res.success({ data :{ count :createdServiceDRH.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of ServiceDRH from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found ServiceDRH(s). {status, message, data}
 */
const findAllServiceDRH = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundServiceDRH;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      ServiceDRHSchemaKey.findFilterKeys,
      ServiceDRH.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundServiceDRH = await dbService.count(ServiceDRH, query);
      if (!foundServiceDRH) {
        return res.recordNotFound();
      } 
      foundServiceDRH = { totalRecords: foundServiceDRH };
      return res.success({ data :foundServiceDRH });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundServiceDRH = await dbService.paginate( ServiceDRH,query,options);
    if (!foundServiceDRH){
      return res.recordNotFound();
    }
    return res.success({ data:foundServiceDRH }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of ServiceDRH from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found ServiceDRH. {status, message, data}
 */
const getServiceDRH = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundServiceDRH = await dbService.findOne(ServiceDRH,{ id :id });
    if (!foundServiceDRH){
      return res.recordNotFound();
    }
    return  res.success({ data :foundServiceDRH });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of ServiceDRH.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getServiceDRHCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      ServiceDRHSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedServiceDRH = await dbService.count(ServiceDRH,where);
    if (!countedServiceDRH){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedServiceDRH } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of ServiceDRH with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated ServiceDRH.
 * @return {Object} : updated ServiceDRH. {status, message, data}
 */
const updateServiceDRH = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    delete dataToUpdate.addedBy;
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    dataToUpdate.updatedBy = req.user.id;
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      ServiceDRHSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedServiceDRH = await dbService.update(ServiceDRH,query,dataToUpdate);
    return  res.success({ data :updatedServiceDRH }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of ServiceDRH with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated ServiceDRHs.
 * @return {Object} : updated ServiceDRHs. {status, message, data}
 */
const bulkUpdateServiceDRH = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {
        ...req.body.data,
        updatedBy:req.user.id
      };
    }
    let updatedServiceDRH = await dbService.update(ServiceDRH,filter,dataToUpdate);
    if (!updatedServiceDRH){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedServiceDRH.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of ServiceDRH with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated ServiceDRH.
 * @return {Object} : updated ServiceDRH. {status, message, data}
 */
const partialUpdateServiceDRH = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    delete dataToUpdate.addedBy;
    dataToUpdate.updatedBy = req.user.id;
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      ServiceDRHSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedServiceDRH = await dbService.update(ServiceDRH, query, dataToUpdate);
    if (!updatedServiceDRH) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedServiceDRH });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of ServiceDRH from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of ServiceDRH.
 * @return {Object} : deactivated ServiceDRH. {status, message, data}
 */
const softDeleteServiceDRH = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id
    };
    let result = await dbService.update(ServiceDRH, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of ServiceDRH from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted ServiceDRH. {status, message, data}
 */
const deleteServiceDRH = async (req, res) => {
  const result = await dbService.deleteByPk(ServiceDRH, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of ServiceDRH in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyServiceDRH = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedServiceDRH = await dbService.destroy(ServiceDRH,query);
    return res.success({ data :{ count :deletedServiceDRH.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of ServiceDRH from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of ServiceDRH.
 * @return {Object} : number of deactivated documents of ServiceDRH. {status, message, data}
 */
const softDeleteManyServiceDRH = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id,
    };
    const options = {};
    let updatedServiceDRH = await dbService.update(ServiceDRH,query,updateBody, options);
    if (!updatedServiceDRH) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedServiceDRH.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addServiceDRH,
  bulkInsertServiceDRH,
  findAllServiceDRH,
  getServiceDRH,
  getServiceDRHCount,
  updateServiceDRH,
  bulkUpdateServiceDRH,
  partialUpdateServiceDRH,
  softDeleteServiceDRH,
  deleteServiceDRH,
  deleteManyServiceDRH,
  softDeleteManyServiceDRH,
};
