/**
 * SectionAppRoutes.js
 * @description :: CRUD API routes for SectionApp
 */

const express = require('express');
const router = express.Router();
const SectionAppController = require('../../../controller/client/v1/SectionAppController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/sectionapp/create').post(auth(PLATFORM.CLIENT),checkRolePermission,SectionAppController.addSectionApp);
router.route('/client/api/v1/sectionapp/list').post(auth(PLATFORM.CLIENT),checkRolePermission,SectionAppController.findAllSectionApp);
router.route('/client/api/v1/sectionapp/count').post(auth(PLATFORM.CLIENT),checkRolePermission,SectionAppController.getSectionAppCount);
router.route('/client/api/v1/sectionapp/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,SectionAppController.getSectionApp);
router.route('/client/api/v1/sectionapp/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,SectionAppController.updateSectionApp);    
router.route('/client/api/v1/sectionapp/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,SectionAppController.partialUpdateSectionApp);
router.route('/client/api/v1/sectionapp/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,SectionAppController.softDeleteSectionApp);
router.route('/client/api/v1/sectionapp/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,SectionAppController.softDeleteManySectionApp);
router.route('/client/api/v1/sectionapp/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,SectionAppController.bulkInsertSectionApp);
router.route('/client/api/v1/sectionapp/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,SectionAppController.bulkUpdateSectionApp);
router.route('/client/api/v1/sectionapp/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,SectionAppController.deleteSectionApp);
router.route('/client/api/v1/sectionapp/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,SectionAppController.deleteManySectionApp);

module.exports = router;
