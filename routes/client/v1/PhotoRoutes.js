/**
 * PhotoRoutes.js
 * @description :: CRUD API routes for Photo
 */

const express = require('express');
const router = express.Router();
const PhotoController = require('../../../controller/client/v1/PhotoController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/photo/create').post(PhotoController.addPhoto);
router.route('/client/api/v1/photo/addBulk').post(PhotoController.bulkInsertPhoto);
router.route('/client/api/v1/photo/list').post(PhotoController.findAllPhoto);
router.route('/client/api/v1/photo/count').post(PhotoController.getPhotoCount);
router.route('/client/api/v1/photo/:id').get(PhotoController.getPhoto);
router.route('/client/api/v1/photo/update/:id').put(PhotoController.updatePhoto);    
router.route('/client/api/v1/photo/partial-update/:id').put(PhotoController.partialUpdatePhoto);
router.route('/client/api/v1/photo/updateBulk').put(PhotoController.bulkUpdatePhoto);
router.route('/client/api/v1/photo/softDelete/:id').put(PhotoController.softDeletePhoto);
router.route('/client/api/v1/photo/softDeleteMany').put(PhotoController.softDeleteManyPhoto);
router.route('/client/api/v1/photo/delete/:id').delete(PhotoController.deletePhoto);
router.route('/client/api/v1/photo/deleteMany').post(PhotoController.deleteManyPhoto);

module.exports = router;
