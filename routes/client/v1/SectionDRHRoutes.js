/**
 * SectionDRHRoutes.js
 * @description :: CRUD API routes for SectionDRH
 */

const express = require('express');
const router = express.Router();
const SectionDRHController = require('../../../controller/client/v1/SectionDRHController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/sectiondrh/create').post(auth(PLATFORM.CLIENT),checkRolePermission,SectionDRHController.addSectionDRH);
router.route('/client/api/v1/sectiondrh/list').post(auth(PLATFORM.CLIENT),checkRolePermission,SectionDRHController.findAllSectionDRH);
router.route('/client/api/v1/sectiondrh/count').post(auth(PLATFORM.CLIENT),checkRolePermission,SectionDRHController.getSectionDRHCount);
router.route('/client/api/v1/sectiondrh/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,SectionDRHController.getSectionDRH);
router.route('/client/api/v1/sectiondrh/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,SectionDRHController.updateSectionDRH);    
router.route('/client/api/v1/sectiondrh/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,SectionDRHController.partialUpdateSectionDRH);
router.route('/client/api/v1/sectiondrh/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,SectionDRHController.softDeleteSectionDRH);
router.route('/client/api/v1/sectiondrh/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,SectionDRHController.softDeleteManySectionDRH);
router.route('/client/api/v1/sectiondrh/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,SectionDRHController.bulkInsertSectionDRH);
router.route('/client/api/v1/sectiondrh/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,SectionDRHController.bulkUpdateSectionDRH);
router.route('/client/api/v1/sectiondrh/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,SectionDRHController.deleteSectionDRH);
router.route('/client/api/v1/sectiondrh/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,SectionDRHController.deleteManySectionDRH);

module.exports = router;
