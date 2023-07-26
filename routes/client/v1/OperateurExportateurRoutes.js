/**
 * OperateurExportateurRoutes.js
 * @description :: CRUD API routes for OperateurExportateur
 */

const express = require('express');
const router = express.Router();
const OperateurExportateurController = require('../../../controller/client/v1/OperateurExportateurController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/operateurexportateur/create').post(auth(PLATFORM.CLIENT),checkRolePermission,OperateurExportateurController.addOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/list').post(auth(PLATFORM.CLIENT),checkRolePermission,OperateurExportateurController.findAllOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/count').post(auth(PLATFORM.CLIENT),checkRolePermission,OperateurExportateurController.getOperateurExportateurCount);
router.route('/client/api/v1/operateurexportateur/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,OperateurExportateurController.getOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,OperateurExportateurController.updateOperateurExportateur);    
router.route('/client/api/v1/operateurexportateur/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,OperateurExportateurController.partialUpdateOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,OperateurExportateurController.softDeleteOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,OperateurExportateurController.softDeleteManyOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,OperateurExportateurController.bulkInsertOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,OperateurExportateurController.bulkUpdateOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,OperateurExportateurController.deleteOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,OperateurExportateurController.deleteManyOperateurExportateur);

module.exports = router;
