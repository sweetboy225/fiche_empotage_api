/**
 * DirectionDRHRoutes.js
 * @description :: CRUD API routes for DirectionDRH
 */

const express = require('express');
const router = express.Router();
const DirectionDRHController = require('../../../controller/client/v1/DirectionDRHController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/directiondrh/create').post(auth(PLATFORM.CLIENT),checkRolePermission,DirectionDRHController.addDirectionDRH);
router.route('/client/api/v1/directiondrh/list').post(auth(PLATFORM.CLIENT),checkRolePermission,DirectionDRHController.findAllDirectionDRH);
router.route('/client/api/v1/directiondrh/count').post(auth(PLATFORM.CLIENT),checkRolePermission,DirectionDRHController.getDirectionDRHCount);
router.route('/client/api/v1/directiondrh/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,DirectionDRHController.getDirectionDRH);
router.route('/client/api/v1/directiondrh/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,DirectionDRHController.updateDirectionDRH);    
router.route('/client/api/v1/directiondrh/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,DirectionDRHController.partialUpdateDirectionDRH);
router.route('/client/api/v1/directiondrh/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,DirectionDRHController.softDeleteDirectionDRH);
router.route('/client/api/v1/directiondrh/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,DirectionDRHController.softDeleteManyDirectionDRH);
router.route('/client/api/v1/directiondrh/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,DirectionDRHController.bulkInsertDirectionDRH);
router.route('/client/api/v1/directiondrh/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,DirectionDRHController.bulkUpdateDirectionDRH);
router.route('/client/api/v1/directiondrh/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,DirectionDRHController.deleteDirectionDRH);
router.route('/client/api/v1/directiondrh/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,DirectionDRHController.deleteManyDirectionDRH);

module.exports = router;
