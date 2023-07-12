/**
 * index route file of client platform.
 * @description: exports all routes of client platform.
 */
const express =  require('express');
const router =  express.Router();
router.use('/client/auth',require('./auth'));
router.use(require('./RoleDouaneRoutes'));
router.use(require('./RoleAgentDouaneRoutes'));
router.use(require('./NotificationRoutes'));
router.use(require('./RdvRoutes'));
router.use(require('./FonctionRoutes'));
router.use(require('./HistoriqueRoutes'));
router.use(require('./ServiceDRHRoutes'));
router.use(require('./DirectionDRHRoutes'));
router.use(require('./AgentDRHRoutes'));
router.use(require('./SectionAppRoutes'));
router.use(require('./DirectionAppRoutes'));
router.use(require('./PhotoRoutes'));
router.use(require('./StatutFicheRoutes'));
router.use(require('./FicheempotageStatutRoutes'));
router.use(require('./conteneurRectifRoutes'));
router.use(require('./MarchandiseRectifRoutes'));
router.use(require('./RectifRoutes'));
router.use(require('./FicheEmpotageRoutes'));
router.use(require('./fichierJointRoutes'));
router.use(require('./OperateurExportateurRoutes'));
router.use(require('./OperateurCDARoutes'));
router.use(require('./ConteneurRoutes'));
router.use(require('./MarchandiseRoutes'));
router.use(require('./AgentDouaneEmailRoutes'));
router.use(require('./AgentRoutes'));
router.use(require('./userRoutes'));
router.use(require('./roleRoutes'));
router.use(require('./projectRouteRoutes'));
router.use(require('./routeRoleRoutes'));
router.use(require('./userRoleRoutes'));
router.use(require('./uploadRoutes'));

module.exports = router;
