/**
 * HistoriqueController.js
 * @description :: exports action methods for Historique.
 */

const Historique = require('../../../model/Historique');
const HistoriqueSchemaKey = require('../../../utils/validation/HistoriqueValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of Historique in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created Historique. {status, message, data}
 */ 
const addHistorique = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      HistoriqueSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
        
    let createdHistorique = await dbService.createOne(Historique,dataToCreate);
    return  res.success({ data :createdHistorique });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of Historique in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created Historiques. {status, message, data}
 */
const bulkInsertHistorique = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      let createdHistorique = await dbService.createMany(Historique,dataToCreate); 
      return  res.success({ data :{ count :createdHistorique.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of Historique from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found Historique(s). {status, message, data}
 */
const findAllHistorique = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundHistorique;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      HistoriqueSchemaKey.findFilterKeys,
      Historique.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundHistorique = await dbService.count(Historique, query);
      if (!foundHistorique) {
        return res.recordNotFound();
      } 
      foundHistorique = { totalRecords: foundHistorique };
      return res.success({ data :foundHistorique });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundHistorique = await dbService.paginate( Historique,query,options);
    if (!foundHistorique){
      return res.recordNotFound();
    }
    return res.success({ data:foundHistorique }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of Historique from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found Historique. {status, message, data}
 */
const getHistorique = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundHistorique = await dbService.findOne(Historique,{ id :id });
    if (!foundHistorique){
      return res.recordNotFound();
    }
    return  res.success({ data :foundHistorique });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of Historique.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getHistoriqueCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      HistoriqueSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedHistorique = await dbService.count(Historique,where);
    if (!countedHistorique){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedHistorique } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of Historique with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Historique.
 * @return {Object} : updated Historique. {status, message, data}
 */
const updateHistorique = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      HistoriqueSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedHistorique = await dbService.update(Historique,query,dataToUpdate);
    return  res.success({ data :updatedHistorique }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of Historique with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Historiques.
 * @return {Object} : updated Historiques. {status, message, data}
 */
const bulkUpdateHistorique = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {};
    }
    let updatedHistorique = await dbService.update(Historique,filter,dataToUpdate);
    if (!updatedHistorique){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedHistorique.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of Historique with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Historique.
 * @return {Object} : updated Historique. {status, message, data}
 */
const partialUpdateHistorique = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      HistoriqueSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedHistorique = await dbService.update(Historique, query, dataToUpdate);
    if (!updatedHistorique) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedHistorique });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of Historique from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of Historique.
 * @return {Object} : deactivated Historique. {status, message, data}
 */
const softDeleteHistorique = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = { isDeleted: true, };
    let result = await dbService.update(Historique, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of Historique from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted Historique. {status, message, data}
 */
const deleteHistorique = async (req, res) => {
  const result = await dbService.deleteByPk(Historique, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of Historique in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyHistorique = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedHistorique = await dbService.destroy(Historique,query);
    return res.success({ data :{ count :deletedHistorique.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of Historique from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of Historique.
 * @return {Object} : number of deactivated documents of Historique. {status, message, data}
 */
const softDeleteManyHistorique = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = { isDeleted: true, };
    const options = {};
    let updatedHistorique = await dbService.update(Historique,query,updateBody, options);
    if (!updatedHistorique) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedHistorique.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addHistorique,
  bulkInsertHistorique,
  findAllHistorique,
  getHistorique,
  getHistoriqueCount,
  updateHistorique,
  bulkUpdateHistorique,
  partialUpdateHistorique,
  softDeleteHistorique,
  deleteHistorique,
  deleteManyHistorique,
  softDeleteManyHistorique,
};
