/**
 * RoleAgentDouaneRoutes.js
 * @description :: CRUD API routes for RoleAgentDouane
 */

const express = require('express');
const router = express.Router();
const RoleAgentDouaneController = require('../../../controller/client/v1/RoleAgentDouaneController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/roleagentdouane/create').post(RoleAgentDouaneController.addRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/addBulk').post(RoleAgentDouaneController.bulkInsertRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/list').post(RoleAgentDouaneController.findAllRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/count').post(RoleAgentDouaneController.getRoleAgentDouaneCount);
router.route('/client/api/v1/roleagentdouane/:id').get(RoleAgentDouaneController.getRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/update/:id').put(RoleAgentDouaneController.updateRoleAgentDouane);    
router.route('/client/api/v1/roleagentdouane/partial-update/:id').put(RoleAgentDouaneController.partialUpdateRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/updateBulk').put(RoleAgentDouaneController.bulkUpdateRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/softDelete/:id').put(RoleAgentDouaneController.softDeleteRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/softDeleteMany').put(RoleAgentDouaneController.softDeleteManyRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/delete/:id').delete(RoleAgentDouaneController.deleteRoleAgentDouane);
router.route('/client/api/v1/roleagentdouane/deleteMany').post(RoleAgentDouaneController.deleteManyRoleAgentDouane);

module.exports = router;
