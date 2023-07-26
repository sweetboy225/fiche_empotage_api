/**
 * RoleDouaneRoutes.js
 * @description :: CRUD API routes for RoleDouane
 */

const express = require('express');
const router = express.Router();
const RoleDouaneController = require('../../../controller/client/v1/RoleDouaneController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/roledouane/create').post(RoleDouaneController.addRoleDouane);
router.route('/client/api/v1/roledouane/addBulk').post(RoleDouaneController.bulkInsertRoleDouane);
router.route('/client/api/v1/roledouane/list').post(RoleDouaneController.findAllRoleDouane);
router.route('/client/api/v1/roledouane/count').post(RoleDouaneController.getRoleDouaneCount);
router.route('/client/api/v1/roledouane/:id').get(RoleDouaneController.getRoleDouane);
router.route('/client/api/v1/roledouane/update/:id').put(RoleDouaneController.updateRoleDouane);    
router.route('/client/api/v1/roledouane/partial-update/:id').put(RoleDouaneController.partialUpdateRoleDouane);
router.route('/client/api/v1/roledouane/updateBulk').put(RoleDouaneController.bulkUpdateRoleDouane);
router.route('/client/api/v1/roledouane/softDelete/:id').put(RoleDouaneController.softDeleteRoleDouane);
router.route('/client/api/v1/roledouane/softDeleteMany').put(RoleDouaneController.softDeleteManyRoleDouane);
router.route('/client/api/v1/roledouane/delete/:id').delete(RoleDouaneController.deleteRoleDouane);
router.route('/client/api/v1/roledouane/deleteMany').post(RoleDouaneController.deleteManyRoleDouane);

module.exports = router;
