/**
 * SectionDRHController.js
 * @description :: exports action methods for SectionDRH.
 */

const SectionDRH = require('../../../model/SectionDRH');
const SectionDRHSchemaKey = require('../../../utils/validation/SectionDRHValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const models = require('../../../model');
const utils = require('../../../utils/common');

/**
 * @description : create record of SectionDRH in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created SectionDRH. {status, message, data}
 */ 
const addSectionDRH = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      SectionDRHSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
    dataToCreate.addedBy = req.user.id;
    delete dataToCreate['updatedBy'];
        
    let createdSectionDRH = await dbService.createOne(SectionDRH,dataToCreate);
    return  res.success({ data :createdSectionDRH });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of SectionDRH in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created SectionDRHs. {status, message, data}
 */
const bulkInsertSectionDRH = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      dataToCreate = dataToCreate.map(item=>{
        delete item.updatedBy;
        item.addedBy = req.user.id;
              
        return item;
      });
      let createdSectionDRH = await dbService.createMany(SectionDRH,dataToCreate); 
      return  res.success({ data :{ count :createdSectionDRH.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of SectionDRH from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found SectionDRH(s). {status, message, data}
 */
const findAllSectionDRH = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundSectionDRH;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      SectionDRHSchemaKey.findFilterKeys,
      SectionDRH.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundSectionDRH = await dbService.count(SectionDRH, query);
      if (!foundSectionDRH) {
        return res.recordNotFound();
      } 
      foundSectionDRH = { totalRecords: foundSectionDRH };
      return res.success({ data :foundSectionDRH });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundSectionDRH = await dbService.paginate( SectionDRH,query,options);
    if (!foundSectionDRH){
      return res.recordNotFound();
    }
    return res.success({ data:foundSectionDRH }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of SectionDRH from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found SectionDRH. {status, message, data}
 */
const getSectionDRH = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundSectionDRH = await dbService.findOne(SectionDRH,{ id :id });
    if (!foundSectionDRH){
      return res.recordNotFound();
    }
    return  res.success({ data :foundSectionDRH });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of SectionDRH.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getSectionDRHCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      SectionDRHSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedSectionDRH = await dbService.count(SectionDRH,where);
    if (!countedSectionDRH){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedSectionDRH } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of SectionDRH with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated SectionDRH.
 * @return {Object} : updated SectionDRH. {status, message, data}
 */
const updateSectionDRH = async (req, res) => {
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
      SectionDRHSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedSectionDRH = await dbService.update(SectionDRH,query,dataToUpdate);
    return  res.success({ data :updatedSectionDRH }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of SectionDRH with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated SectionDRHs.
 * @return {Object} : updated SectionDRHs. {status, message, data}
 */
const bulkUpdateSectionDRH = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {
        ...req.body.data,
        updatedBy:req.user.id
      };
    }
    let updatedSectionDRH = await dbService.update(SectionDRH,filter,dataToUpdate);
    if (!updatedSectionDRH){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedSectionDRH.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of SectionDRH with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated SectionDRH.
 * @return {Object} : updated SectionDRH. {status, message, data}
 */
const partialUpdateSectionDRH = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    delete dataToUpdate.addedBy;
    dataToUpdate.updatedBy = req.user.id;
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      SectionDRHSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedSectionDRH = await dbService.update(SectionDRH, query, dataToUpdate);
    if (!updatedSectionDRH) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedSectionDRH });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of SectionDRH from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of SectionDRH.
 * @return {Object} : deactivated SectionDRH. {status, message, data}
 */
const softDeleteSectionDRH = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id
    };
    let result = await dbService.update(SectionDRH, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of SectionDRH from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted SectionDRH. {status, message, data}
 */
const deleteSectionDRH = async (req, res) => {
  const result = await dbService.deleteByPk(SectionDRH, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of SectionDRH in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManySectionDRH = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedSectionDRH = await dbService.destroy(SectionDRH,query);
    return res.success({ data :{ count :deletedSectionDRH.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of SectionDRH from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of SectionDRH.
 * @return {Object} : number of deactivated documents of SectionDRH. {status, message, data}
 */
const softDeleteManySectionDRH = async (req, res) => {
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
    let updatedSectionDRH = await dbService.update(SectionDRH,query,updateBody, options);
    if (!updatedSectionDRH) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedSectionDRH.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addSectionDRH,
  bulkInsertSectionDRH,
  findAllSectionDRH,
  getSectionDRH,
  getSectionDRHCount,
  updateSectionDRH,
  bulkUpdateSectionDRH,
  partialUpdateSectionDRH,
  softDeleteSectionDRH,
  deleteSectionDRH,
  deleteManySectionDRH,
  softDeleteManySectionDRH,
};
