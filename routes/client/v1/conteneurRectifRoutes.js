/**
 * conteneurRectifRoutes.js
 * @description :: CRUD API routes for conteneurRectif
 */

const express = require('express');
const router = express.Router();
const conteneurRectifController = require('../../../controller/client/v1/conteneurRectifController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/conteneurrectif/create').post(auth(PLATFORM.CLIENT),checkRolePermission,conteneurRectifController.addConteneurRectif);
router.route('/client/api/v1/conteneurrectif/list').post(auth(PLATFORM.CLIENT),checkRolePermission,conteneurRectifController.findAllConteneurRectif);
router.route('/client/api/v1/conteneurrectif/count').post(auth(PLATFORM.CLIENT),checkRolePermission,conteneurRectifController.getConteneurRectifCount);
router.route('/client/api/v1/conteneurrectif/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,conteneurRectifController.getConteneurRectif);
router.route('/client/api/v1/conteneurrectif/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,conteneurRectifController.updateConteneurRectif);    
router.route('/client/api/v1/conteneurrectif/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,conteneurRectifController.partialUpdateConteneurRectif);
router.route('/client/api/v1/conteneurrectif/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,conteneurRectifController.softDeleteConteneurRectif);
router.route('/client/api/v1/conteneurrectif/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,conteneurRectifController.softDeleteManyConteneurRectif);
router.route('/client/api/v1/conteneurrectif/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,conteneurRectifController.bulkInsertConteneurRectif);
router.route('/client/api/v1/conteneurrectif/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,conteneurRectifController.bulkUpdateConteneurRectif);
router.route('/client/api/v1/conteneurrectif/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,conteneurRectifController.deleteConteneurRectif);
router.route('/client/api/v1/conteneurrectif/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,conteneurRectifController.deleteManyConteneurRectif);

module.exports = router;
