/**
 * ConteneurRoutes.js
 * @description :: CRUD API routes for Conteneur
 */

const express = require('express');
const router = express.Router();
const ConteneurController = require('../../../controller/client/v1/ConteneurController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/conteneur/create').post(auth(PLATFORM.CLIENT),checkRolePermission,ConteneurController.addConteneur);
router.route('/client/api/v1/conteneur/list').post(auth(PLATFORM.CLIENT),checkRolePermission,ConteneurController.findAllConteneur);
router.route('/client/api/v1/conteneur/count').post(auth(PLATFORM.CLIENT),checkRolePermission,ConteneurController.getConteneurCount);
router.route('/client/api/v1/conteneur/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,ConteneurController.getConteneur);
router.route('/client/api/v1/conteneur/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,ConteneurController.updateConteneur);    
router.route('/client/api/v1/conteneur/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,ConteneurController.partialUpdateConteneur);
router.route('/client/api/v1/conteneur/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,ConteneurController.softDeleteConteneur);
router.route('/client/api/v1/conteneur/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,ConteneurController.softDeleteManyConteneur);
router.route('/client/api/v1/conteneur/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,ConteneurController.bulkInsertConteneur);
router.route('/client/api/v1/conteneur/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,ConteneurController.bulkUpdateConteneur);
router.route('/client/api/v1/conteneur/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,ConteneurController.deleteConteneur);
router.route('/client/api/v1/conteneur/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,ConteneurController.deleteManyConteneur);

module.exports = router;
