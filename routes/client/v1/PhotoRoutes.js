/**
 * PhotoRoutes.js
 * @description :: CRUD API routes for Photo
 */

const express = require('express');
const router = express.Router();
const PhotoController = require('../../../controller/client/v1/PhotoController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/photo/create').post(auth(PLATFORM.CLIENT),checkRolePermission,PhotoController.addPhoto);
router.route('/client/api/v1/photo/list').post(auth(PLATFORM.CLIENT),checkRolePermission,PhotoController.findAllPhoto);
router.route('/client/api/v1/photo/count').post(auth(PLATFORM.CLIENT),checkRolePermission,PhotoController.getPhotoCount);
router.route('/client/api/v1/photo/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,PhotoController.getPhoto);
router.route('/client/api/v1/photo/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,PhotoController.updatePhoto);    
router.route('/client/api/v1/photo/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,PhotoController.partialUpdatePhoto);
router.route('/client/api/v1/photo/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,PhotoController.softDeletePhoto);
router.route('/client/api/v1/photo/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,PhotoController.softDeleteManyPhoto);
router.route('/client/api/v1/photo/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,PhotoController.bulkInsertPhoto);
router.route('/client/api/v1/photo/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,PhotoController.bulkUpdatePhoto);
router.route('/client/api/v1/photo/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,PhotoController.deletePhoto);
router.route('/client/api/v1/photo/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,PhotoController.deleteManyPhoto);

module.exports = router;
