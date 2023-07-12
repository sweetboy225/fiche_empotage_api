/**
 * AgentDouaneEmailRoutes.js
 * @description :: CRUD API routes for AgentDouaneEmail
 */

const express = require('express');
const router = express.Router();
const AgentDouaneEmailController = require('../../../controller/client/v1/AgentDouaneEmailController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/agentdouaneemail/create').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentDouaneEmailController.addAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/list').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentDouaneEmailController.findAllAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/count').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentDouaneEmailController.getAgentDouaneEmailCount);
router.route('/client/api/v1/agentdouaneemail/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,AgentDouaneEmailController.getAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentDouaneEmailController.updateAgentDouaneEmail);    
router.route('/client/api/v1/agentdouaneemail/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentDouaneEmailController.partialUpdateAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentDouaneEmailController.softDeleteAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentDouaneEmailController.softDeleteManyAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentDouaneEmailController.bulkInsertAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentDouaneEmailController.bulkUpdateAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,AgentDouaneEmailController.deleteAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentDouaneEmailController.deleteManyAgentDouaneEmail);

module.exports = router;
