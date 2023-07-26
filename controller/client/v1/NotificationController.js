/**
 * NotificationController.js
 * @description :: exports action methods for Notification.
 */

const Notification = require('../../../model/Notification');
const NotificationSchemaKey = require('../../../utils/validation/NotificationValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of Notification in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created Notification. {status, message, data}
 */ 
const addNotification = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      NotificationSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdNotification = await dbService.createOne(Notification,dataToCreate);
    return  res.success({ data :createdNotification });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of Notification in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created Notifications. {status, message, data}
 */
const bulkInsertNotification = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdNotification = await dbService.createMany(Notification,dataToCreate); 
      return  res.success({ data :{ count :createdNotification.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of Notification from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found Notification(s). {status, message, data}
 */
const findAllNotification = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundNotification;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      NotificationSchemaKey.findFilterKeys,
      Notification.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundNotification = await dbService.count(Notification, query);
      if (!foundNotification) {
        return res.recordNotFound();
      } 
      foundNotification = { totalRecords: foundNotification };
      return res.success({ data :foundNotification });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundNotification = await dbService.paginate( Notification,query,options);
    if (!foundNotification){
      return res.recordNotFound();
    }
    return res.success({ data:foundNotification }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of Notification from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found Notification. {status, message, data}
 */
const getNotification = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundNotification = await dbService.findOne(Notification,{ id :id });
    if (!foundNotification){
      return res.recordNotFound();
    }
    return  res.success({ data :foundNotification });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of Notification.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getNotificationCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      NotificationSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedNotification = await dbService.count(Notification,where);
    if (!countedNotification){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedNotification } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of Notification with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Notification.
 * @return {Object} : updated Notification. {status, message, data}
 */
const updateNotification = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      NotificationSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedNotification = await dbService.update(Notification,query,dataToUpdate);
    return  res.success({ data :updatedNotification }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of Notification with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Notifications.
 * @return {Object} : updated Notifications. {status, message, data}
 */
const bulkUpdateNotification = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedNotification = await dbService.update(Notification,filter,dataToUpdate);
    if (!updatedNotification){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedNotification.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of Notification with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Notification.
 * @return {Object} : updated Notification. {status, message, data}
 */
const partialUpdateNotification = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      NotificationSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedNotification = await dbService.update(Notification, query, dataToUpdate);
    if (!updatedNotification) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedNotification });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of Notification from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of Notification.
 * @return {Object} : deactivated Notification. {status, message, data}
 */
const softDeleteNotification = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(Notification, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of Notification from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted Notification. {status, message, data}
 */
const deleteNotification = async (req, res) => {
  const result = await dbService.deleteByPk(Notification, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of Notification in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyNotification = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedNotification = await dbService.destroy(Notification,query);
    return res.success({ data :{ count :deletedNotification.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of Notification from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of Notification.
 * @return {Object} : number of deactivated documents of Notification. {status, message, data}
 */
const softDeleteManyNotification = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedNotification = await dbService.update(Notification,query,updateBody, options);
    if (!updatedNotification) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedNotification.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addNotification,
  bulkInsertNotification,
  findAllNotification,
  getNotification,
  getNotificationCount,
  updateNotification,
  bulkUpdateNotification,
  partialUpdateNotification,
  softDeleteNotification,
  deleteNotification,
  deleteManyNotification,
  softDeleteManyNotification,
};
