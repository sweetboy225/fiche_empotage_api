/**
 * HistoriqueRoutes.js
 * @description :: CRUD API routes for Historique
 */

const express = require('express');
const router = express.Router();
const HistoriqueController = require('../../../controller/client/v1/HistoriqueController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/historique/create').post(auth(PLATFORM.CLIENT),checkRolePermission,HistoriqueController.addHistorique);
router.route('/client/api/v1/historique/list').post(auth(PLATFORM.CLIENT),checkRolePermission,HistoriqueController.findAllHistorique);
router.route('/client/api/v1/historique/count').post(auth(PLATFORM.CLIENT),checkRolePermission,HistoriqueController.getHistoriqueCount);
router.route('/client/api/v1/historique/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,HistoriqueController.getHistorique);
router.route('/client/api/v1/historique/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,HistoriqueController.updateHistorique);    
router.route('/client/api/v1/historique/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,HistoriqueController.partialUpdateHistorique);
router.route('/client/api/v1/historique/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,HistoriqueController.softDeleteHistorique);
router.route('/client/api/v1/historique/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,HistoriqueController.softDeleteManyHistorique);
router.route('/client/api/v1/historique/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,HistoriqueController.bulkInsertHistorique);
router.route('/client/api/v1/historique/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,HistoriqueController.bulkUpdateHistorique);
router.route('/client/api/v1/historique/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,HistoriqueController.deleteHistorique);
router.route('/client/api/v1/historique/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,HistoriqueController.deleteManyHistorique);

module.exports = router;
