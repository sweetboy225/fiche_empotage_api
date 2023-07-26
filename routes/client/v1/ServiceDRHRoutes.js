/**
 * ServiceDRHRoutes.js
 * @description :: CRUD API routes for ServiceDRH
 */

const express = require('express');
const router = express.Router();
const ServiceDRHController = require('../../../controller/client/v1/ServiceDRHController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/servicedrh/create').post(ServiceDRHController.addServiceDRH);
router.route('/client/api/v1/servicedrh/addBulk').post(ServiceDRHController.bulkInsertServiceDRH);
router.route('/client/api/v1/servicedrh/list').post(ServiceDRHController.findAllServiceDRH);
router.route('/client/api/v1/servicedrh/count').post(ServiceDRHController.getServiceDRHCount);
router.route('/client/api/v1/servicedrh/:id').get(ServiceDRHController.getServiceDRH);
router.route('/client/api/v1/servicedrh/update/:id').put(ServiceDRHController.updateServiceDRH);    
router.route('/client/api/v1/servicedrh/partial-update/:id').put(ServiceDRHController.partialUpdateServiceDRH);
router.route('/client/api/v1/servicedrh/updateBulk').put(ServiceDRHController.bulkUpdateServiceDRH);
router.route('/client/api/v1/servicedrh/softDelete/:id').put(ServiceDRHController.softDeleteServiceDRH);
router.route('/client/api/v1/servicedrh/softDeleteMany').put(ServiceDRHController.softDeleteManyServiceDRH);
router.route('/client/api/v1/servicedrh/delete/:id').delete(ServiceDRHController.deleteServiceDRH);
router.route('/client/api/v1/servicedrh/deleteMany').post(ServiceDRHController.deleteManyServiceDRH);

module.exports = router;
