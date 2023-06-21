/**
 * RoleAgentDouaneRoutes.js
 * @description :: CRUD API routes for RoleAgentDouane
 */

const express = require('express');
const router = express.Router();
const RoleAgentDouaneController = require('../../../controller/client/v1/RoleAgentDouaneController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/roleagentdouane/create').post(auth(PLATFORM.CLIENT),checkRolePermission,RoleAgentDouaneController.addRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/list').post(auth(PLATFORM.CLIENT),checkRolePermission,RoleAgentDouaneController.findAllRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/count').post(auth(PLATFORM.CLIENT),checkRolePermission,RoleAgentDouaneController.getRoleAgentDouaneCount);
router.route('/client/api/v1/roleagentdouane/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,RoleAgentDouaneController.getRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,RoleAgentDouaneController.updateRoleAgentDouane);    
router.route('/client/api/v1/roleagentdouane/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,RoleAgentDouaneController.partialUpdateRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,RoleAgentDouaneController.softDeleteRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,RoleAgentDouaneController.softDeleteManyRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,RoleAgentDouaneController.bulkInsertRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,RoleAgentDouaneController.bulkUpdateRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,RoleAgentDouaneController.deleteRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,RoleAgentDouaneController.deleteManyRoleAgentDouane);

module.exports = router;
