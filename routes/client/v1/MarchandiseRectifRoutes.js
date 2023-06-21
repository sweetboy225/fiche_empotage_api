/**
 * MarchandiseRectifRoutes.js
 * @description :: CRUD API routes for MarchandiseRectif
 */

const express = require('express');
const router = express.Router();
const MarchandiseRectifController = require('../../../controller/client/v1/MarchandiseRectifController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/marchandiserectif/create').post(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseRectifController.addMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/list').post(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseRectifController.findAllMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/count').post(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseRectifController.getMarchandiseRectifCount);
router.route('/client/api/v1/marchandiserectif/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseRectifController.getMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseRectifController.updateMarchandiseRectif);    
router.route('/client/api/v1/marchandiserectif/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseRectifController.partialUpdateMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseRectifController.softDeleteMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseRectifController.softDeleteManyMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseRectifController.bulkInsertMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseRectifController.bulkUpdateMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseRectifController.deleteMarchandiseRectif);
router.route('/client/api/v1/marchandiserectif/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,MarchandiseRectifController.deleteManyMarchandiseRectif);

module.exports = router;
