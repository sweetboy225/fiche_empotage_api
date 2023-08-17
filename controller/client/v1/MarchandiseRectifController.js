/**
 * MarchandiseRectifController.js
 * @description :: exports action methods for MarchandiseRectif.
 */

const MarchandiseRectif = require('../../../model/MarchandiseRectif');
const MarchandiseRectifSchemaKey = require('../../../utils/validation/MarchandiseRectifValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of MarchandiseRectif in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created MarchandiseRectif. {status, message, data}
 */ 
const addMarchandiseRectif = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      MarchandiseRectifSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdMarchandiseRectif = await dbService.createOne(MarchandiseRectif,dataToCreate);
    return  res.success({ data :createdMarchandiseRectif });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of MarchandiseRectif in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created MarchandiseRectifs. {status, message, data}
 */
const bulkInsertMarchandiseRectif = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdMarchandiseRectif = await dbService.createMany(MarchandiseRectif,dataToCreate); 
      return  res.success({ data :{ count :createdMarchandiseRectif.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of MarchandiseRectif from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found MarchandiseRectif(s). {status, message, data}
 */
const findAllMarchandiseRectif = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundMarchandiseRectif;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      MarchandiseRectifSchemaKey.findFilterKeys,
      MarchandiseRectif.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundMarchandiseRectif = await dbService.count(MarchandiseRectif, query);
      if (!foundMarchandiseRectif) {
        return res.recordNotFound();
      } 
      foundMarchandiseRectif = { totalRecords: foundMarchandiseRectif };
      return res.success({ data :foundMarchandiseRectif });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundMarchandiseRectif = await dbService.paginate( MarchandiseRectif,query,options);
    if (!foundMarchandiseRectif){
      return res.recordNotFound();
    }
    return res.success({ data:foundMarchandiseRectif }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of MarchandiseRectif from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found MarchandiseRectif. {status, message, data}
 */
const getMarchandiseRectif = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundMarchandiseRectif = await dbService.findOne(MarchandiseRectif,{ id :id });
    if (!foundMarchandiseRectif){
      return res.recordNotFound();
    }
    return  res.success({ data :foundMarchandiseRectif });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of MarchandiseRectif.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getMarchandiseRectifCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      MarchandiseRectifSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedMarchandiseRectif = await dbService.count(MarchandiseRectif,where);
    if (!countedMarchandiseRectif){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedMarchandiseRectif } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of MarchandiseRectif with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated MarchandiseRectif.
 * @return {Object} : updated MarchandiseRectif. {status, message, data}
 */
const updateMarchandiseRectif = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      MarchandiseRectifSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedMarchandiseRectif = await dbService.update(MarchandiseRectif,query,dataToUpdate);
    return  res.success({ data :updatedMarchandiseRectif }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of MarchandiseRectif with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated MarchandiseRectifs.
 * @return {Object} : updated MarchandiseRectifs. {status, message, data}
 */
const bulkUpdateMarchandiseRectif = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedMarchandiseRectif = await dbService.update(MarchandiseRectif,filter,dataToUpdate);
    if (!updatedMarchandiseRectif){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedMarchandiseRectif.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of MarchandiseRectif with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated MarchandiseRectif.
 * @return {Object} : updated MarchandiseRectif. {status, message, data}
 */
const partialUpdateMarchandiseRectif = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      MarchandiseRectifSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedMarchandiseRectif = await dbService.update(MarchandiseRectif, query, dataToUpdate);
    if (!updatedMarchandiseRectif) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedMarchandiseRectif });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of MarchandiseRectif from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of MarchandiseRectif.
 * @return {Object} : deactivated MarchandiseRectif. {status, message, data}
 */
const softDeleteMarchandiseRectif = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(MarchandiseRectif, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of MarchandiseRectif from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted MarchandiseRectif. {status, message, data}
 */
const deleteMarchandiseRectif = async (req, res) => {
  const result = await dbService.deleteByPk(MarchandiseRectif, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of MarchandiseRectif in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyMarchandiseRectif = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedMarchandiseRectif = await dbService.destroy(MarchandiseRectif,query);
    return res.success({ data :{ count :deletedMarchandiseRectif.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of MarchandiseRectif from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of MarchandiseRectif.
 * @return {Object} : number of deactivated documents of MarchandiseRectif. {status, message, data}
 */
const softDeleteManyMarchandiseRectif = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedMarchandiseRectif = await dbService.update(MarchandiseRectif,query,updateBody, options);
    if (!updatedMarchandiseRectif) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedMarchandiseRectif.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addMarchandiseRectif,
  bulkInsertMarchandiseRectif,
  findAllMarchandiseRectif,
  getMarchandiseRectif,
  getMarchandiseRectifCount,
  updateMarchandiseRectif,
  bulkUpdateMarchandiseRectif,
  partialUpdateMarchandiseRectif,
  softDeleteMarchandiseRectif,
  deleteMarchandiseRectif,
  deleteManyMarchandiseRectif,
  softDeleteManyMarchandiseRectif,
};
