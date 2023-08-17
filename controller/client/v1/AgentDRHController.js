/**
 * AgentDRHController.js
 * @description :: exports action methods for AgentDRH.
 */

const AgentDRH = require('../../../model/AgentDRH');
const AgentDRHSchemaKey = require('../../../utils/validation/AgentDRHValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of AgentDRH in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created AgentDRH. {status, message, data}
 */ 
const addAgentDRH = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      AgentDRHSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdAgentDRH = await dbService.createOne(AgentDRH,dataToCreate);
    return  res.success({ data :createdAgentDRH });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of AgentDRH in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created AgentDRHs. {status, message, data}
 */
const bulkInsertAgentDRH = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdAgentDRH = await dbService.createMany(AgentDRH,dataToCreate); 
      return  res.success({ data :{ count :createdAgentDRH.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of AgentDRH from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found AgentDRH(s). {status, message, data}
 */
const findAllAgentDRH = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundAgentDRH;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      AgentDRHSchemaKey.findFilterKeys,
      AgentDRH.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundAgentDRH = await dbService.count(AgentDRH, query);
      if (!foundAgentDRH) {
        return res.recordNotFound();
      } 
      foundAgentDRH = { totalRecords: foundAgentDRH };
      return res.success({ data :foundAgentDRH });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundAgentDRH = await dbService.paginate( AgentDRH,query,options);
    if (!foundAgentDRH){
      return res.recordNotFound();
    }
    return res.success({ data:foundAgentDRH }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of AgentDRH from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found AgentDRH. {status, message, data}
 */
const getAgentDRH = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundAgentDRH = await dbService.findOne(AgentDRH,{ id :id });
    if (!foundAgentDRH){
      return res.recordNotFound();
    }
    return  res.success({ data :foundAgentDRH });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of AgentDRH.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getAgentDRHCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      AgentDRHSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedAgentDRH = await dbService.count(AgentDRH,where);
    if (!countedAgentDRH){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedAgentDRH } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of AgentDRH with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated AgentDRH.
 * @return {Object} : updated AgentDRH. {status, message, data}
 */
const updateAgentDRH = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      AgentDRHSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedAgentDRH = await dbService.update(AgentDRH,query,dataToUpdate);
    return  res.success({ data :updatedAgentDRH }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of AgentDRH with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated AgentDRHs.
 * @return {Object} : updated AgentDRHs. {status, message, data}
 */
const bulkUpdateAgentDRH = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedAgentDRH = await dbService.update(AgentDRH,filter,dataToUpdate);
    if (!updatedAgentDRH){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedAgentDRH.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of AgentDRH with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated AgentDRH.
 * @return {Object} : updated AgentDRH. {status, message, data}
 */
const partialUpdateAgentDRH = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      AgentDRHSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedAgentDRH = await dbService.update(AgentDRH, query, dataToUpdate);
    if (!updatedAgentDRH) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedAgentDRH });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of AgentDRH from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of AgentDRH.
 * @return {Object} : deactivated AgentDRH. {status, message, data}
 */
const softDeleteAgentDRH = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(AgentDRH, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of AgentDRH from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted AgentDRH. {status, message, data}
 */
const deleteAgentDRH = async (req, res) => {
  const result = await dbService.deleteByPk(AgentDRH, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of AgentDRH in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyAgentDRH = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedAgentDRH = await dbService.destroy(AgentDRH,query);
    return res.success({ data :{ count :deletedAgentDRH.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of AgentDRH from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of AgentDRH.
 * @return {Object} : number of deactivated documents of AgentDRH. {status, message, data}
 */
const softDeleteManyAgentDRH = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedAgentDRH = await dbService.update(AgentDRH,query,updateBody, options);
    if (!updatedAgentDRH) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedAgentDRH.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addAgentDRH,
  bulkInsertAgentDRH,
  findAllAgentDRH,
  getAgentDRH,
  getAgentDRHCount,
  updateAgentDRH,
  bulkUpdateAgentDRH,
  partialUpdateAgentDRH,
  softDeleteAgentDRH,
  deleteAgentDRH,
  deleteManyAgentDRH,
  softDeleteManyAgentDRH,
};
