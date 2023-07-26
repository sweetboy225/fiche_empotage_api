/**
 * NotificationRoutes.js
 * @description :: CRUD API routes for Notification
 */

const express = require('express');
const router = express.Router();
const NotificationController = require('../../../controller/client/v1/NotificationController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/notification/create').post(NotificationController.addNotification);
router.route('/client/api/v1/notification/addBulk').post(NotificationController.bulkInsertNotification);
router.route('/client/api/v1/notification/list').post(NotificationController.findAllNotification);
router.route('/client/api/v1/notification/count').post(NotificationController.getNotificationCount);
router.route('/client/api/v1/notification/:id').get(NotificationController.getNotification);
router.route('/client/api/v1/notification/update/:id').put(NotificationController.updateNotification);    
router.route('/client/api/v1/notification/partial-update/:id').put(NotificationController.partialUpdateNotification);
router.route('/client/api/v1/notification/updateBulk').put(NotificationController.bulkUpdateNotification);
router.route('/client/api/v1/notification/softDelete/:id').put(NotificationController.softDeleteNotification);
router.route('/client/api/v1/notification/softDeleteMany').put(NotificationController.softDeleteManyNotification);
router.route('/client/api/v1/notification/delete/:id').delete(NotificationController.deleteNotification);
router.route('/client/api/v1/notification/deleteMany').post(NotificationController.deleteManyNotification);

module.exports = router;
