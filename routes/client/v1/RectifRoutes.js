/**
 * RectifRoutes.js
 * @description :: CRUD API routes for Rectif
 */

const express = require('express');
const router = express.Router();
const RectifController = require('../../../controller/client/v1/RectifController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/rectif/create').post(auth(PLATFORM.CLIENT),checkRolePermission,RectifController.addRectif);
router.route('/client/api/v1/rectif/list').post(auth(PLATFORM.CLIENT),checkRolePermission,RectifController.findAllRectif);
router.route('/client/api/v1/rectif/count').post(auth(PLATFORM.CLIENT),checkRolePermission,RectifController.getRectifCount);
router.route('/client/api/v1/rectif/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,RectifController.getRectif);
router.route('/client/api/v1/rectif/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,RectifController.updateRectif);    
router.route('/client/api/v1/rectif/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,RectifController.partialUpdateRectif);
router.route('/client/api/v1/rectif/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,RectifController.softDeleteRectif);
router.route('/client/api/v1/rectif/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,RectifController.softDeleteManyRectif);
router.route('/client/api/v1/rectif/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,RectifController.bulkInsertRectif);
router.route('/client/api/v1/rectif/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,RectifController.bulkUpdateRectif);
router.route('/client/api/v1/rectif/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,RectifController.deleteRectif);
router.route('/client/api/v1/rectif/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,RectifController.deleteManyRectif);

module.exports = router;
