/**
 * AgentDRHRoutes.js
 * @description :: CRUD API routes for AgentDRH
 */

const express = require('express');
const router = express.Router();
const AgentDRHController = require('../../../controller/client/v1/AgentDRHController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/agentdrh/create').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentDRHController.addAgentDRH);
router.route('/client/api/v1/agentdrh/list').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentDRHController.findAllAgentDRH);
router.route('/client/api/v1/agentdrh/count').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentDRHController.getAgentDRHCount);
router.route('/client/api/v1/agentdrh/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,AgentDRHController.getAgentDRH);
router.route('/client/api/v1/agentdrh/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentDRHController.updateAgentDRH);    
router.route('/client/api/v1/agentdrh/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentDRHController.partialUpdateAgentDRH);
router.route('/client/api/v1/agentdrh/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentDRHController.softDeleteAgentDRH);
router.route('/client/api/v1/agentdrh/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentDRHController.softDeleteManyAgentDRH);
router.route('/client/api/v1/agentdrh/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentDRHController.bulkInsertAgentDRH);
router.route('/client/api/v1/agentdrh/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentDRHController.bulkUpdateAgentDRH);
router.route('/client/api/v1/agentdrh/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,AgentDRHController.deleteAgentDRH);
router.route('/client/api/v1/agentdrh/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentDRHController.deleteManyAgentDRH);

module.exports = router;
