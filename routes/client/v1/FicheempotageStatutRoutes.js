/**
 * FicheempotageStatutRoutes.js
 * @description :: CRUD API routes for FicheempotageStatut
 */

const express = require('express');
const router = express.Router();
const FicheempotageStatutController = require('../../../controller/client/v1/FicheempotageStatutController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/ficheempotagestatut/create').post(FicheempotageStatutController.addFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/addBulk').post(FicheempotageStatutController.bulkInsertFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/list').post(FicheempotageStatutController.findAllFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/count').post(FicheempotageStatutController.getFicheempotageStatutCount);
router.route('/client/api/v1/ficheempotagestatut/:id').get(FicheempotageStatutController.getFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/update/:id').put(FicheempotageStatutController.updateFicheempotageStatut);    
router.route('/client/api/v1/ficheempotagestatut/partial-update/:id').put(FicheempotageStatutController.partialUpdateFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/updateBulk').put(FicheempotageStatutController.bulkUpdateFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/softDelete/:id').put(FicheempotageStatutController.softDeleteFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/softDeleteMany').put(FicheempotageStatutController.softDeleteManyFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/delete/:id').delete(FicheempotageStatutController.deleteFicheempotageStatut);
router.route('/client/api/v1/ficheempotagestatut/deleteMany').post(FicheempotageStatutController.deleteManyFicheempotageStatut);

module.exports = router;
