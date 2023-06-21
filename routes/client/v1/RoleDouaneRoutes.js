/**
 * RoleDouaneRoutes.js
 * @description :: CRUD API routes for RoleDouane
 */

const express = require('express');
const router = express.Router();
const RoleDouaneController = require('../../../controller/client/v1/RoleDouaneController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/roledouane/create').post(auth(PLATFORM.CLIENT),checkRolePermission,RoleDouaneController.addRoleDouane);
router.route('/client/api/v1/roledouane/list').post(auth(PLATFORM.CLIENT),checkRolePermission,RoleDouaneController.findAllRoleDouane);
router.route('/client/api/v1/roledouane/count').post(auth(PLATFORM.CLIENT),checkRolePermission,RoleDouaneController.getRoleDouaneCount);
router.route('/client/api/v1/roledouane/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,RoleDouaneController.getRoleDouane);
router.route('/client/api/v1/roledouane/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,RoleDouaneController.updateRoleDouane);    
router.route('/client/api/v1/roledouane/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,RoleDouaneController.partialUpdateRoleDouane);
router.route('/client/api/v1/roledouane/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,RoleDouaneController.softDeleteRoleDouane);
router.route('/client/api/v1/roledouane/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,RoleDouaneController.softDeleteManyRoleDouane);
router.route('/client/api/v1/roledouane/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,RoleDouaneController.bulkInsertRoleDouane);
router.route('/client/api/v1/roledouane/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,RoleDouaneController.bulkUpdateRoleDouane);
router.route('/client/api/v1/roledouane/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,RoleDouaneController.deleteRoleDouane);
router.route('/client/api/v1/roledouane/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,RoleDouaneController.deleteManyRoleDouane);

module.exports = router;
