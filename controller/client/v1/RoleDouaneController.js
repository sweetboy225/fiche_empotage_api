/**
 * RoleDouaneController.js
 * @description :: exports action methods for RoleDouane.
 */

const RoleDouane = require('../../../model/RoleDouane');
const RoleDouaneSchemaKey = require('../../../utils/validation/RoleDouaneValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of RoleDouane in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created RoleDouane. {status, message, data}
 */ 
const addRoleDouane = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      RoleDouaneSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdRoleDouane = await dbService.createOne(RoleDouane,dataToCreate);
    return  res.success({ data :createdRoleDouane });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of RoleDouane in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created RoleDouanes. {status, message, data}
 */
const bulkInsertRoleDouane = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdRoleDouane = await dbService.createMany(RoleDouane,dataToCreate); 
      return  res.success({ data :{ count :createdRoleDouane.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of RoleDouane from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found RoleDouane(s). {status, message, data}
 */
const findAllRoleDouane = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundRoleDouane;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      RoleDouaneSchemaKey.findFilterKeys,
      RoleDouane.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundRoleDouane = await dbService.count(RoleDouane, query);
      if (!foundRoleDouane) {
        return res.recordNotFound();
      } 
      foundRoleDouane = { totalRecords: foundRoleDouane };
      return res.success({ data :foundRoleDouane });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundRoleDouane = await dbService.paginate( RoleDouane,query,options);
    if (!foundRoleDouane){
      return res.recordNotFound();
    }
    return res.success({ data:foundRoleDouane }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of RoleDouane from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found RoleDouane. {status, message, data}
 */
const getRoleDouane = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundRoleDouane = await dbService.findOne(RoleDouane,{ id :id });
    if (!foundRoleDouane){
      return res.recordNotFound();
    }
    return  res.success({ data :foundRoleDouane });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of RoleDouane.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getRoleDouaneCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      RoleDouaneSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedRoleDouane = await dbService.count(RoleDouane,where);
    if (!countedRoleDouane){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedRoleDouane } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of RoleDouane with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated RoleDouane.
 * @return {Object} : updated RoleDouane. {status, message, data}
 */
const updateRoleDouane = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      RoleDouaneSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedRoleDouane = await dbService.update(RoleDouane,query,dataToUpdate);
    return  res.success({ data :updatedRoleDouane }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of RoleDouane with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated RoleDouanes.
 * @return {Object} : updated RoleDouanes. {status, message, data}
 */
const bulkUpdateRoleDouane = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedRoleDouane = await dbService.update(RoleDouane,filter,dataToUpdate);
    if (!updatedRoleDouane){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedRoleDouane.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of RoleDouane with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated RoleDouane.
 * @return {Object} : updated RoleDouane. {status, message, data}
 */
const partialUpdateRoleDouane = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      RoleDouaneSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedRoleDouane = await dbService.update(RoleDouane, query, dataToUpdate);
    if (!updatedRoleDouane) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedRoleDouane });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of RoleDouane from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of RoleDouane.
 * @return {Object} : deactivated RoleDouane. {status, message, data}
 */
const softDeleteRoleDouane = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(RoleDouane, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of RoleDouane from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted RoleDouane. {status, message, data}
 */
const deleteRoleDouane = async (req, res) => {
  const result = await dbService.deleteByPk(RoleDouane, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of RoleDouane in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyRoleDouane = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedRoleDouane = await dbService.destroy(RoleDouane,query);
    return res.success({ data :{ count :deletedRoleDouane.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of RoleDouane from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of RoleDouane.
 * @return {Object} : number of deactivated documents of RoleDouane. {status, message, data}
 */
const softDeleteManyRoleDouane = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedRoleDouane = await dbService.update(RoleDouane,query,updateBody, options);
    if (!updatedRoleDouane) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedRoleDouane.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addRoleDouane,
  bulkInsertRoleDouane,
  findAllRoleDouane,
  getRoleDouane,
  getRoleDouaneCount,
  updateRoleDouane,
  bulkUpdateRoleDouane,
  partialUpdateRoleDouane,
  softDeleteRoleDouane,
  deleteRoleDouane,
  deleteManyRoleDouane,
  softDeleteManyRoleDouane,
};
