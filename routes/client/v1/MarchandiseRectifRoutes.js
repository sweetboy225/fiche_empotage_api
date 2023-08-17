/**
 * MarchandiseRectifRoutes.js
 * @description :: CRUD API routes for MarchandiseRectif
 */

const express = require('express');
const router = express.Router();
const MarchandiseRectifController = require('../../../controller/client/v1/MarchandiseRectifController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/marchandiserectif/create').post(MarchandiseRectifController.addMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/addBulk').post(MarchandiseRectifController.bulkInsertMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/list').post(MarchandiseRectifController.findAllMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/count').post(MarchandiseRectifController.getMarchandiseRectifCount);
router.route('/client/api/v1/marchandiserectif/:id').get(MarchandiseRectifController.getMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/update/:id').put(MarchandiseRectifController.updateMarchandiseRectif);    
router.route('/client/api/v1/marchandiserectif/partial-update/:id').put(MarchandiseRectifController.partialUpdateMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/updateBulk').put(MarchandiseRectifController.bulkUpdateMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/softDelete/:id').put(MarchandiseRectifController.softDeleteMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/softDeleteMany').put(MarchandiseRectifController.softDeleteManyMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/delete/:id').delete(MarchandiseRectifController.deleteMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/deleteMany').post(MarchandiseRectifController.deleteManyMarchandiseRectif);

module.exports = router;
