/**
 * MarchandiseRoutes.js
 * @description :: CRUD API routes for Marchandise
 */

const express = require('express');
const router = express.Router();
const MarchandiseController = require('../../../controller/client/v1/MarchandiseController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/marchandise/create').post(MarchandiseController.addMarchandise);
router.route('/client/api/v1/marchandise/addBulk').post(MarchandiseController.bulkInsertMarchandise);
router.route('/client/api/v1/marchandise/list').post(MarchandiseController.findAllMarchandise);
router.route('/client/api/v1/marchandise/count').post(MarchandiseController.getMarchandiseCount);
router.route('/client/api/v1/marchandise/:id').get(MarchandiseController.getMarchandise);
router.route('/client/api/v1/marchandise/update/:id').put(MarchandiseController.updateMarchandise);    
router.route('/client/api/v1/marchandise/partial-update/:id').put(MarchandiseController.partialUpdateMarchandise);
router.route('/client/api/v1/marchandise/updateBulk').put(MarchandiseController.bulkUpdateMarchandise);
router.route('/client/api/v1/marchandise/softDelete/:id').put(MarchandiseController.softDeleteMarchandise);
router.route('/client/api/v1/marchandise/softDeleteMany').put(MarchandiseController.softDeleteManyMarchandise);
router.route('/client/api/v1/marchandise/delete/:id').delete(MarchandiseController.deleteMarchandise);
router.route('/client/api/v1/marchandise/deleteMany').post(MarchandiseController.deleteManyMarchandise);

module.exports = router;
