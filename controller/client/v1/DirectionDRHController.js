/**
 * DirectionDRHController.js
 * @description :: exports action methods for DirectionDRH.
 */

const DirectionDRH = require('../../../model/DirectionDRH');
const DirectionDRHSchemaKey = require('../../../utils/validation/DirectionDRHValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of DirectionDRH in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created DirectionDRH. {status, message, data}
 */ 
const addDirectionDRH = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      DirectionDRHSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdDirectionDRH = await dbService.createOne(DirectionDRH,dataToCreate);
    return  res.success({ data :createdDirectionDRH });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of DirectionDRH in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created DirectionDRHs. {status, message, data}
 */
const bulkInsertDirectionDRH = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdDirectionDRH = await dbService.createMany(DirectionDRH,dataToCreate); 
      return  res.success({ data :{ count :createdDirectionDRH.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of DirectionDRH from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found DirectionDRH(s). {status, message, data}
 */
const findAllDirectionDRH = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundDirectionDRH;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      DirectionDRHSchemaKey.findFilterKeys,
      DirectionDRH.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundDirectionDRH = await dbService.count(DirectionDRH, query);
      if (!foundDirectionDRH) {
        return res.recordNotFound();
      } 
      foundDirectionDRH = { totalRecords: foundDirectionDRH };
      return res.success({ data :foundDirectionDRH });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundDirectionDRH = await dbService.paginate( DirectionDRH,query,options);
    if (!foundDirectionDRH){
      return res.recordNotFound();
    }
    return res.success({ data:foundDirectionDRH }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of DirectionDRH from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found DirectionDRH. {status, message, data}
 */
const getDirectionDRH = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundDirectionDRH = await dbService.findOne(DirectionDRH,{ id :id });
    if (!foundDirectionDRH){
      return res.recordNotFound();
    }
    return  res.success({ data :foundDirectionDRH });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of DirectionDRH.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getDirectionDRHCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      DirectionDRHSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedDirectionDRH = await dbService.count(DirectionDRH,where);
    if (!countedDirectionDRH){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedDirectionDRH } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of DirectionDRH with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated DirectionDRH.
 * @return {Object} : updated DirectionDRH. {status, message, data}
 */
const updateDirectionDRH = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      DirectionDRHSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedDirectionDRH = await dbService.update(DirectionDRH,query,dataToUpdate);
    return  res.success({ data :updatedDirectionDRH }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of DirectionDRH with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated DirectionDRHs.
 * @return {Object} : updated DirectionDRHs. {status, message, data}
 */
const bulkUpdateDirectionDRH = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedDirectionDRH = await dbService.update(DirectionDRH,filter,dataToUpdate);
    if (!updatedDirectionDRH){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedDirectionDRH.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of DirectionDRH with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated DirectionDRH.
 * @return {Object} : updated DirectionDRH. {status, message, data}
 */
const partialUpdateDirectionDRH = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      DirectionDRHSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedDirectionDRH = await dbService.update(DirectionDRH, query, dataToUpdate);
    if (!updatedDirectionDRH) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedDirectionDRH });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of DirectionDRH from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of DirectionDRH.
 * @return {Object} : deactivated DirectionDRH. {status, message, data}
 */
const softDeleteDirectionDRH = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(DirectionDRH, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of DirectionDRH from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted DirectionDRH. {status, message, data}
 */
const deleteDirectionDRH = async (req, res) => {
  const result = await dbService.deleteByPk(DirectionDRH, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of DirectionDRH in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyDirectionDRH = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedDirectionDRH = await dbService.destroy(DirectionDRH,query);
    return res.success({ data :{ count :deletedDirectionDRH.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of DirectionDRH from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of DirectionDRH.
 * @return {Object} : number of deactivated documents of DirectionDRH. {status, message, data}
 */
const softDeleteManyDirectionDRH = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedDirectionDRH = await dbService.update(DirectionDRH,query,updateBody, options);
    if (!updatedDirectionDRH) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedDirectionDRH.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addDirectionDRH,
  bulkInsertDirectionDRH,
  findAllDirectionDRH,
  getDirectionDRH,
  getDirectionDRHCount,
  updateDirectionDRH,
  bulkUpdateDirectionDRH,
  partialUpdateDirectionDRH,
  softDeleteDirectionDRH,
  deleteDirectionDRH,
  deleteManyDirectionDRH,
  softDeleteManyDirectionDRH,
};
