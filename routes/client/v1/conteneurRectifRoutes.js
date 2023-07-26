/**
 * conteneurRectifRoutes.js
 * @description :: CRUD API routes for conteneurRectif
 */

const express = require('express');
const router = express.Router();
const conteneurRectifController = require('../../../controller/client/v1/conteneurRectifController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/conteneurrectif/create').post(conteneurRectifController.addConteneurRectif);
router.route('/client/api/v1/conteneurrectif/addBulk').post(conteneurRectifController.bulkInsertConteneurRectif);
router.route('/client/api/v1/conteneurrectif/list').post(conteneurRectifController.findAllConteneurRectif);
router.route('/client/api/v1/conteneurrectif/count').post(conteneurRectifController.getConteneurRectifCount);
router.route('/client/api/v1/conteneurrectif/:id').get(conteneurRectifController.getConteneurRectif);
router.route('/client/api/v1/conteneurrectif/update/:id').put(conteneurRectifController.updateConteneurRectif);    
router.route('/client/api/v1/conteneurrectif/partial-update/:id').put(conteneurRectifController.partialUpdateConteneurRectif);
router.route('/client/api/v1/conteneurrectif/updateBulk').put(conteneurRectifController.bulkUpdateConteneurRectif);
router.route('/client/api/v1/conteneurrectif/softDelete/:id').put(conteneurRectifController.softDeleteConteneurRectif);
router.route('/client/api/v1/conteneurrectif/softDeleteMany').put(conteneurRectifController.softDeleteManyConteneurRectif);
router.route('/client/api/v1/conteneurrectif/delete/:id').delete(conteneurRectifController.deleteConteneurRectif);
router.route('/client/api/v1/conteneurrectif/deleteMany').post(conteneurRectifController.deleteManyConteneurRectif);

module.exports = router;
