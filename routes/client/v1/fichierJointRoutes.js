/**
 * fichierJointRoutes.js
 * @description :: CRUD API routes for fichierJoint
 */

const express = require('express');
const router = express.Router();
const fichierJointController = require('../../../controller/client/v1/fichierJointController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/fichierjoint/create').post(fichierJointController.addFichierJoint);
router.route('/client/api/v1/fichierjoint/addBulk').post(fichierJointController.bulkInsertFichierJoint);
router.route('/client/api/v1/fichierjoint/list').post(fichierJointController.findAllFichierJoint);
router.route('/client/api/v1/fichierjoint/count').post(fichierJointController.getFichierJointCount);
router.route('/client/api/v1/fichierjoint/:id').get(fichierJointController.getFichierJoint);
router.route('/client/api/v1/fichierjoint/update/:id').put(fichierJointController.updateFichierJoint);    
router.route('/client/api/v1/fichierjoint/partial-update/:id').put(fichierJointController.partialUpdateFichierJoint);
router.route('/client/api/v1/fichierjoint/updateBulk').put(fichierJointController.bulkUpdateFichierJoint);
router.route('/client/api/v1/fichierjoint/softDelete/:id').put(fichierJointController.softDeleteFichierJoint);
router.route('/client/api/v1/fichierjoint/softDeleteMany').put(fichierJointController.softDeleteManyFichierJoint);
router.route('/client/api/v1/fichierjoint/delete/:id').delete(fichierJointController.deleteFichierJoint);
router.route('/client/api/v1/fichierjoint/deleteMany').post(fichierJointController.deleteManyFichierJoint);

module.exports = router;
