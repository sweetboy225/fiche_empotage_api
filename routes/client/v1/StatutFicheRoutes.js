/**
 * StatutFicheRoutes.js
 * @description :: CRUD API routes for StatutFiche
 */

const express = require('express');
const router = express.Router();
const StatutFicheController = require('../../../controller/client/v1/StatutFicheController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/statutfiche/create').post(auth(PLATFORM.CLIENT),checkRolePermission,StatutFicheController.addStatutFiche);
router.route('/client/api/v1/statutfiche/list').post(auth(PLATFORM.CLIENT),checkRolePermission,StatutFicheController.findAllStatutFiche);
router.route('/client/api/v1/statutfiche/count').post(auth(PLATFORM.CLIENT),checkRolePermission,StatutFicheController.getStatutFicheCount);
router.route('/client/api/v1/statutfiche/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,StatutFicheController.getStatutFiche);
router.route('/client/api/v1/statutfiche/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,StatutFicheController.updateStatutFiche);    
router.route('/client/api/v1/statutfiche/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,StatutFicheController.partialUpdateStatutFiche);
router.route('/client/api/v1/statutfiche/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,StatutFicheController.softDeleteStatutFiche);
router.route('/client/api/v1/statutfiche/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,StatutFicheController.softDeleteManyStatutFiche);
router.route('/client/api/v1/statutfiche/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,StatutFicheController.bulkInsertStatutFiche);
router.route('/client/api/v1/statutfiche/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,StatutFicheController.bulkUpdateStatutFiche);
router.route('/client/api/v1/statutfiche/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,StatutFicheController.deleteStatutFiche);
router.route('/client/api/v1/statutfiche/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,StatutFicheController.deleteManyStatutFiche);

module.exports = router;
