/**
 * OperateurCDARoutes.js
 * @description :: CRUD API routes for OperateurCDA
 */

const express = require('express');
const router = express.Router();
const OperateurCDAController = require('../../../controller/client/v1/OperateurCDAController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/operateurcda/create').post(OperateurCDAController.addOperateurCDA);
router.route('/client/api/v1/operateurcda/addBulk').post(OperateurCDAController.bulkInsertOperateurCDA);
router.route('/client/api/v1/operateurcda/list').post(OperateurCDAController.findAllOperateurCDA);
router.route('/client/api/v1/operateurcda/count').post(OperateurCDAController.getOperateurCDACount);
router.route('/client/api/v1/operateurcda/:id').get(OperateurCDAController.getOperateurCDA);
router.route('/client/api/v1/operateurcda/update/:id').put(OperateurCDAController.updateOperateurCDA);    
router.route('/client/api/v1/operateurcda/partial-update/:id').put(OperateurCDAController.partialUpdateOperateurCDA);
router.route('/client/api/v1/operateurcda/updateBulk').put(OperateurCDAController.bulkUpdateOperateurCDA);
router.route('/client/api/v1/operateurcda/softDelete/:id').put(OperateurCDAController.softDeleteOperateurCDA);
router.route('/client/api/v1/operateurcda/softDeleteMany').put(OperateurCDAController.softDeleteManyOperateurCDA);
router.route('/client/api/v1/operateurcda/delete/:id').delete(OperateurCDAController.deleteOperateurCDA);
router.route('/client/api/v1/operateurcda/deleteMany').post(OperateurCDAController.deleteManyOperateurCDA);

module.exports = router;
