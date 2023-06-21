/**
 * DirectionAppRoutes.js
 * @description :: CRUD API routes for DirectionApp
 */

const express = require('express');
const router = express.Router();
const DirectionAppController = require('../../../controller/client/v1/DirectionAppController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/directionapp/create').post(auth(PLATFORM.CLIENT),checkRolePermission,DirectionAppController.addDirectionApp);
router.route('/client/api/v1/directionapp/list').post(auth(PLATFORM.CLIENT),checkRolePermission,DirectionAppController.findAllDirectionApp);
router.route('/client/api/v1/directionapp/count').post(auth(PLATFORM.CLIENT),checkRolePermission,DirectionAppController.getDirectionAppCount);
router.route('/client/api/v1/directionapp/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,DirectionAppController.getDirectionApp);
router.route('/client/api/v1/directionapp/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,DirectionAppController.updateDirectionApp);    
router.route('/client/api/v1/directionapp/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,DirectionAppController.partialUpdateDirectionApp);
router.route('/client/api/v1/directionapp/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,DirectionAppController.softDeleteDirectionApp);
router.route('/client/api/v1/directionapp/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,DirectionAppController.softDeleteManyDirectionApp);
router.route('/client/api/v1/directionapp/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,DirectionAppController.bulkInsertDirectionApp);
router.route('/client/api/v1/directionapp/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,DirectionAppController.bulkUpdateDirectionApp);
router.route('/client/api/v1/directionapp/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,DirectionAppController.deleteDirectionApp);
router.route('/client/api/v1/directionapp/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,DirectionAppController.deleteManyDirectionApp);

module.exports = router;
