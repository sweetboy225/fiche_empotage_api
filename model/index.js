/**
 * index.js
 * @description :: exports all the models and its relationships among other models
 */

const dbConnection = require('../config/dbConnection');
const db = {};
db.sequelize = dbConnection;

db.RoleDouane = require('./RoleDouane');
db.RoleAgentDouane = require('./RoleAgentDouane');
db.Notification = require('./Notification');
db.Rdv = require('./Rdv');
db.Fonction = require('./Fonction');
db.Historique = require('./Historique');
db.ServiceDRH = require('./ServiceDRH');
db.DirectionDRH = require('./DirectionDRH');
db.AgentDRH = require('./AgentDRH');
db.SectionApp = require('./SectionApp');
db.DirectionApp = require('./DirectionApp');
db.Photo = require('./Photo');
db.StatutFiche = require('./StatutFiche');
db.FicheempotageStatut = require('./FicheempotageStatut');
db.conteneurRectif = require('./conteneurRectif');
db.MarchandiseRectif = require('./MarchandiseRectif');
db.Rectif = require('./Rectif');
db.FicheEmpotage = require('./FicheEmpotage');
db.fichierJoint = require('./fichierJoint');
db.OperateurExportateur = require('./OperateurExportateur');
db.OperateurCDA = require('./OperateurCDA');
db.Conteneur = require('./Conteneur');
db.Marchandise = require('./Marchandise');
db.AgentDouaneEmail = require('./AgentDouaneEmail');
db.Agent = require('./Agent');
db.user = require('./user');
db.userAuthSettings = require('./userAuthSettings');
db.userTokens = require('./userTokens');
db.activityLog = require('./activityLog');
db.role = require('./role');
db.projectRoute = require('./projectRoute');
db.routeRole = require('./routeRole');
db.userRole = require('./userRole');

db.RoleDouane.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.RoleDouane, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.RoleDouane.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.RoleDouane, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.RoleAgentDouane.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.RoleAgentDouane, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.RoleAgentDouane.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.RoleAgentDouane, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Notification.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Notification, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Notification.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Notification, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Rdv.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Rdv, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Rdv.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Rdv, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Fonction.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Fonction, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Fonction.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Fonction, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Historique.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Historique, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Historique.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Historique, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.ServiceDRH.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.ServiceDRH, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.ServiceDRH.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.ServiceDRH, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.DirectionDRH.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.DirectionDRH, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.DirectionDRH.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.DirectionDRH, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.AgentDRH.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.AgentDRH, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.AgentDRH.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.AgentDRH, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.SectionApp.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.SectionApp, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.SectionApp.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.SectionApp, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.DirectionApp.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.DirectionApp, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.DirectionApp.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.DirectionApp, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Photo.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Photo, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Photo.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Photo, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.StatutFiche.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.StatutFiche, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.StatutFiche.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.StatutFiche, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.FicheempotageStatut.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.FicheempotageStatut, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.FicheempotageStatut.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.FicheempotageStatut, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.conteneurRectif.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.conteneurRectif, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.conteneurRectif.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.conteneurRectif, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.MarchandiseRectif.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.MarchandiseRectif, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.MarchandiseRectif.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.MarchandiseRectif, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Rectif.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Rectif, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Rectif.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Rectif, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.FicheEmpotage.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.FicheEmpotage, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.FicheEmpotage.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.FicheEmpotage, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.fichierJoint.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.fichierJoint, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.fichierJoint.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.fichierJoint, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.OperateurExportateur.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.OperateurExportateur, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.OperateurExportateur.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.OperateurExportateur, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.OperateurCDA.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.OperateurCDA, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.OperateurCDA.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.OperateurCDA, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Conteneur.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Conteneur, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Conteneur.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Conteneur, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Marchandise.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Marchandise, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Marchandise.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Marchandise, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.AgentDouaneEmail.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.AgentDouaneEmail, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.AgentDouaneEmail.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.AgentDouaneEmail, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Agent.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Agent, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Agent.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Agent, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.user.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.user, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.user.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.user, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.userAuthSettings.belongsTo(db.user, {
  foreignKey: 'userId',
  as: '_userId',
  targetKey: 'id' 
});
db.user.hasMany(db.userAuthSettings, {
  foreignKey: 'userId',
  sourceKey: 'id' 
});
db.userAuthSettings.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.userAuthSettings, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.userAuthSettings.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.userAuthSettings, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.userTokens.belongsTo(db.user, {
  foreignKey: 'userId',
  as: '_userId',
  targetKey: 'id' 
});
db.user.hasMany(db.userTokens, {
  foreignKey: 'userId',
  sourceKey: 'id' 
});
db.userTokens.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.userTokens, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.userTokens.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.userTokens, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.userRole.belongsTo(db.user, {
  foreignKey: 'userId',
  as: '_userId',
  targetKey: 'id' 
});
db.user.hasMany(db.userRole, {
  foreignKey: 'userId',
  sourceKey: 'id' 
});
db.routeRole.belongsTo(db.role, {
  foreignKey: 'roleId',
  as: '_roleId',
  targetKey: 'id' 
});
db.role.hasMany(db.routeRole, {
  foreignKey: 'roleId',
  sourceKey: 'id' 
});
db.userRole.belongsTo(db.role, {
  foreignKey: 'roleId',
  as: '_roleId',
  targetKey: 'id' 
});
db.role.hasMany(db.userRole, {
  foreignKey: 'roleId',
  sourceKey: 'id' 
});
db.routeRole.belongsTo(db.projectRoute, {
  foreignKey: 'routeId',
  as: '_routeId',
  targetKey: 'id' 
});
db.projectRoute.hasMany(db.routeRole, {
  foreignKey: 'routeId',
  sourceKey: 'id' 
});

module.exports = db;