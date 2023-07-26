/**
 * RdvRoutes.js
 * @description :: CRUD API routes for Rdv
 */

const express = require('express');
const router = express.Router();
const RdvController = require('../../../controller/client/v1/RdvController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/rdv/create').post(RdvController.addRdv);
router.route('/client/api/v1/rdv/addBulk').post(RdvController.bulkInsertRdv);
router.route('/client/api/v1/rdv/list').post(RdvController.findAllRdv);
router.route('/client/api/v1/rdv/count').post(RdvController.getRdvCount);
router.route('/client/api/v1/rdv/:id').get(RdvController.getRdv);
router.route('/client/api/v1/rdv/update/:id').put(RdvController.updateRdv);    
router.route('/client/api/v1/rdv/partial-update/:id').put(RdvController.partialUpdateRdv);
router.route('/client/api/v1/rdv/updateBulk').put(RdvController.bulkUpdateRdv);
router.route('/client/api/v1/rdv/softDelete/:id').put(RdvController.softDeleteRdv);
router.route('/client/api/v1/rdv/softDeleteMany').put(RdvController.softDeleteManyRdv);
router.route('/client/api/v1/rdv/delete/:id').delete(RdvController.deleteRdv);
router.route('/client/api/v1/rdv/deleteMany').post(RdvController.deleteManyRdv);

module.exports = router;
