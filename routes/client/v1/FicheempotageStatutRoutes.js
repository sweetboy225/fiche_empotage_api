/**
 * FicheempotageStatutRoutes.js
 * @description :: CRUD API routes for FicheempotageStatut
 */

const express = require('express');
const router = express.Router();
const FicheempotageStatutController = require('../../../controller/client/v1/FicheempotageStatutController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/ficheempotagestatut/create').post(auth(PLATFORM.CLIENT),checkRolePermission,FicheempotageStatutController.addFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/list').post(auth(PLATFORM.CLIENT),checkRolePermission,FicheempotageStatutController.findAllFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/count').post(auth(PLATFORM.CLIENT),checkRolePermission,FicheempotageStatutController.getFicheempotageStatutCount);
router.route('/client/api/v1/ficheempotagestatut/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,FicheempotageStatutController.getFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,FicheempotageStatutController.updateFicheempotageStatut);    
router.route('/client/api/v1/ficheempotagestatut/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,FicheempotageStatutController.partialUpdateFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,FicheempotageStatutController.softDeleteFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,FicheempotageStatutController.softDeleteManyFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,FicheempotageStatutController.bulkInsertFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,FicheempotageStatutController.bulkUpdateFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,FicheempotageStatutController.deleteFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,FicheempotageStatutController.deleteManyFicheempotageStatut);

module.exports = router;
