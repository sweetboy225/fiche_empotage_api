/**
 * conteneurRectifController.js
 * @description :: exports action methods for conteneurRectif.
 */

const ConteneurRectif = require('../../../model/conteneurRectif');
const conteneurRectifSchemaKey = require('../../../utils/validation/conteneurRectifValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of ConteneurRectif in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created ConteneurRectif. {status, message, data}
 */ 
const addConteneurRectif = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      conteneurRectifSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdConteneurRectif = await dbService.createOne(ConteneurRectif,dataToCreate);
    return  res.success({ data :createdConteneurRectif });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of ConteneurRectif in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created ConteneurRectifs. {status, message, data}
 */
const bulkInsertConteneurRectif = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdConteneurRectif = await dbService.createMany(ConteneurRectif,dataToCreate); 
      return  res.success({ data :{ count :createdConteneurRectif.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of ConteneurRectif from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found ConteneurRectif(s). {status, message, data}
 */
const findAllConteneurRectif = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundConteneurRectif;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      conteneurRectifSchemaKey.findFilterKeys,
      ConteneurRectif.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundConteneurRectif = await dbService.count(ConteneurRectif, query);
      if (!foundConteneurRectif) {
        return res.recordNotFound();
      } 
      foundConteneurRectif = { totalRecords: foundConteneurRectif };
      return res.success({ data :foundConteneurRectif });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundConteneurRectif = await dbService.paginate( ConteneurRectif,query,options);
    if (!foundConteneurRectif){
      return res.recordNotFound();
    }
    return res.success({ data:foundConteneurRectif }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of ConteneurRectif from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found ConteneurRectif. {status, message, data}
 */
const getConteneurRectif = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundConteneurRectif = await dbService.findOne(ConteneurRectif,{ id :id });
    if (!foundConteneurRectif){
      return res.recordNotFound();
    }
    return  res.success({ data :foundConteneurRectif });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of ConteneurRectif.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getConteneurRectifCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      conteneurRectifSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedConteneurRectif = await dbService.count(ConteneurRectif,where);
    if (!countedConteneurRectif){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedConteneurRectif } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of ConteneurRectif with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated ConteneurRectif.
 * @return {Object} : updated ConteneurRectif. {status, message, data}
 */
const updateConteneurRectif = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      conteneurRectifSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedConteneurRectif = await dbService.update(ConteneurRectif,query,dataToUpdate);
    return  res.success({ data :updatedConteneurRectif }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of ConteneurRectif with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated ConteneurRectifs.
 * @return {Object} : updated ConteneurRectifs. {status, message, data}
 */
const bulkUpdateConteneurRectif = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedConteneurRectif = await dbService.update(ConteneurRectif,filter,dataToUpdate);
    if (!updatedConteneurRectif){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedConteneurRectif.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of ConteneurRectif with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated ConteneurRectif.
 * @return {Object} : updated ConteneurRectif. {status, message, data}
 */
const partialUpdateConteneurRectif = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      conteneurRectifSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedConteneurRectif = await dbService.update(ConteneurRectif, query, dataToUpdate);
    if (!updatedConteneurRectif) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedConteneurRectif });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of ConteneurRectif from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of ConteneurRectif.
 * @return {Object} : deactivated ConteneurRectif. {status, message, data}
 */
const softDeleteConteneurRectif = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(ConteneurRectif, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of ConteneurRectif from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted ConteneurRectif. {status, message, data}
 */
const deleteConteneurRectif = async (req, res) => {
  const result = await dbService.deleteByPk(ConteneurRectif, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of ConteneurRectif in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyConteneurRectif = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedConteneurRectif = await dbService.destroy(ConteneurRectif,query);
    return res.success({ data :{ count :deletedConteneurRectif.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of ConteneurRectif from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of ConteneurRectif.
 * @return {Object} : number of deactivated documents of ConteneurRectif. {status, message, data}
 */
const softDeleteManyConteneurRectif = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedConteneurRectif = await dbService.update(ConteneurRectif,query,updateBody, options);
    if (!updatedConteneurRectif) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedConteneurRectif.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addConteneurRectif,
  bulkInsertConteneurRectif,
  findAllConteneurRectif,
  getConteneurRectif,
  getConteneurRectifCount,
  updateConteneurRectif,
  bulkUpdateConteneurRectif,
  partialUpdateConteneurRectif,
  softDeleteConteneurRectif,
  deleteConteneurRectif,
  deleteManyConteneurRectif,
  softDeleteManyConteneurRectif,
};
