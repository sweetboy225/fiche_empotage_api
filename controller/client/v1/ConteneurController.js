/**
 * ConteneurController.js
 * @description :: exports action methods for Conteneur.
 */

const Conteneur = require('../../../model/Conteneur');
const ConteneurSchemaKey = require('../../../utils/validation/ConteneurValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of Conteneur in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created Conteneur. {status, message, data}
 */ 
const addConteneur = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      ConteneurSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
    dataToCreate.addedBy = req.user.id;
    delete dataToCreate['updatedBy'];
        
    let createdConteneur = await dbService.createOne(Conteneur,dataToCreate);
    return  res.success({ data :createdConteneur });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of Conteneur in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created Conteneurs. {status, message, data}
 */
const bulkInsertConteneur = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      dataToCreate = dataToCreate.map(item=>{
        delete item.updatedBy;
        item.addedBy = req.user.id;
              
        return item;
      });
      let createdConteneur = await dbService.createMany(Conteneur,dataToCreate); 
      return  res.success({ data :{ count :createdConteneur.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of Conteneur from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found Conteneur(s). {status, message, data}
 */
const findAllConteneur = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundConteneur;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      ConteneurSchemaKey.findFilterKeys,
      Conteneur.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundConteneur = await dbService.count(Conteneur, query);
      if (!foundConteneur) {
        return res.recordNotFound();
      } 
      foundConteneur = { totalRecords: foundConteneur };
      return res.success({ data :foundConteneur });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundConteneur = await dbService.paginate( Conteneur,query,options);
    if (!foundConteneur){
      return res.recordNotFound();
    }
    return res.success({ data:foundConteneur }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of Conteneur from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found Conteneur. {status, message, data}
 */
const getConteneur = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundConteneur = await dbService.findOne(Conteneur,{ id :id });
    if (!foundConteneur){
      return res.recordNotFound();
    }
    return  res.success({ data :foundConteneur });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of Conteneur.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getConteneurCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      ConteneurSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedConteneur = await dbService.count(Conteneur,where);
    if (!countedConteneur){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedConteneur } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of Conteneur with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Conteneur.
 * @return {Object} : updated Conteneur. {status, message, data}
 */
const updateConteneur = async (req, res) => {
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
      ConteneurSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedConteneur = await dbService.update(Conteneur,query,dataToUpdate);
    return  res.success({ data :updatedConteneur }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of Conteneur with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Conteneurs.
 * @return {Object} : updated Conteneurs. {status, message, data}
 */
const bulkUpdateConteneur = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {
        ...req.body.data,
        updatedBy:req.user.id
      };
    }
    let updatedConteneur = await dbService.update(Conteneur,filter,dataToUpdate);
    if (!updatedConteneur){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedConteneur.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of Conteneur with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Conteneur.
 * @return {Object} : updated Conteneur. {status, message, data}
 */
const partialUpdateConteneur = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    delete dataToUpdate.addedBy;
    dataToUpdate.updatedBy = req.user.id;
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      ConteneurSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedConteneur = await dbService.update(Conteneur, query, dataToUpdate);
    if (!updatedConteneur) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedConteneur });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of Conteneur from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of Conteneur.
 * @return {Object} : deactivated Conteneur. {status, message, data}
 */
const softDeleteConteneur = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id
    };
    let result = await dbService.update(Conteneur, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of Conteneur from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted Conteneur. {status, message, data}
 */
const deleteConteneur = async (req, res) => {
  const result = await dbService.deleteByPk(Conteneur, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of Conteneur in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyConteneur = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedConteneur = await dbService.destroy(Conteneur,query);
    return res.success({ data :{ count :deletedConteneur.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of Conteneur from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of Conteneur.
 * @return {Object} : number of deactivated documents of Conteneur. {status, message, data}
 */
const softDeleteManyConteneur = async (req, res) => {
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
    let updatedConteneur = await dbService.update(Conteneur,query,updateBody, options);
    if (!updatedConteneur) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedConteneur.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addConteneur,
  bulkInsertConteneur,
  findAllConteneur,
  getConteneur,
  getConteneurCount,
  updateConteneur,
  bulkUpdateConteneur,
  partialUpdateConteneur,
  softDeleteConteneur,
  deleteConteneur,
  deleteManyConteneur,
  softDeleteManyConteneur,
};
