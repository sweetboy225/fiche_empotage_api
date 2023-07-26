/**
 * RectifRoutes.js
 * @description :: CRUD API routes for Rectif
 */

const express = require('express');
const router = express.Router();
const RectifController = require('../../../controller/client/v1/RectifController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/rectif/create').post(RectifController.addRectif);
router.route('/client/api/v1/rectif/addBulk').post(RectifController.bulkInsertRectif);
router.route('/client/api/v1/rectif/list').post(RectifController.findAllRectif);
router.route('/client/api/v1/rectif/count').post(RectifController.getRectifCount);
router.route('/client/api/v1/rectif/:id').get(RectifController.getRectif);
router.route('/client/api/v1/rectif/update/:id').put(RectifController.updateRectif);    
router.route('/client/api/v1/rectif/partial-update/:id').put(RectifController.partialUpdateRectif);
router.route('/client/api/v1/rectif/updateBulk').put(RectifController.bulkUpdateRectif);
router.route('/client/api/v1/rectif/softDelete/:id').put(RectifController.softDeleteRectif);
router.route('/client/api/v1/rectif/softDeleteMany').put(RectifController.softDeleteManyRectif);
router.route('/client/api/v1/rectif/delete/:id').delete(RectifController.deleteRectif);
router.route('/client/api/v1/rectif/deleteMany').post(RectifController.deleteManyRectif);

module.exports = router;
