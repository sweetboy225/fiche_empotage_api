/**
 * SectionAppRoutes.js
 * @description :: CRUD API routes for SectionApp
 */

const express = require('express');
const router = express.Router();
const SectionAppController = require('../../../controller/client/v1/SectionAppController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/sectionapp/create').post(SectionAppController.addSectionApp);
router.route('/client/api/v1/sectionapp/addBulk').post(SectionAppController.bulkInsertSectionApp);
router.route('/client/api/v1/sectionapp/list').post(SectionAppController.findAllSectionApp);
router.route('/client/api/v1/sectionapp/count').post(SectionAppController.getSectionAppCount);
router.route('/client/api/v1/sectionapp/:id').get(SectionAppController.getSectionApp);
router.route('/client/api/v1/sectionapp/update/:id').put(SectionAppController.updateSectionApp);    
router.route('/client/api/v1/sectionapp/partial-update/:id').put(SectionAppController.partialUpdateSectionApp);
router.route('/client/api/v1/sectionapp/updateBulk').put(SectionAppController.bulkUpdateSectionApp);
router.route('/client/api/v1/sectionapp/softDelete/:id').put(SectionAppController.softDeleteSectionApp);
router.route('/client/api/v1/sectionapp/softDeleteMany').put(SectionAppController.softDeleteManySectionApp);
router.route('/client/api/v1/sectionapp/delete/:id').delete(SectionAppController.deleteSectionApp);
router.route('/client/api/v1/sectionapp/deleteMany').post(SectionAppController.deleteManySectionApp);

module.exports = router;
