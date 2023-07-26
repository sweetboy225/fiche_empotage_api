/**
 * FonctionRoutes.js
 * @description :: CRUD API routes for Fonction
 */

const express = require('express');
const router = express.Router();
const FonctionController = require('../../../controller/client/v1/FonctionController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/fonction/create').post(FonctionController.addFonction);
router.route('/client/api/v1/fonction/addBulk').post(FonctionController.bulkInsertFonction);
router.route('/client/api/v1/fonction/list').post(FonctionController.findAllFonction);
router.route('/client/api/v1/fonction/count').post(FonctionController.getFonctionCount);
router.route('/client/api/v1/fonction/:id').get(FonctionController.getFonction);
router.route('/client/api/v1/fonction/update/:id').put(FonctionController.updateFonction);    
router.route('/client/api/v1/fonction/partial-update/:id').put(FonctionController.partialUpdateFonction);
router.route('/client/api/v1/fonction/updateBulk').put(FonctionController.bulkUpdateFonction);
router.route('/client/api/v1/fonction/softDelete/:id').put(FonctionController.softDeleteFonction);
router.route('/client/api/v1/fonction/softDeleteMany').put(FonctionController.softDeleteManyFonction);
router.route('/client/api/v1/fonction/delete/:id').delete(FonctionController.deleteFonction);
router.route('/client/api/v1/fonction/deleteMany').post(FonctionController.deleteManyFonction);

module.exports = router;
