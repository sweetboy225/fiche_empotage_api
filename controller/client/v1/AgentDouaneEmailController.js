/**
 * AgentDouaneEmailController.js
 * @description :: exports action methods for AgentDouaneEmail.
 */

const AgentDouaneEmail = require('../../../model/AgentDouaneEmail');
const AgentDouaneEmailSchemaKey = require('../../../utils/validation/AgentDouaneEmailValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const sequelize = require('sequelize');
const utils = require('../../../utils/common');

/**
 * @description : create record of AgentDouaneEmail in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created AgentDouaneEmail. {status, message, data}
 */ 
const addAgentDouaneEmail = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      AgentDouaneEmailSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdAgentDouaneEmail = await dbService.createOne(AgentDouaneEmail,dataToCreate);
    return  res.success({ data :createdAgentDouaneEmail });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of AgentDouaneEmail in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created AgentDouaneEmails. {status, message, data}
 */
const bulkInsertAgentDouaneEmail = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdAgentDouaneEmail = await dbService.createMany(AgentDouaneEmail,dataToCreate); 
      return  res.success({ data :{ count :createdAgentDouaneEmail.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of AgentDouaneEmail from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found AgentDouaneEmail(s). {status, message, data}
 */
const findAllAgentDouaneEmail = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundAgentDouaneEmail;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      AgentDouaneEmailSchemaKey.findFilterKeys,
      AgentDouaneEmail.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundAgentDouaneEmail = await dbService.count(AgentDouaneEmail, query);
      if (!foundAgentDouaneEmail) {
        return res.recordNotFound();
      } 
      foundAgentDouaneEmail = { totalRecords: foundAgentDouaneEmail };
      return res.success({ data :foundAgentDouaneEmail });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundAgentDouaneEmail = await dbService.paginate( AgentDouaneEmail,query,options);
    if (!foundAgentDouaneEmail){
      return res.recordNotFound();
    }
    return res.success({ data:foundAgentDouaneEmail }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of AgentDouaneEmail from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found AgentDouaneEmail. {status, message, data}
 */
const getAgentDouaneEmail = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundAgentDouaneEmail = await dbService.findOne(AgentDouaneEmail,{ id :id });
    if (!foundAgentDouaneEmail){
      return res.recordNotFound();
    }
    return  res.success({ data :foundAgentDouaneEmail });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of AgentDouaneEmail.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getAgentDouaneEmailCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      AgentDouaneEmailSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedAgentDouaneEmail = await dbService.count(AgentDouaneEmail,where);
    if (!countedAgentDouaneEmail){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedAgentDouaneEmail } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of AgentDouaneEmail with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated AgentDouaneEmail.
 * @return {Object} : updated AgentDouaneEmail. {status, message, data}
 */
const updateAgentDouaneEmail = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      AgentDouaneEmailSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedAgentDouaneEmail = await dbService.update(AgentDouaneEmail,query,dataToUpdate);
    return  res.success({ data :updatedAgentDouaneEmail }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of AgentDouaneEmail with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated AgentDouaneEmails.
 * @return {Object} : updated AgentDouaneEmails. {status, message, data}
 */
const bulkUpdateAgentDouaneEmail = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedAgentDouaneEmail = await dbService.update(AgentDouaneEmail,filter,dataToUpdate);
    if (!updatedAgentDouaneEmail){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedAgentDouaneEmail.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of AgentDouaneEmail with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated AgentDouaneEmail.
 * @return {Object} : updated AgentDouaneEmail. {status, message, data}
 */
const partialUpdateAgentDouaneEmail = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      AgentDouaneEmailSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedAgentDouaneEmail = await dbService.update(AgentDouaneEmail, query, dataToUpdate);
    if (!updatedAgentDouaneEmail) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedAgentDouaneEmail });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of AgentDouaneEmail from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of AgentDouaneEmail.
 * @return {Object} : deactivated AgentDouaneEmail. {status, message, data}
 */
const softDeleteAgentDouaneEmail = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(AgentDouaneEmail, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of AgentDouaneEmail from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted AgentDouaneEmail. {status, message, data}
 */
const deleteAgentDouaneEmail = async (req, res) => {
  const result = await dbService.deleteByPk(AgentDouaneEmail, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of AgentDouaneEmail in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyAgentDouaneEmail = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedAgentDouaneEmail = await dbService.destroy(AgentDouaneEmail,query);
    return res.success({ data :{ count :deletedAgentDouaneEmail.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of AgentDouaneEmail from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of AgentDouaneEmail.
 * @return {Object} : number of deactivated documents of AgentDouaneEmail. {status, message, data}
 */
const softDeleteManyAgentDouaneEmail = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedAgentDouaneEmail = await dbService.update(AgentDouaneEmail,query,updateBody, options);
    if (!updatedAgentDouaneEmail) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedAgentDouaneEmail.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : getAgentDouaneEmailByMatricule 
 * @param {Object} req : request
 * @param {Object} res : response 
 * @return {Object} : response of getAgentDouaneEmailByMatricule {status, message, data}
 */
const getAgentDouaneEmailByMatricule = async (req, res)=>{
  try {        let result = await dbService.findOne(AgentDouaneEmail,{ id :req.params.agentDouaneEmail_matricule });
    if (result){ 
      return res.success({ data :result });
    }
    return res.recordNotFound();
  } 
  catch (error){ 
    return  res.status(500).send({
      message: 'Internal Server Error',
      data: null 
    });
  }

};    

module.exports = {
  addAgentDouaneEmail,
  bulkInsertAgentDouaneEmail,
  findAllAgentDouaneEmail,
  getAgentDouaneEmail,
  getAgentDouaneEmailCount,
  updateAgentDouaneEmail,
  bulkUpdateAgentDouaneEmail,
  partialUpdateAgentDouaneEmail,
  softDeleteAgentDouaneEmail,
  deleteAgentDouaneEmail,
  deleteManyAgentDouaneEmail,
  softDeleteManyAgentDouaneEmail,
  getAgentDouaneEmailByMatricule,
};
