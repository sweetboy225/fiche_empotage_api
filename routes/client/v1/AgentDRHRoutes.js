/**
 * AgentDRHRoutes.js
 * @description :: CRUD API routes for AgentDRH
 */

const express = require('express');
const router = express.Router();
const AgentDRHController = require('../../../controller/client/v1/AgentDRHController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/agentdrh/create').post(AgentDRHController.addAgentDRH);
router.route('/client/api/v1/agentdrh/addBulk').post(AgentDRHController.bulkInsertAgentDRH);
router.route('/client/api/v1/agentdrh/list').post(AgentDRHController.findAllAgentDRH);
router.route('/client/api/v1/agentdrh/count').post(AgentDRHController.getAgentDRHCount);
router.route('/client/api/v1/agentdrh/:id').get(AgentDRHController.getAgentDRH);
router.route('/client/api/v1/agentdrh/update/:id').put(AgentDRHController.updateAgentDRH);    
router.route('/client/api/v1/agentdrh/partial-update/:id').put(AgentDRHController.partialUpdateAgentDRH);
router.route('/client/api/v1/agentdrh/updateBulk').put(AgentDRHController.bulkUpdateAgentDRH);
router.route('/client/api/v1/agentdrh/softDelete/:id').put(AgentDRHController.softDeleteAgentDRH);
router.route('/client/api/v1/agentdrh/softDeleteMany').put(AgentDRHController.softDeleteManyAgentDRH);
router.route('/client/api/v1/agentdrh/delete/:id').delete(AgentDRHController.deleteAgentDRH);
router.route('/client/api/v1/agentdrh/deleteMany').post(AgentDRHController.deleteManyAgentDRH);

module.exports = router;
