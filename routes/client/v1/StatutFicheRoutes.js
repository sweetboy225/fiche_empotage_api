/**
 * StatutFicheRoutes.js
 * @description :: CRUD API routes for StatutFiche
 */

const express = require('express');
const router = express.Router();
const StatutFicheController = require('../../../controller/client/v1/StatutFicheController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/statutfiche/create').post(StatutFicheController.addStatutFiche);
router.route('/client/api/v1/statutfiche/addBulk').post(StatutFicheController.bulkInsertStatutFiche);
router.route('/client/api/v1/statutfiche/list').post(StatutFicheController.findAllStatutFiche);
router.route('/client/api/v1/statutfiche/count').post(StatutFicheController.getStatutFicheCount);
router.route('/client/api/v1/statutfiche/:id').get(StatutFicheController.getStatutFiche);
router.route('/client/api/v1/statutfiche/update/:id').put(StatutFicheController.updateStatutFiche);    
router.route('/client/api/v1/statutfiche/partial-update/:id').put(StatutFicheController.partialUpdateStatutFiche);
router.route('/client/api/v1/statutfiche/updateBulk').put(StatutFicheController.bulkUpdateStatutFiche);
router.route('/client/api/v1/statutfiche/softDelete/:id').put(StatutFicheController.softDeleteStatutFiche);
router.route('/client/api/v1/statutfiche/softDeleteMany').put(StatutFicheController.softDeleteManyStatutFiche);
router.route('/client/api/v1/statutfiche/delete/:id').delete(StatutFicheController.deleteStatutFiche);
router.route('/client/api/v1/statutfiche/deleteMany').post(StatutFicheController.deleteManyStatutFiche);

module.exports = router;
