/**
 * ConteneurRoutes.js
 * @description :: CRUD API routes for Conteneur
 */

const express = require('express');
const router = express.Router();
const ConteneurController = require('../../../controller/client/v1/ConteneurController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/conteneur/create').post(ConteneurController.addConteneur);
router.route('/client/api/v1/conteneur/addBulk').post(ConteneurController.bulkInsertConteneur);
router.route('/client/api/v1/conteneur/list').post(ConteneurController.findAllConteneur);
router.route('/client/api/v1/conteneur/count').post(ConteneurController.getConteneurCount);
router.route('/client/api/v1/conteneur/:id').get(ConteneurController.getConteneur);
router.route('/client/api/v1/conteneur/update/:id').put(ConteneurController.updateConteneur);    
router.route('/client/api/v1/conteneur/partial-update/:id').put(ConteneurController.partialUpdateConteneur);
router.route('/client/api/v1/conteneur/updateBulk').put(ConteneurController.bulkUpdateConteneur);
router.route('/client/api/v1/conteneur/softDelete/:id').put(ConteneurController.softDeleteConteneur);
router.route('/client/api/v1/conteneur/softDeleteMany').put(ConteneurController.softDeleteManyConteneur);
router.route('/client/api/v1/conteneur/delete/:id').delete(ConteneurController.deleteConteneur);
router.route('/client/api/v1/conteneur/deleteMany').post(ConteneurController.deleteManyConteneur);

module.exports = router;
