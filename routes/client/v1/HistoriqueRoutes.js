/**
 * HistoriqueRoutes.js
 * @description :: CRUD API routes for Historique
 */

const express = require('express');
const router = express.Router();
const HistoriqueController = require('../../../controller/client/v1/HistoriqueController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/historique/create').post(HistoriqueController.addHistorique);
router.route('/client/api/v1/historique/addBulk').post(HistoriqueController.bulkInsertHistorique);
router.route('/client/api/v1/historique/list').post(HistoriqueController.findAllHistorique);
router.route('/client/api/v1/historique/count').post(HistoriqueController.getHistoriqueCount);
router.route('/client/api/v1/historique/:id').get(HistoriqueController.getHistorique);
router.route('/client/api/v1/historique/update/:id').put(HistoriqueController.updateHistorique);    
router.route('/client/api/v1/historique/partial-update/:id').put(HistoriqueController.partialUpdateHistorique);
router.route('/client/api/v1/historique/updateBulk').put(HistoriqueController.bulkUpdateHistorique);
router.route('/client/api/v1/historique/softDelete/:id').put(HistoriqueController.softDeleteHistorique);
router.route('/client/api/v1/historique/softDeleteMany').put(HistoriqueController.softDeleteManyHistorique);
router.route('/client/api/v1/historique/delete/:id').delete(HistoriqueController.deleteHistorique);
router.route('/client/api/v1/historique/deleteMany').post(HistoriqueController.deleteManyHistorique);

module.exports = router;
