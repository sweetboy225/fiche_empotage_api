/**
 * FicheEmpotageRoutes.js
 * @description :: CRUD API routes for FicheEmpotage
 */

const express = require('express');
const router = express.Router();
const FicheEmpotageController = require('../../../controller/client/v1/FicheEmpotageController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/ficheempotage/create').post(auth(PLATFORM.CLIENT),checkRolePermission,FicheEmpotageController.addFicheEmpotage);
router.route('/client/api/v1/ficheempotage/list').post(auth(PLATFORM.CLIENT),checkRolePermission,FicheEmpotageController.findAllFicheEmpotage);
router.route('/client/api/v1/ficheempotage/count').post(auth(PLATFORM.CLIENT),checkRolePermission,FicheEmpotageController.getFicheEmpotageCount);
router.route('/client/api/v1/ficheempotage/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,FicheEmpotageController.getFicheEmpotage);
router.route('/client/api/v1/ficheempotage/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,FicheEmpotageController.updateFicheEmpotage);    
router.route('/client/api/v1/ficheempotage/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,FicheEmpotageController.partialUpdateFicheEmpotage);
router.route('/client/api/v1/ficheempotage/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,FicheEmpotageController.softDeleteFicheEmpotage);
router.route('/client/api/v1/ficheempotage/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,FicheEmpotageController.softDeleteManyFicheEmpotage);
router.route('/client/api/v1/ficheempotage/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,FicheEmpotageController.bulkInsertFicheEmpotage);
router.route('/client/api/v1/ficheempotage/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,FicheEmpotageController.bulkUpdateFicheEmpotage);
router.route('/client/api/v1/ficheempotage/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,FicheEmpotageController.deleteFicheEmpotage);
router.route('/client/api/v1/ficheempotage/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,FicheEmpotageController.deleteManyFicheEmpotage);

module.exports = router;
