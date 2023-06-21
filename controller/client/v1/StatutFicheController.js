/**
 * StatutFicheController.js
 * @description :: exports action methods for StatutFiche.
 */

const StatutFiche = require('../../../model/StatutFiche');
const StatutFicheSchemaKey = require('../../../utils/validation/StatutFicheValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of StatutFiche in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created StatutFiche. {status, message, data}
 */ 
const addStatutFiche = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      StatutFicheSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
    dataToCreate.addedBy = req.user.id;
    delete dataToCreate['updatedBy'];
        
    let createdStatutFiche = await dbService.createOne(StatutFiche,dataToCreate);
    return  res.success({ data :createdStatutFiche });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of StatutFiche in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created StatutFiches. {status, message, data}
 */
const bulkInsertStatutFiche = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      dataToCreate = dataToCreate.map(item=>{
        delete item.updatedBy;
        item.addedBy = req.user.id;
              
        return item;
      });
      let createdStatutFiche = await dbService.createMany(StatutFiche,dataToCreate); 
      return  res.success({ data :{ count :createdStatutFiche.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of StatutFiche from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found StatutFiche(s). {status, message, data}
 */
const findAllStatutFiche = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundStatutFiche;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      StatutFicheSchemaKey.findFilterKeys,
      StatutFiche.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundStatutFiche = await dbService.count(StatutFiche, query);
      if (!foundStatutFiche) {
        return res.recordNotFound();
      } 
      foundStatutFiche = { totalRecords: foundStatutFiche };
      return res.success({ data :foundStatutFiche });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundStatutFiche = await dbService.paginate( StatutFiche,query,options);
    if (!foundStatutFiche){
      return res.recordNotFound();
    }
    return res.success({ data:foundStatutFiche }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of StatutFiche from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found StatutFiche. {status, message, data}
 */
const getStatutFiche = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundStatutFiche = await dbService.findOne(StatutFiche,{ id :id });
    if (!foundStatutFiche){
      return res.recordNotFound();
    }
    return  res.success({ data :foundStatutFiche });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of StatutFiche.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getStatutFicheCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      StatutFicheSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedStatutFiche = await dbService.count(StatutFiche,where);
    if (!countedStatutFiche){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedStatutFiche } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of StatutFiche with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated StatutFiche.
 * @return {Object} : updated StatutFiche. {status, message, data}
 */
const updateStatutFiche = async (req, res) => {
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
      StatutFicheSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedStatutFiche = await dbService.update(StatutFiche,query,dataToUpdate);
    return  res.success({ data :updatedStatutFiche }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of StatutFiche with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated StatutFiches.
 * @return {Object} : updated StatutFiches. {status, message, data}
 */
const bulkUpdateStatutFiche = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {
        ...req.body.data,
        updatedBy:req.user.id
      };
    }
    let updatedStatutFiche = await dbService.update(StatutFiche,filter,dataToUpdate);
    if (!updatedStatutFiche){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedStatutFiche.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of StatutFiche with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated StatutFiche.
 * @return {Object} : updated StatutFiche. {status, message, data}
 */
const partialUpdateStatutFiche = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    delete dataToUpdate.addedBy;
    dataToUpdate.updatedBy = req.user.id;
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      StatutFicheSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedStatutFiche = await dbService.update(StatutFiche, query, dataToUpdate);
    if (!updatedStatutFiche) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedStatutFiche });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of StatutFiche from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of StatutFiche.
 * @return {Object} : deactivated StatutFiche. {status, message, data}
 */
const softDeleteStatutFiche = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id
    };
    let result = await dbService.update(StatutFiche, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of StatutFiche from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted StatutFiche. {status, message, data}
 */
const deleteStatutFiche = async (req, res) => {
  const result = await dbService.deleteByPk(StatutFiche, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of StatutFiche in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyStatutFiche = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedStatutFiche = await dbService.destroy(StatutFiche,query);
    return res.success({ data :{ count :deletedStatutFiche.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of StatutFiche from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of StatutFiche.
 * @return {Object} : number of deactivated documents of StatutFiche. {status, message, data}
 */
const softDeleteManyStatutFiche = async (req, res) => {
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
    let updatedStatutFiche = await dbService.update(StatutFiche,query,updateBody, options);
    if (!updatedStatutFiche) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedStatutFiche.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addStatutFiche,
  bulkInsertStatutFiche,
  findAllStatutFiche,
  getStatutFiche,
  getStatutFicheCount,
  updateStatutFiche,
  bulkUpdateStatutFiche,
  partialUpdateStatutFiche,
  softDeleteStatutFiche,
  deleteStatutFiche,
  deleteManyStatutFiche,
  softDeleteManyStatutFiche,
};
