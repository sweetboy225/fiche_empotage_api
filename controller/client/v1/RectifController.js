/**
 * RectifController.js
 * @description :: exports action methods for Rectif.
 */

const Rectif = require('../../../model/Rectif');
const RectifSchemaKey = require('../../../utils/validation/RectifValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of Rectif in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created Rectif. {status, message, data}
 */ 
const addRectif = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      RectifSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
    dataToCreate.addedBy = req.user.id;
    delete dataToCreate['updatedBy'];
        
    let createdRectif = await dbService.createOne(Rectif,dataToCreate);
    return  res.success({ data :createdRectif });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of Rectif in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created Rectifs. {status, message, data}
 */
const bulkInsertRectif = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      dataToCreate = dataToCreate.map(item=>{
        delete item.updatedBy;
        item.addedBy = req.user.id;
              
        return item;
      });
      let createdRectif = await dbService.createMany(Rectif,dataToCreate); 
      return  res.success({ data :{ count :createdRectif.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of Rectif from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found Rectif(s). {status, message, data}
 */
const findAllRectif = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundRectif;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      RectifSchemaKey.findFilterKeys,
      Rectif.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundRectif = await dbService.count(Rectif, query);
      if (!foundRectif) {
        return res.recordNotFound();
      } 
      foundRectif = { totalRecords: foundRectif };
      return res.success({ data :foundRectif });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundRectif = await dbService.paginate( Rectif,query,options);
    if (!foundRectif){
      return res.recordNotFound();
    }
    return res.success({ data:foundRectif }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of Rectif from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found Rectif. {status, message, data}
 */
const getRectif = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundRectif = await dbService.findOne(Rectif,{ id :id });
    if (!foundRectif){
      return res.recordNotFound();
    }
    return  res.success({ data :foundRectif });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of Rectif.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getRectifCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      RectifSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedRectif = await dbService.count(Rectif,where);
    if (!countedRectif){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedRectif } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of Rectif with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Rectif.
 * @return {Object} : updated Rectif. {status, message, data}
 */
const updateRectif = async (req, res) => {
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
      RectifSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedRectif = await dbService.update(Rectif,query,dataToUpdate);
    return  res.success({ data :updatedRectif }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of Rectif with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Rectifs.
 * @return {Object} : updated Rectifs. {status, message, data}
 */
const bulkUpdateRectif = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {
        ...req.body.data,
        updatedBy:req.user.id
      };
    }
    let updatedRectif = await dbService.update(Rectif,filter,dataToUpdate);
    if (!updatedRectif){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedRectif.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of Rectif with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Rectif.
 * @return {Object} : updated Rectif. {status, message, data}
 */
const partialUpdateRectif = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    delete dataToUpdate.addedBy;
    dataToUpdate.updatedBy = req.user.id;
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      RectifSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedRectif = await dbService.update(Rectif, query, dataToUpdate);
    if (!updatedRectif) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedRectif });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of Rectif from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of Rectif.
 * @return {Object} : deactivated Rectif. {status, message, data}
 */
const softDeleteRectif = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id
    };
    let result = await dbService.update(Rectif, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of Rectif from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted Rectif. {status, message, data}
 */
const deleteRectif = async (req, res) => {
  const result = await dbService.deleteByPk(Rectif, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of Rectif in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyRectif = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedRectif = await dbService.destroy(Rectif,query);
    return res.success({ data :{ count :deletedRectif.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of Rectif from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of Rectif.
 * @return {Object} : number of deactivated documents of Rectif. {status, message, data}
 */
const softDeleteManyRectif = async (req, res) => {
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
    let updatedRectif = await dbService.update(Rectif,query,updateBody, options);
    if (!updatedRectif) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedRectif.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addRectif,
  bulkInsertRectif,
  findAllRectif,
  getRectif,
  getRectifCount,
  updateRectif,
  bulkUpdateRectif,
  partialUpdateRectif,
  softDeleteRectif,
  deleteRectif,
  deleteManyRectif,
  softDeleteManyRectif,
};
