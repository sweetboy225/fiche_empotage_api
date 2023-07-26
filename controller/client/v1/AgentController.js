/**
 * AgentController.js
 * @description :: exports action methods for Agent.
 */

const Agent = require('../../../model/Agent');
const AgentSchemaKey = require('../../../utils/validation/AgentValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of Agent in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created Agent. {status, message, data}
 */ 
const addAgent = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      AgentSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
    dataToCreate.addedBy = req.user.id;
    delete dataToCreate['updatedBy'];
        
    let createdAgent = await dbService.createOne(Agent,dataToCreate);
    return  res.success({ data :createdAgent });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of Agent in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created Agents. {status, message, data}
 */
const bulkInsertAgent = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      dataToCreate = dataToCreate.map(item=>{
        delete item.updatedBy;
        item.addedBy = req.user.id;
              
        return item;
      });
      let createdAgent = await dbService.createMany(Agent,dataToCreate); 
      return  res.success({ data :{ count :createdAgent.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of Agent from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found Agent(s). {status, message, data}
 */
const findAllAgent = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundAgent;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      AgentSchemaKey.findFilterKeys,
      Agent.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundAgent = await dbService.count(Agent, query);
      if (!foundAgent) {
        return res.recordNotFound();
      } 
      foundAgent = { totalRecords: foundAgent };
      return res.success({ data :foundAgent });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundAgent = await dbService.paginate( Agent,query,options);
    if (!foundAgent){
      return res.recordNotFound();
    }
    return res.success({ data:foundAgent }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of Agent from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found Agent. {status, message, data}
 */
const getAgent = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundAgent = await dbService.findOne(Agent,{ id :id });
    if (!foundAgent){
      return res.recordNotFound();
    }
    return  res.success({ data :foundAgent });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of Agent.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getAgentCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      AgentSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedAgent = await dbService.count(Agent,where);
    if (!countedAgent){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedAgent } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of Agent with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Agent.
 * @return {Object} : updated Agent. {status, message, data}
 */
const updateAgent = async (req, res) => {
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
      AgentSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedAgent = await dbService.update(Agent,query,dataToUpdate);
    return  res.success({ data :updatedAgent }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of Agent with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Agents.
 * @return {Object} : updated Agents. {status, message, data}
 */
const bulkUpdateAgent = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {
        ...req.body.data,
        updatedBy:req.user.id
      };
    }
    let updatedAgent = await dbService.update(Agent,filter,dataToUpdate);
    if (!updatedAgent){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedAgent.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of Agent with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Agent.
 * @return {Object} : updated Agent. {status, message, data}
 */
const partialUpdateAgent = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    delete dataToUpdate.addedBy;
    dataToUpdate.updatedBy = req.user.id;
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      AgentSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedAgent = await dbService.update(Agent, query, dataToUpdate);
    if (!updatedAgent) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedAgent });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of Agent from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of Agent.
 * @return {Object} : deactivated Agent. {status, message, data}
 */
const softDeleteAgent = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id
    };
    let result = await dbService.update(Agent, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of Agent from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted Agent. {status, message, data}
 */
const deleteAgent = async (req, res) => {
  const result = await dbService.deleteByPk(Agent, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of Agent in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyAgent = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedAgent = await dbService.destroy(Agent,query);
    return res.success({ data :{ count :deletedAgent.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of Agent from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of Agent.
 * @return {Object} : number of deactivated documents of Agent. {status, message, data}
 */
const softDeleteManyAgent = async (req, res) => {
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
    let updatedAgent = await dbService.update(Agent,query,updateBody, options);
    if (!updatedAgent) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedAgent.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addAgent,
  bulkInsertAgent,
  findAllAgent,
  getAgent,
  getAgentCount,
  updateAgent,
  bulkUpdateAgent,
  partialUpdateAgent,
  softDeleteAgent,
  deleteAgent,
  deleteManyAgent,
  softDeleteManyAgent,
};
