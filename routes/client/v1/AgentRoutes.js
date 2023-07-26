/**
 * AgentRoutes.js
 * @description :: CRUD API routes for Agent
 */

const express = require('express');
const router = express.Router();
const AgentController = require('../../../controller/client/v1/AgentController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/agent/create').post(AgentController.addAgent);
router.route('/client/api/v1/agent/addBulk').post(AgentController.bulkInsertAgent);
router.route('/client/api/v1/agent/list').post(AgentController.findAllAgent);
router.route('/client/api/v1/agent/count').post(AgentController.getAgentCount);
router.route('/client/api/v1/agent/:id').get(AgentController.getAgent);
router.route('/client/api/v1/agent/update/:id').put(AgentController.updateAgent);    
router.route('/client/api/v1/agent/partial-update/:id').put(AgentController.partialUpdateAgent);
router.route('/client/api/v1/agent/updateBulk').put(AgentController.bulkUpdateAgent);
router.route('/client/api/v1/agent/softDelete/:id').put(AgentController.softDeleteAgent);
router.route('/client/api/v1/agent/softDeleteMany').put(AgentController.softDeleteManyAgent);
router.route('/client/api/v1/agent/delete/:id').delete(AgentController.deleteAgent);
router.route('/client/api/v1/agent/deleteMany').post(AgentController.deleteManyAgent);

module.exports = router;
