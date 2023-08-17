/**
 * DirectionDRHRoutes.js
 * @description :: CRUD API routes for DirectionDRH
 */

const express = require('express');
const router = express.Router();
const DirectionDRHController = require('../../../controller/client/v1/DirectionDRHController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/directiondrh/create').post(DirectionDRHController.addDirectionDRH);
router.route('/client/api/v1/directiondrh/addBulk').post(DirectionDRHController.bulkInsertDirectionDRH);
router.route('/client/api/v1/directiondrh/list').post(DirectionDRHController.findAllDirectionDRH);
router.route('/client/api/v1/directiondrh/count').post(DirectionDRHController.getDirectionDRHCount);
router.route('/client/api/v1/directiondrh/:id').get(DirectionDRHController.getDirectionDRH);
router.route('/client/api/v1/directiondrh/update/:id').put(DirectionDRHController.updateDirectionDRH);    
router.route('/client/api/v1/directiondrh/partial-update/:id').put(DirectionDRHController.partialUpdateDirectionDRH);
router.route('/client/api/v1/directiondrh/updateBulk').put(DirectionDRHController.bulkUpdateDirectionDRH);
router.route('/client/api/v1/directiondrh/softDelete/:id').put(DirectionDRHController.softDeleteDirectionDRH);
router.route('/client/api/v1/directiondrh/softDeleteMany').put(DirectionDRHController.softDeleteManyDirectionDRH);
router.route('/client/api/v1/directiondrh/delete/:id').delete(DirectionDRHController.deleteDirectionDRH);
router.route('/client/api/v1/directiondrh/deleteMany').post(DirectionDRHController.deleteManyDirectionDRH);

module.exports = router;
