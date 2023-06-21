/**
 * FonctionRoutes.js
 * @description :: CRUD API routes for Fonction
 */

const express = require('express');
const router = express.Router();
const FonctionController = require('../../../controller/client/v1/FonctionController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/fonction/create').post(auth(PLATFORM.CLIENT),checkRolePermission,FonctionController.addFonction);
router.route('/client/api/v1/fonction/list').post(auth(PLATFORM.CLIENT),checkRolePermission,FonctionController.findAllFonction);
router.route('/client/api/v1/fonction/count').post(auth(PLATFORM.CLIENT),checkRolePermission,FonctionController.getFonctionCount);
router.route('/client/api/v1/fonction/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,FonctionController.getFonction);
router.route('/client/api/v1/fonction/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,FonctionController.updateFonction);    
router.route('/client/api/v1/fonction/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,FonctionController.partialUpdateFonction);
router.route('/client/api/v1/fonction/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,FonctionController.softDeleteFonction);
router.route('/client/api/v1/fonction/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,FonctionController.softDeleteManyFonction);
router.route('/client/api/v1/fonction/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,FonctionController.bulkInsertFonction);
router.route('/client/api/v1/fonction/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,FonctionController.bulkUpdateFonction);
router.route('/client/api/v1/fonction/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,FonctionController.deleteFonction);
router.route('/client/api/v1/fonction/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,FonctionController.deleteManyFonction);

module.exports = router;
