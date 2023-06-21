/**
 * RoleAgentDouaneController.js
 * @description :: exports action methods for RoleAgentDouane.
 */

const RoleAgentDouane = require('../../../model/RoleAgentDouane');
const RoleAgentDouaneSchemaKey = require('../../../utils/validation/RoleAgentDouaneValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of RoleAgentDouane in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created RoleAgentDouane. {status, message, data}
 */ 
const addRoleAgentDouane = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      RoleAgentDouaneSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
    dataToCreate.addedBy = req.user.id;
    delete dataToCreate['updatedBy'];
        
    let createdRoleAgentDouane = await dbService.createOne(RoleAgentDouane,dataToCreate);
    return  res.success({ data :createdRoleAgentDouane });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of RoleAgentDouane in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created RoleAgentDouanes. {status, message, data}
 */
const bulkInsertRoleAgentDouane = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      dataToCreate = dataToCreate.map(item=>{
        delete item.updatedBy;
        item.addedBy = req.user.id;
              
        return item;
      });
      let createdRoleAgentDouane = await dbService.createMany(RoleAgentDouane,dataToCreate); 
      return  res.success({ data :{ count :createdRoleAgentDouane.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of RoleAgentDouane from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found RoleAgentDouane(s). {status, message, data}
 */
const findAllRoleAgentDouane = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundRoleAgentDouane;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      RoleAgentDouaneSchemaKey.findFilterKeys,
      RoleAgentDouane.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundRoleAgentDouane = await dbService.count(RoleAgentDouane, query);
      if (!foundRoleAgentDouane) {
        return res.recordNotFound();
      } 
      foundRoleAgentDouane = { totalRecords: foundRoleAgentDouane };
      return res.success({ data :foundRoleAgentDouane });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundRoleAgentDouane = await dbService.paginate( RoleAgentDouane,query,options);
    if (!foundRoleAgentDouane){
      return res.recordNotFound();
    }
    return res.success({ data:foundRoleAgentDouane }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of RoleAgentDouane from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found RoleAgentDouane. {status, message, data}
 */
const getRoleAgentDouane = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundRoleAgentDouane = await dbService.findOne(RoleAgentDouane,{ id :id });
    if (!foundRoleAgentDouane){
      return res.recordNotFound();
    }
    return  res.success({ data :foundRoleAgentDouane });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of RoleAgentDouane.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getRoleAgentDouaneCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      RoleAgentDouaneSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedRoleAgentDouane = await dbService.count(RoleAgentDouane,where);
    if (!countedRoleAgentDouane){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedRoleAgentDouane } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of RoleAgentDouane with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated RoleAgentDouane.
 * @return {Object} : updated RoleAgentDouane. {status, message, data}
 */
const updateRoleAgentDouane = async (req, res) => {
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
      RoleAgentDouaneSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedRoleAgentDouane = await dbService.update(RoleAgentDouane,query,dataToUpdate);
    return  res.success({ data :updatedRoleAgentDouane }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of RoleAgentDouane with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated RoleAgentDouanes.
 * @return {Object} : updated RoleAgentDouanes. {status, message, data}
 */
const bulkUpdateRoleAgentDouane = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {
        ...req.body.data,
        updatedBy:req.user.id
      };
    }
    let updatedRoleAgentDouane = await dbService.update(RoleAgentDouane,filter,dataToUpdate);
    if (!updatedRoleAgentDouane){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedRoleAgentDouane.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of RoleAgentDouane with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated RoleAgentDouane.
 * @return {Object} : updated RoleAgentDouane. {status, message, data}
 */
const partialUpdateRoleAgentDouane = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    delete dataToUpdate.addedBy;
    dataToUpdate.updatedBy = req.user.id;
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      RoleAgentDouaneSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedRoleAgentDouane = await dbService.update(RoleAgentDouane, query, dataToUpdate);
    if (!updatedRoleAgentDouane) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedRoleAgentDouane });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of RoleAgentDouane from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of RoleAgentDouane.
 * @return {Object} : deactivated RoleAgentDouane. {status, message, data}
 */
const softDeleteRoleAgentDouane = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id
    };
    let result = await dbService.update(RoleAgentDouane, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of RoleAgentDouane from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted RoleAgentDouane. {status, message, data}
 */
const deleteRoleAgentDouane = async (req, res) => {
  const result = await dbService.deleteByPk(RoleAgentDouane, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of RoleAgentDouane in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyRoleAgentDouane = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedRoleAgentDouane = await dbService.destroy(RoleAgentDouane,query);
    return res.success({ data :{ count :deletedRoleAgentDouane.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of RoleAgentDouane from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of RoleAgentDouane.
 * @return {Object} : number of deactivated documents of RoleAgentDouane. {status, message, data}
 */
const softDeleteManyRoleAgentDouane = async (req, res) => {
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
    let updatedRoleAgentDouane = await dbService.update(RoleAgentDouane,query,updateBody, options);
    if (!updatedRoleAgentDouane) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedRoleAgentDouane.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addRoleAgentDouane,
  bulkInsertRoleAgentDouane,
  findAllRoleAgentDouane,
  getRoleAgentDouane,
  getRoleAgentDouaneCount,
  updateRoleAgentDouane,
  bulkUpdateRoleAgentDouane,
  partialUpdateRoleAgentDouane,
  softDeleteRoleAgentDouane,
  deleteRoleAgentDouane,
  deleteManyRoleAgentDouane,
  softDeleteManyRoleAgentDouane,
};
