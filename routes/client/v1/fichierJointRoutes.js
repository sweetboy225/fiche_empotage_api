/**
 * fichierJointRoutes.js
 * @description :: CRUD API routes for fichierJoint
 */

const express = require('express');
const router = express.Router();
const fichierJointController = require('../../../controller/client/v1/fichierJointController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/fichierjoint/create').post(auth(PLATFORM.CLIENT),checkRolePermission,fichierJointController.addFichierJoint);
router.route('/client/api/v1/fichierjoint/list').post(auth(PLATFORM.CLIENT),checkRolePermission,fichierJointController.findAllFichierJoint);
router.route('/client/api/v1/fichierjoint/count').post(auth(PLATFORM.CLIENT),checkRolePermission,fichierJointController.getFichierJointCount);
router.route('/client/api/v1/fichierjoint/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,fichierJointController.getFichierJoint);
router.route('/client/api/v1/fichierjoint/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,fichierJointController.updateFichierJoint);    
router.route('/client/api/v1/fichierjoint/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,fichierJointController.partialUpdateFichierJoint);
router.route('/client/api/v1/fichierjoint/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,fichierJointController.softDeleteFichierJoint);
router.route('/client/api/v1/fichierjoint/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,fichierJointController.softDeleteManyFichierJoint);
router.route('/client/api/v1/fichierjoint/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,fichierJointController.bulkInsertFichierJoint);
router.route('/client/api/v1/fichierjoint/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,fichierJointController.bulkUpdateFichierJoint);
router.route('/client/api/v1/fichierjoint/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,fichierJointController.deleteFichierJoint);
router.route('/client/api/v1/fichierjoint/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,fichierJointController.deleteManyFichierJoint);

module.exports = router;
