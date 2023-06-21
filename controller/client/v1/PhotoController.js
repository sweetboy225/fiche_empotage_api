/**
 * PhotoController.js
 * @description :: exports action methods for Photo.
 */

const Photo = require('../../../model/Photo');
const PhotoSchemaKey = require('../../../utils/validation/PhotoValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of Photo in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created Photo. {status, message, data}
 */ 
const addPhoto = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      PhotoSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
    dataToCreate.addedBy = req.user.id;
    delete dataToCreate['updatedBy'];
        
    let createdPhoto = await dbService.createOne(Photo,dataToCreate);
    return  res.success({ data :createdPhoto });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of Photo in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created Photos. {status, message, data}
 */
const bulkInsertPhoto = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      dataToCreate = dataToCreate.map(item=>{
        delete item.updatedBy;
        item.addedBy = req.user.id;
              
        return item;
      });
      let createdPhoto = await dbService.createMany(Photo,dataToCreate); 
      return  res.success({ data :{ count :createdPhoto.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of Photo from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found Photo(s). {status, message, data}
 */
const findAllPhoto = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundPhoto;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      PhotoSchemaKey.findFilterKeys,
      Photo.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundPhoto = await dbService.count(Photo, query);
      if (!foundPhoto) {
        return res.recordNotFound();
      } 
      foundPhoto = { totalRecords: foundPhoto };
      return res.success({ data :foundPhoto });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundPhoto = await dbService.paginate( Photo,query,options);
    if (!foundPhoto){
      return res.recordNotFound();
    }
    return res.success({ data:foundPhoto }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of Photo from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found Photo. {status, message, data}
 */
const getPhoto = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundPhoto = await dbService.findOne(Photo,{ id :id });
    if (!foundPhoto){
      return res.recordNotFound();
    }
    return  res.success({ data :foundPhoto });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of Photo.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getPhotoCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      PhotoSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedPhoto = await dbService.count(Photo,where);
    if (!countedPhoto){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedPhoto } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of Photo with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Photo.
 * @return {Object} : updated Photo. {status, message, data}
 */
const updatePhoto = async (req, res) => {
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
      PhotoSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedPhoto = await dbService.update(Photo,query,dataToUpdate);
    return  res.success({ data :updatedPhoto }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of Photo with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Photos.
 * @return {Object} : updated Photos. {status, message, data}
 */
const bulkUpdatePhoto = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {
        ...req.body.data,
        updatedBy:req.user.id
      };
    }
    let updatedPhoto = await dbService.update(Photo,filter,dataToUpdate);
    if (!updatedPhoto){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedPhoto.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of Photo with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Photo.
 * @return {Object} : updated Photo. {status, message, data}
 */
const partialUpdatePhoto = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    delete dataToUpdate.addedBy;
    dataToUpdate.updatedBy = req.user.id;
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      PhotoSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedPhoto = await dbService.update(Photo, query, dataToUpdate);
    if (!updatedPhoto) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedPhoto });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of Photo from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of Photo.
 * @return {Object} : deactivated Photo. {status, message, data}
 */
const softDeletePhoto = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id
    };
    let result = await dbService.update(Photo, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of Photo from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted Photo. {status, message, data}
 */
const deletePhoto = async (req, res) => {
  const result = await dbService.deleteByPk(Photo, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of Photo in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyPhoto = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedPhoto = await dbService.destroy(Photo,query);
    return res.success({ data :{ count :deletedPhoto.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of Photo from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of Photo.
 * @return {Object} : number of deactivated documents of Photo. {status, message, data}
 */
const softDeleteManyPhoto = async (req, res) => {
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
    let updatedPhoto = await dbService.update(Photo,query,updateBody, options);
    if (!updatedPhoto) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedPhoto.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addPhoto,
  bulkInsertPhoto,
  findAllPhoto,
  getPhoto,
  getPhotoCount,
  updatePhoto,
  bulkUpdatePhoto,
  partialUpdatePhoto,
  softDeletePhoto,
  deletePhoto,
  deleteManyPhoto,
  softDeleteManyPhoto,
};
