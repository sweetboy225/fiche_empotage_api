/**
 * AgentDouaneEmailRoutes.js
 * @description :: CRUD API routes for AgentDouaneEmail
 */

const express = require('express');
const router = express.Router();
const AgentDouaneEmailController = require('../../../controller/client/v1/AgentDouaneEmailController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/agentdouaneemail/create').post(AgentDouaneEmailController.addAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/addBulk').post(AgentDouaneEmailController.bulkInsertAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/list').post(AgentDouaneEmailController.findAllAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/count').post(AgentDouaneEmailController.getAgentDouaneEmailCount);
router.route('/client/api/v1/agentdouaneemail/:id').get(AgentDouaneEmailController.getAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/update/:id').put(AgentDouaneEmailController.updateAgentDouaneEmail);    
router.route('/client/api/v1/agentdouaneemail/partial-update/:id').put(AgentDouaneEmailController.partialUpdateAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/updateBulk').put(AgentDouaneEmailController.bulkUpdateAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/softDelete/:id').put(AgentDouaneEmailController.softDeleteAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/softDeleteMany').put(AgentDouaneEmailController.softDeleteManyAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/delete/:id').delete(AgentDouaneEmailController.deleteAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/deleteMany').post(AgentDouaneEmailController.deleteManyAgentDouaneEmail);
router.route('/client/api/v1/agentdouaneemail/:agentDouaneEmail_matricule').get(AgentDouaneEmailController.getAgentDouaneEmailByMatricule);

module.exports = router;
