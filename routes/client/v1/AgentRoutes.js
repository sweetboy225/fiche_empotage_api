/**
 * AgentRoutes.js
 * @description :: CRUD API routes for Agent
 */

const express = require('express');
const router = express.Router();
const AgentController = require('../../../controller/client/v1/AgentController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/agent/create').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentController.addAgent);
router.route('/client/api/v1/agent/list').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentController.findAllAgent);
router.route('/client/api/v1/agent/count').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentController.getAgentCount);
router.route('/client/api/v1/agent/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,AgentController.getAgent);
router.route('/client/api/v1/agent/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentController.updateAgent);    
router.route('/client/api/v1/agent/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentController.partialUpdateAgent);
router.route('/client/api/v1/agent/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentController.softDeleteAgent);
router.route('/client/api/v1/agent/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentController.softDeleteManyAgent);
router.route('/client/api/v1/agent/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentController.bulkInsertAgent);
router.route('/client/api/v1/agent/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,AgentController.bulkUpdateAgent);
router.route('/client/api/v1/agent/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,AgentController.deleteAgent);
router.route('/client/api/v1/agent/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,AgentController.deleteManyAgent);

module.exports = router;
