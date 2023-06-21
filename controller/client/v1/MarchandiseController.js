/**
 * MarchandiseController.js
 * @description :: exports action methods for Marchandise.
 */

const Marchandise = require('../../../model/Marchandise');
const MarchandiseSchemaKey = require('../../../utils/validation/MarchandiseValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of Marchandise in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created Marchandise. {status, message, data}
 */ 
const addMarchandise = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      MarchandiseSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
    dataToCreate.addedBy = req.user.id;
    delete dataToCreate['updatedBy'];
        
    let createdMarchandise = await dbService.createOne(Marchandise,dataToCreate);
    return  res.success({ data :createdMarchandise });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of Marchandise in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created Marchandises. {status, message, data}
 */
const bulkInsertMarchandise = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      dataToCreate = dataToCreate.map(item=>{
        delete item.updatedBy;
        item.addedBy = req.user.id;
              
        return item;
      });
      let createdMarchandise = await dbService.createMany(Marchandise,dataToCreate); 
      return  res.success({ data :{ count :createdMarchandise.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of Marchandise from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found Marchandise(s). {status, message, data}
 */
const findAllMarchandise = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundMarchandise;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      MarchandiseSchemaKey.findFilterKeys,
      Marchandise.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundMarchandise = await dbService.count(Marchandise, query);
      if (!foundMarchandise) {
        return res.recordNotFound();
      } 
      foundMarchandise = { totalRecords: foundMarchandise };
      return res.success({ data :foundMarchandise });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundMarchandise = await dbService.paginate( Marchandise,query,options);
    if (!foundMarchandise){
      return res.recordNotFound();
    }
    return res.success({ data:foundMarchandise }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of Marchandise from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found Marchandise. {status, message, data}
 */
const getMarchandise = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundMarchandise = await dbService.findOne(Marchandise,{ id :id });
    if (!foundMarchandise){
      return res.recordNotFound();
    }
    return  res.success({ data :foundMarchandise });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of Marchandise.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getMarchandiseCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      MarchandiseSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedMarchandise = await dbService.count(Marchandise,where);
    if (!countedMarchandise){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedMarchandise } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of Marchandise with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Marchandise.
 * @return {Object} : updated Marchandise. {status, message, data}
 */
const updateMarchandise = async (req, res) => {
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
      MarchandiseSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedMarchandise = await dbService.update(Marchandise,query,dataToUpdate);
    return  res.success({ data :updatedMarchandise }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of Marchandise with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Marchandises.
 * @return {Object} : updated Marchandises. {status, message, data}
 */
const bulkUpdateMarchandise = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {
        ...req.body.data,
        updatedBy:req.user.id
      };
    }
    let updatedMarchandise = await dbService.update(Marchandise,filter,dataToUpdate);
    if (!updatedMarchandise){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedMarchandise.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of Marchandise with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Marchandise.
 * @return {Object} : updated Marchandise. {status, message, data}
 */
const partialUpdateMarchandise = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    delete dataToUpdate.addedBy;
    dataToUpdate.updatedBy = req.user.id;
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      MarchandiseSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedMarchandise = await dbService.update(Marchandise, query, dataToUpdate);
    if (!updatedMarchandise) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedMarchandise });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of Marchandise from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of Marchandise.
 * @return {Object} : deactivated Marchandise. {status, message, data}
 */
const softDeleteMarchandise = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id
    };
    let result = await dbService.update(Marchandise, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of Marchandise from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted Marchandise. {status, message, data}
 */
const deleteMarchandise = async (req, res) => {
  const result = await dbService.deleteByPk(Marchandise, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of Marchandise in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyMarchandise = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedMarchandise = await dbService.destroy(Marchandise,query);
    return res.success({ data :{ count :deletedMarchandise.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of Marchandise from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of Marchandise.
 * @return {Object} : number of deactivated documents of Marchandise. {status, message, data}
 */
const softDeleteManyMarchandise = async (req, res) => {
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
    let updatedMarchandise = await dbService.update(Marchandise,query,updateBody, options);
    if (!updatedMarchandise) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedMarchandise.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addMarchandise,
  bulkInsertMarchandise,
  findAllMarchandise,
  getMarchandise,
  getMarchandiseCount,
  updateMarchandise,
  bulkUpdateMarchandise,
  partialUpdateMarchandise,
  softDeleteMarchandise,
  deleteMarchandise,
  deleteManyMarchandise,
  softDeleteManyMarchandise,
};
