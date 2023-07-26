/**
 * ServiceDRHRoutes.js
 * @description :: CRUD API routes for ServiceDRH
 */

const express = require('express');
const router = express.Router();
const ServiceDRHController = require('../../../controller/client/v1/ServiceDRHController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/servicedrh/create').post(auth(PLATFORM.CLIENT),checkRolePermission,ServiceDRHController.addServiceDRH);
router.route('/client/api/v1/servicedrh/list').post(auth(PLATFORM.CLIENT),checkRolePermission,ServiceDRHController.findAllServiceDRH);
router.route('/client/api/v1/servicedrh/count').post(auth(PLATFORM.CLIENT),checkRolePermission,ServiceDRHController.getServiceDRHCount);
router.route('/client/api/v1/servicedrh/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,ServiceDRHController.getServiceDRH);
router.route('/client/api/v1/servicedrh/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,ServiceDRHController.updateServiceDRH);    
router.route('/client/api/v1/servicedrh/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,ServiceDRHController.partialUpdateServiceDRH);
router.route('/client/api/v1/servicedrh/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,ServiceDRHController.softDeleteServiceDRH);
router.route('/client/api/v1/servicedrh/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,ServiceDRHController.softDeleteManyServiceDRH);
router.route('/client/api/v1/servicedrh/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,ServiceDRHController.bulkInsertServiceDRH);
router.route('/client/api/v1/servicedrh/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,ServiceDRHController.bulkUpdateServiceDRH);
router.route('/client/api/v1/servicedrh/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,ServiceDRHController.deleteServiceDRH);
router.route('/client/api/v1/servicedrh/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,ServiceDRHController.deleteManyServiceDRH);

module.exports = router;
