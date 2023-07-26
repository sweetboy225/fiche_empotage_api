/**
 * fichierJointController.js
 * @description :: exports action methods for fichierJoint.
 */

const FichierJoint = require('../../../model/fichierJoint');
const fichierJointSchemaKey = require('../../../utils/validation/fichierJointValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of FichierJoint in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created FichierJoint. {status, message, data}
 */ 
const addFichierJoint = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      fichierJointSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdFichierJoint = await dbService.createOne(FichierJoint,dataToCreate);
    return  res.success({ data :createdFichierJoint });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of FichierJoint in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created FichierJoints. {status, message, data}
 */
const bulkInsertFichierJoint = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdFichierJoint = await dbService.createMany(FichierJoint,dataToCreate); 
      return  res.success({ data :{ count :createdFichierJoint.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of FichierJoint from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found FichierJoint(s). {status, message, data}
 */
const findAllFichierJoint = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundFichierJoint;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      fichierJointSchemaKey.findFilterKeys,
      FichierJoint.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundFichierJoint = await dbService.count(FichierJoint, query);
      if (!foundFichierJoint) {
        return res.recordNotFound();
      } 
      foundFichierJoint = { totalRecords: foundFichierJoint };
      return res.success({ data :foundFichierJoint });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundFichierJoint = await dbService.paginate( FichierJoint,query,options);
    if (!foundFichierJoint){
      return res.recordNotFound();
    }
    return res.success({ data:foundFichierJoint }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of FichierJoint from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found FichierJoint. {status, message, data}
 */
const getFichierJoint = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundFichierJoint = await dbService.findOne(FichierJoint,{ id :id });
    if (!foundFichierJoint){
      return res.recordNotFound();
    }
    return  res.success({ data :foundFichierJoint });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of FichierJoint.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getFichierJointCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      fichierJointSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedFichierJoint = await dbService.count(FichierJoint,where);
    if (!countedFichierJoint){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedFichierJoint } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of FichierJoint with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated FichierJoint.
 * @return {Object} : updated FichierJoint. {status, message, data}
 */
const updateFichierJoint = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      fichierJointSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedFichierJoint = await dbService.update(FichierJoint,query,dataToUpdate);
    return  res.success({ data :updatedFichierJoint }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of FichierJoint with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated FichierJoints.
 * @return {Object} : updated FichierJoints. {status, message, data}
 */
const bulkUpdateFichierJoint = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedFichierJoint = await dbService.update(FichierJoint,filter,dataToUpdate);
    if (!updatedFichierJoint){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedFichierJoint.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of FichierJoint with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated FichierJoint.
 * @return {Object} : updated FichierJoint. {status, message, data}
 */
const partialUpdateFichierJoint = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      fichierJointSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedFichierJoint = await dbService.update(FichierJoint, query, dataToUpdate);
    if (!updatedFichierJoint) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedFichierJoint });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of FichierJoint from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of FichierJoint.
 * @return {Object} : deactivated FichierJoint. {status, message, data}
 */
const softDeleteFichierJoint = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(FichierJoint, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of FichierJoint from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted FichierJoint. {status, message, data}
 */
const deleteFichierJoint = async (req, res) => {
  const result = await dbService.deleteByPk(FichierJoint, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of FichierJoint in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyFichierJoint = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedFichierJoint = await dbService.destroy(FichierJoint,query);
    return res.success({ data :{ count :deletedFichierJoint.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of FichierJoint from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of FichierJoint.
 * @return {Object} : number of deactivated documents of FichierJoint. {status, message, data}
 */
const softDeleteManyFichierJoint = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedFichierJoint = await dbService.update(FichierJoint,query,updateBody, options);
    if (!updatedFichierJoint) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedFichierJoint.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addFichierJoint,
  bulkInsertFichierJoint,
  findAllFichierJoint,
  getFichierJoint,
  getFichierJointCount,
  updateFichierJoint,
  bulkUpdateFichierJoint,
  partialUpdateFichierJoint,
  softDeleteFichierJoint,
  deleteFichierJoint,
  deleteManyFichierJoint,
  softDeleteManyFichierJoint,
};
