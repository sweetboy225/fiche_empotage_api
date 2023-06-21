/**
 * OperateurCDARoutes.js
 * @description :: CRUD API routes for OperateurCDA
 */

const express = require('express');
const router = express.Router();
const OperateurCDAController = require('../../../controller/client/v1/OperateurCDAController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/operateurcda/create').post(auth(PLATFORM.CLIENT),checkRolePermission,OperateurCDAController.addOperateurCDA);
router.route('/client/api/v1/operateurcda/list').post(auth(PLATFORM.CLIENT),checkRolePermission,OperateurCDAController.findAllOperateurCDA);
router.route('/client/api/v1/operateurcda/count').post(auth(PLATFORM.CLIENT),checkRolePermission,OperateurCDAController.getOperateurCDACount);
router.route('/client/api/v1/operateurcda/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,OperateurCDAController.getOperateurCDA);
router.route('/client/api/v1/operateurcda/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,OperateurCDAController.updateOperateurCDA);    
router.route('/client/api/v1/operateurcda/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,OperateurCDAController.partialUpdateOperateurCDA);
router.route('/client/api/v1/operateurcda/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,OperateurCDAController.softDeleteOperateurCDA);
router.route('/client/api/v1/operateurcda/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,OperateurCDAController.softDeleteManyOperateurCDA);
router.route('/client/api/v1/operateurcda/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,OperateurCDAController.bulkInsertOperateurCDA);
router.route('/client/api/v1/operateurcda/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,OperateurCDAController.bulkUpdateOperateurCDA);
router.route('/client/api/v1/operateurcda/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,OperateurCDAController.deleteOperateurCDA);
router.route('/client/api/v1/operateurcda/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,OperateurCDAController.deleteManyOperateurCDA);

module.exports = router;
