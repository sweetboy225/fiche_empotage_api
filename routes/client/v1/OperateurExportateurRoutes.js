/**
 * OperateurExportateurRoutes.js
 * @description :: CRUD API routes for OperateurExportateur
 */

const express = require('express');
const router = express.Router();
const OperateurExportateurController = require('../../../controller/client/v1/OperateurExportateurController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/operateurexportateur/create').post(OperateurExportateurController.addOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/addBulk').post(OperateurExportateurController.bulkInsertOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/list').post(OperateurExportateurController.findAllOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/count').post(OperateurExportateurController.getOperateurExportateurCount);
router.route('/client/api/v1/operateurexportateur/:id').get(OperateurExportateurController.getOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/update/:id').put(OperateurExportateurController.updateOperateurExportateur);    
router.route('/client/api/v1/operateurexportateur/partial-update/:id').put(OperateurExportateurController.partialUpdateOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/updateBulk').put(OperateurExportateurController.bulkUpdateOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/softDelete/:id').put(OperateurExportateurController.softDeleteOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/softDeleteMany').put(OperateurExportateurController.softDeleteManyOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/delete/:id').delete(OperateurExportateurController.deleteOperateurExportateur);
router.route('/client/api/v1/operateurexportateur/deleteMany').post(OperateurExportateurController.deleteManyOperateurExportateur);

module.exports = router;
