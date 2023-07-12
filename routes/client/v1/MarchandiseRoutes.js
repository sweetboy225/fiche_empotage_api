/**
 * MarchandiseRoutes.js
 * @description :: CRUD API routes for Marchandise
 */

const express = require('express');
const router = express.Router();
const MarchandiseController = require('../../../controller/client/v1/MarchandiseController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/marchandise/create').post(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseController.addMarchandise);
router.route('/client/api/v1/marchandise/list').post(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseController.findAllMarchandise);
router.route('/client/api/v1/marchandise/count').post(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseController.getMarchandiseCount);
router.route('/client/api/v1/marchandise/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseController.getMarchandise);
router.route('/client/api/v1/marchandise/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseController.updateMarchandise);    
router.route('/client/api/v1/marchandise/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseController.partialUpdateMarchandise);
router.route('/client/api/v1/marchandise/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseController.softDeleteMarchandise);
router.route('/client/api/v1/marchandise/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseController.softDeleteManyMarchandise);
router.route('/client/api/v1/marchandise/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseController.bulkInsertMarchandise);
router.route('/client/api/v1/marchandise/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseController.bulkUpdateMarchandise);
router.route('/client/api/v1/marchandise/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseController.deleteMarchandise);
router.route('/client/api/v1/marchandise/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseController.deleteManyMarchandise);

module.exports = router;
