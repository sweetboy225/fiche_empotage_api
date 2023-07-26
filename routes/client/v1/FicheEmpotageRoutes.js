/**
 * FicheEmpotageRoutes.js
 * @description :: CRUD API routes for FicheEmpotage
 */

const express = require('express');
const router = express.Router();
const FicheEmpotageController = require('../../../controller/client/v1/FicheEmpotageController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/ficheempotage/create').post(FicheEmpotageController.addFicheEmpotage);
router.route('/client/api/v1/ficheempotage/addBulk').post(FicheEmpotageController.bulkInsertFicheEmpotage);
router.route('/client/api/v1/ficheempotage/list').post(FicheEmpotageController.findAllFicheEmpotage);
router.route('/client/api/v1/ficheempotage/count').post(FicheEmpotageController.getFicheEmpotageCount);
router.route('/client/api/v1/ficheempotage/:id').get(FicheEmpotageController.getFicheEmpotage);
router.route('/client/api/v1/ficheempotage/update/:id').put(FicheEmpotageController.updateFicheEmpotage);    
router.route('/client/api/v1/ficheempotage/partial-update/:id').put(FicheEmpotageController.partialUpdateFicheEmpotage);
router.route('/client/api/v1/ficheempotage/updateBulk').put(FicheEmpotageController.bulkUpdateFicheEmpotage);
router.route('/client/api/v1/ficheempotage/softDelete/:id').put(FicheEmpotageController.softDeleteFicheEmpotage);
router.route('/client/api/v1/ficheempotage/softDeleteMany').put(FicheEmpotageController.softDeleteManyFicheEmpotage);
router.route('/client/api/v1/ficheempotage/delete/:id').delete(FicheEmpotageController.deleteFicheEmpotage);
router.route('/client/api/v1/ficheempotage/deleteMany').post(FicheEmpotageController.deleteManyFicheEmpotage);

module.exports = router;
