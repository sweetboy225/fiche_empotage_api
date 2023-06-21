/**
 * RdvRoutes.js
 * @description :: CRUD API routes for Rdv
 */

const express = require('express');
const router = express.Router();
const RdvController = require('../../../controller/client/v1/RdvController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/rdv/create').post(auth(PLATFORM.CLIENT),checkRolePermission,RdvController.addRdv);
router.route('/client/api/v1/rdv/list').post(auth(PLATFORM.CLIENT),checkRolePermission,RdvController.findAllRdv);
router.route('/client/api/v1/rdv/count').post(auth(PLATFORM.CLIENT),checkRolePermission,RdvController.getRdvCount);
router.route('/client/api/v1/rdv/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,RdvController.getRdv);
router.route('/client/api/v1/rdv/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,RdvController.updateRdv);    
router.route('/client/api/v1/rdv/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,RdvController.partialUpdateRdv);
router.route('/client/api/v1/rdv/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,RdvController.softDeleteRdv);
router.route('/client/api/v1/rdv/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,RdvController.softDeleteManyRdv);
router.route('/client/api/v1/rdv/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,RdvController.bulkInsertRdv);
router.route('/client/api/v1/rdv/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,RdvController.bulkUpdateRdv);
router.route('/client/api/v1/rdv/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,RdvController.deleteRdv);
router.route('/client/api/v1/rdv/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,RdvController.deleteManyRdv);

module.exports = router;
