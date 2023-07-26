/**
 * DirectionAppRoutes.js
 * @description :: CRUD API routes for DirectionApp
 */

const express = require('express');
const router = express.Router();
const DirectionAppController = require('../../../controller/client/v1/DirectionAppController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/directionapp/create').post(DirectionAppController.addDirectionApp);
router.route('/client/api/v1/directionapp/addBulk').post(DirectionAppController.bulkInsertDirectionApp);
router.route('/client/api/v1/directionapp/list').post(DirectionAppController.findAllDirectionApp);
router.route('/client/api/v1/directionapp/count').post(DirectionAppController.getDirectionAppCount);
router.route('/client/api/v1/directionapp/:id').get(DirectionAppController.getDirectionApp);
router.route('/client/api/v1/directionapp/update/:id').put(DirectionAppController.updateDirectionApp);    
router.route('/client/api/v1/directionapp/partial-update/:id').put(DirectionAppController.partialUpdateDirectionApp);
router.route('/client/api/v1/directionapp/updateBulk').put(DirectionAppController.bulkUpdateDirectionApp);
router.route('/client/api/v1/directionapp/softDelete/:id').put(DirectionAppController.softDeleteDirectionApp);
router.route('/client/api/v1/directionapp/softDeleteMany').put(DirectionAppController.softDeleteManyDirectionApp);
router.route('/client/api/v1/directionapp/delete/:id').delete(DirectionAppController.deleteDirectionApp);
router.route('/client/api/v1/directionapp/deleteMany').post(DirectionAppController.deleteManyDirectionApp);

module.exports = router;
