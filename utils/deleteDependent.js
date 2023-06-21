/**
 * deleteDependent.js
 * @description :: exports deleteDependent service for project.
 */

let RoleDouane = require('../model/RoleDouane');
let RoleAgentDouane = require('../model/RoleAgentDouane');
let Notification = require('../model/Notification');
let Rdv = require('../model/Rdv');
let Fonction = require('../model/Fonction');
let Historique = require('../model/Historique');
let SectionDRH = require('../model/SectionDRH');
let DirectionDRH = require('../model/DirectionDRH');
let AgentDRH = require('../model/AgentDRH');
let SectionApp = require('../model/SectionApp');
let DirectionApp = require('../model/DirectionApp');
let Photo = require('../model/Photo');
let StatutFiche = require('../model/StatutFiche');
let FicheempotageStatut = require('../model/FicheempotageStatut');
let ConteneurRectif = require('../model/conteneurRectif');
let MarchandiseRectif = require('../model/MarchandiseRectif');
let Rectif = require('../model/Rectif');
let FicheEmpotage = require('../model/FicheEmpotage');
let FichierJoint = require('../model/fichierJoint');
let OperateurExportateur = require('../model/OperateurExportateur');
let OperateurCDA = require('../model/OperateurCDA');
let Conteneur = require('../model/Conteneur');
let Marchandise = require('../model/Marchandise');
let AgentDouaneEmail = require('../model/AgentDouaneEmail');
let Agent = require('../model/Agent');
let User = require('../model/user');
let UserAuthSettings = require('../model/userAuthSettings');
let UserTokens = require('../model/userTokens');
let ActivityLog = require('../model/activityLog');
let Role = require('../model/role');
let ProjectRoute = require('../model/projectRoute');
let RouteRole = require('../model/routeRole');
let UserRole = require('../model/userRole');
let dbService = require('.//dbService');

const deleteRoleDouane = async (filter) =>{
  try {
    let response  = await dbService.destroy(RoleDouane,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRoleAgentDouane = async (filter) =>{
  try {
    let response  = await dbService.destroy(RoleAgentDouane,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteNotification = async (filter) =>{
  try {
    let response  = await dbService.destroy(Notification,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRdv = async (filter) =>{
  try {
    let response  = await dbService.destroy(Rdv,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteFonction = async (filter) =>{
  try {
    let response  = await dbService.destroy(Fonction,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteHistorique = async (filter) =>{
  try {
    let response  = await dbService.destroy(Historique,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteSectionDRH = async (filter) =>{
  try {
    let response  = await dbService.destroy(SectionDRH,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteDirectionDRH = async (filter) =>{
  try {
    let response  = await dbService.destroy(DirectionDRH,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteAgentDRH = async (filter) =>{
  try {
    let response  = await dbService.destroy(AgentDRH,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteSectionApp = async (filter) =>{
  try {
    let response  = await dbService.destroy(SectionApp,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteDirectionApp = async (filter) =>{
  try {
    let response  = await dbService.destroy(DirectionApp,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deletePhoto = async (filter) =>{
  try {
    let response  = await dbService.destroy(Photo,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteStatutFiche = async (filter) =>{
  try {
    let response  = await dbService.destroy(StatutFiche,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteFicheempotageStatut = async (filter) =>{
  try {
    let response  = await dbService.destroy(FicheempotageStatut,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteConteneurRectif = async (filter) =>{
  try {
    let response  = await dbService.destroy(ConteneurRectif,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteMarchandiseRectif = async (filter) =>{
  try {
    let response  = await dbService.destroy(MarchandiseRectif,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRectif = async (filter) =>{
  try {
    let response  = await dbService.destroy(Rectif,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteFicheEmpotage = async (filter) =>{
  try {
    let response  = await dbService.destroy(FicheEmpotage,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteFichierJoint = async (filter) =>{
  try {
    let response  = await dbService.destroy(FichierJoint,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteOperateurExportateur = async (filter) =>{
  try {
    let response  = await dbService.destroy(OperateurExportateur,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteOperateurCDA = async (filter) =>{
  try {
    let response  = await dbService.destroy(OperateurCDA,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteConteneur = async (filter) =>{
  try {
    let response  = await dbService.destroy(Conteneur,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteMarchandise = async (filter) =>{
  try {
    let response  = await dbService.destroy(Marchandise,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteAgentDouaneEmail = async (filter) =>{
  try {
    let response  = await dbService.destroy(AgentDouaneEmail,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteAgent = async (filter) =>{
  try {
    let response  = await dbService.destroy(Agent,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUser = async (filter) =>{
  try {
    let user = await dbService.findAll(User,filter);
    if (user && user.length){
      user = user.map((obj) => obj.id);

      const RoleDouaneFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const RoleDouaneCnt = await dbService.destroy(RoleDouane,RoleDouaneFilter);

      const RoleAgentDouaneFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const RoleAgentDouaneCnt = await dbService.destroy(RoleAgentDouane,RoleAgentDouaneFilter);

      const NotificationFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const NotificationCnt = await dbService.destroy(Notification,NotificationFilter);

      const RdvFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const RdvCnt = await dbService.destroy(Rdv,RdvFilter);

      const FonctionFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const FonctionCnt = await dbService.destroy(Fonction,FonctionFilter);

      const HistoriqueFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const HistoriqueCnt = await dbService.destroy(Historique,HistoriqueFilter);

      const SectionDRHFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const SectionDRHCnt = await dbService.destroy(SectionDRH,SectionDRHFilter);

      const DirectionDRHFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const DirectionDRHCnt = await dbService.destroy(DirectionDRH,DirectionDRHFilter);

      const AgentDRHFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const AgentDRHCnt = await dbService.destroy(AgentDRH,AgentDRHFilter);

      const SectionAppFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const SectionAppCnt = await dbService.destroy(SectionApp,SectionAppFilter);

      const DirectionAppFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const DirectionAppCnt = await dbService.destroy(DirectionApp,DirectionAppFilter);

      const PhotoFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const PhotoCnt = await dbService.destroy(Photo,PhotoFilter);

      const StatutFicheFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const StatutFicheCnt = await dbService.destroy(StatutFiche,StatutFicheFilter);

      const FicheempotageStatutFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const FicheempotageStatutCnt = await dbService.destroy(FicheempotageStatut,FicheempotageStatutFilter);

      const conteneurRectifFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const conteneurRectifCnt = await dbService.destroy(ConteneurRectif,conteneurRectifFilter);

      const MarchandiseRectifFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const MarchandiseRectifCnt = await dbService.destroy(MarchandiseRectif,MarchandiseRectifFilter);

      const RectifFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const RectifCnt = await dbService.destroy(Rectif,RectifFilter);

      const FicheEmpotageFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const FicheEmpotageCnt = await dbService.destroy(FicheEmpotage,FicheEmpotageFilter);

      const fichierJointFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const fichierJointCnt = await dbService.destroy(FichierJoint,fichierJointFilter);

      const OperateurExportateurFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const OperateurExportateurCnt = await dbService.destroy(OperateurExportateur,OperateurExportateurFilter);

      const OperateurCDAFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const OperateurCDACnt = await dbService.destroy(OperateurCDA,OperateurCDAFilter);

      const ConteneurFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const ConteneurCnt = await dbService.destroy(Conteneur,ConteneurFilter);

      const MarchandiseFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const MarchandiseCnt = await dbService.destroy(Marchandise,MarchandiseFilter);

      const AgentDouaneEmailFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const AgentDouaneEmailCnt = await dbService.destroy(AgentDouaneEmail,AgentDouaneEmailFilter);

      const AgentFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const AgentCnt = await dbService.destroy(Agent,AgentFilter);

      const userFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const userCnt = await dbService.destroy(User,userFilter);

      const userAuthSettingsFilter = { $or: [{ userId : { $in : user } },{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const userAuthSettingsCnt = await dbService.destroy(UserAuthSettings,userAuthSettingsFilter);

      const userTokensFilter = { $or: [{ userId : { $in : user } },{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const userTokensCnt = await dbService.destroy(UserTokens,userTokensFilter);

      const userRoleFilter = { $or: [{ userId : { $in : user } }] };
      const userRoleCnt = await dbService.destroy(UserRole,userRoleFilter);

      let deleted  = await dbService.destroy(User,filter);
      let response = {
        RoleDouane :RoleDouaneCnt.length,
        RoleAgentDouane :RoleAgentDouaneCnt.length,
        Notification :NotificationCnt.length,
        Rdv :RdvCnt.length,
        Fonction :FonctionCnt.length,
        Historique :HistoriqueCnt.length,
        SectionDRH :SectionDRHCnt.length,
        DirectionDRH :DirectionDRHCnt.length,
        AgentDRH :AgentDRHCnt.length,
        SectionApp :SectionAppCnt.length,
        DirectionApp :DirectionAppCnt.length,
        Photo :PhotoCnt.length,
        StatutFiche :StatutFicheCnt.length,
        FicheempotageStatut :FicheempotageStatutCnt.length,
        conteneurRectif :conteneurRectifCnt.length,
        MarchandiseRectif :MarchandiseRectifCnt.length,
        Rectif :RectifCnt.length,
        FicheEmpotage :FicheEmpotageCnt.length,
        fichierJoint :fichierJointCnt.length,
        OperateurExportateur :OperateurExportateurCnt.length,
        OperateurCDA :OperateurCDACnt.length,
        Conteneur :ConteneurCnt.length,
        Marchandise :MarchandiseCnt.length,
        AgentDouaneEmail :AgentDouaneEmailCnt.length,
        Agent :AgentCnt.length,
        user :userCnt.length + deleted.length,
        userAuthSettings :userAuthSettingsCnt.length,
        userTokens :userTokensCnt.length,
        userRole :userRoleCnt.length,
      };
      return response; 
    } else {
      return {  user : 0 };
    }

  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserAuthSettings = async (filter) =>{
  try {
    let response  = await dbService.destroy(UserAuthSettings,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserTokens = async (filter) =>{
  try {
    let response  = await dbService.destroy(UserTokens,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteActivityLog = async (filter) =>{
  try {
    let response  = await dbService.destroy(ActivityLog,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRole = async (filter) =>{
  try {
    let role = await dbService.findAll(Role,filter);
    if (role && role.length){
      role = role.map((obj) => obj.id);

      const routeRoleFilter = { $or: [{ roleId : { $in : role } }] };
      const routeRoleCnt = await dbService.destroy(RouteRole,routeRoleFilter);

      const userRoleFilter = { $or: [{ roleId : { $in : role } }] };
      const userRoleCnt = await dbService.destroy(UserRole,userRoleFilter);

      let deleted  = await dbService.destroy(Role,filter);
      let response = {
        routeRole :routeRoleCnt.length,
        userRole :userRoleCnt.length,
      };
      return response; 
    } else {
      return {  role : 0 };
    }

  } catch (error){
    throw new Error(error.message);
  }
};

const deleteProjectRoute = async (filter) =>{
  try {
    let projectroute = await dbService.findAll(ProjectRoute,filter);
    if (projectroute && projectroute.length){
      projectroute = projectroute.map((obj) => obj.id);

      const routeRoleFilter = { $or: [{ routeId : { $in : projectroute } }] };
      const routeRoleCnt = await dbService.destroy(RouteRole,routeRoleFilter);

      let deleted  = await dbService.destroy(ProjectRoute,filter);
      let response = { routeRole :routeRoleCnt.length, };
      return response; 
    } else {
      return {  projectroute : 0 };
    }

  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRouteRole = async (filter) =>{
  try {
    let response  = await dbService.destroy(RouteRole,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserRole = async (filter) =>{
  try {
    let response  = await dbService.destroy(UserRole,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const countRoleDouane = async (filter) =>{
  try {
    const RoleDouaneCnt =  await dbService.count(RoleDouane,filter);
    return { RoleDouane : RoleDouaneCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countRoleAgentDouane = async (filter) =>{
  try {
    const RoleAgentDouaneCnt =  await dbService.count(RoleAgentDouane,filter);
    return { RoleAgentDouane : RoleAgentDouaneCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countNotification = async (filter) =>{
  try {
    const NotificationCnt =  await dbService.count(Notification,filter);
    return { Notification : NotificationCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countRdv = async (filter) =>{
  try {
    const RdvCnt =  await dbService.count(Rdv,filter);
    return { Rdv : RdvCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countFonction = async (filter) =>{
  try {
    const FonctionCnt =  await dbService.count(Fonction,filter);
    return { Fonction : FonctionCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countHistorique = async (filter) =>{
  try {
    const HistoriqueCnt =  await dbService.count(Historique,filter);
    return { Historique : HistoriqueCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countSectionDRH = async (filter) =>{
  try {
    const SectionDRHCnt =  await dbService.count(SectionDRH,filter);
    return { SectionDRH : SectionDRHCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countDirectionDRH = async (filter) =>{
  try {
    const DirectionDRHCnt =  await dbService.count(DirectionDRH,filter);
    return { DirectionDRH : DirectionDRHCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countAgentDRH = async (filter) =>{
  try {
    const AgentDRHCnt =  await dbService.count(AgentDRH,filter);
    return { AgentDRH : AgentDRHCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countSectionApp = async (filter) =>{
  try {
    const SectionAppCnt =  await dbService.count(SectionApp,filter);
    return { SectionApp : SectionAppCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countDirectionApp = async (filter) =>{
  try {
    const DirectionAppCnt =  await dbService.count(DirectionApp,filter);
    return { DirectionApp : DirectionAppCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countPhoto = async (filter) =>{
  try {
    const PhotoCnt =  await dbService.count(Photo,filter);
    return { Photo : PhotoCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countStatutFiche = async (filter) =>{
  try {
    const StatutFicheCnt =  await dbService.count(StatutFiche,filter);
    return { StatutFiche : StatutFicheCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countFicheempotageStatut = async (filter) =>{
  try {
    const FicheempotageStatutCnt =  await dbService.count(FicheempotageStatut,filter);
    return { FicheempotageStatut : FicheempotageStatutCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countConteneurRectif = async (filter) =>{
  try {
    const conteneurRectifCnt =  await dbService.count(ConteneurRectif,filter);
    return { conteneurRectif : conteneurRectifCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countMarchandiseRectif = async (filter) =>{
  try {
    const MarchandiseRectifCnt =  await dbService.count(MarchandiseRectif,filter);
    return { MarchandiseRectif : MarchandiseRectifCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countRectif = async (filter) =>{
  try {
    const RectifCnt =  await dbService.count(Rectif,filter);
    return { Rectif : RectifCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countFicheEmpotage = async (filter) =>{
  try {
    const FicheEmpotageCnt =  await dbService.count(FicheEmpotage,filter);
    return { FicheEmpotage : FicheEmpotageCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countFichierJoint = async (filter) =>{
  try {
    const fichierJointCnt =  await dbService.count(FichierJoint,filter);
    return { fichierJoint : fichierJointCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countOperateurExportateur = async (filter) =>{
  try {
    const OperateurExportateurCnt =  await dbService.count(OperateurExportateur,filter);
    return { OperateurExportateur : OperateurExportateurCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countOperateurCDA = async (filter) =>{
  try {
    const OperateurCDACnt =  await dbService.count(OperateurCDA,filter);
    return { OperateurCDA : OperateurCDACnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countConteneur = async (filter) =>{
  try {
    const ConteneurCnt =  await dbService.count(Conteneur,filter);
    return { Conteneur : ConteneurCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countMarchandise = async (filter) =>{
  try {
    const MarchandiseCnt =  await dbService.count(Marchandise,filter);
    return { Marchandise : MarchandiseCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countAgentDouaneEmail = async (filter) =>{
  try {
    const AgentDouaneEmailCnt =  await dbService.count(AgentDouaneEmail,filter);
    return { AgentDouaneEmail : AgentDouaneEmailCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countAgent = async (filter) =>{
  try {
    const AgentCnt =  await dbService.count(Agent,filter);
    return { Agent : AgentCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUser = async (filter) =>{
  try {
    let user = await dbService.findAll(User,filter);
    if (user && user.length){
      user = user.map((obj) => obj.id);

      const RoleDouaneFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const RoleDouaneCnt =  await dbService.count(RoleDouane,RoleDouaneFilter);

      const RoleAgentDouaneFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const RoleAgentDouaneCnt =  await dbService.count(RoleAgentDouane,RoleAgentDouaneFilter);

      const NotificationFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const NotificationCnt =  await dbService.count(Notification,NotificationFilter);

      const RdvFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const RdvCnt =  await dbService.count(Rdv,RdvFilter);

      const FonctionFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const FonctionCnt =  await dbService.count(Fonction,FonctionFilter);

      const HistoriqueFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const HistoriqueCnt =  await dbService.count(Historique,HistoriqueFilter);

      const SectionDRHFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const SectionDRHCnt =  await dbService.count(SectionDRH,SectionDRHFilter);

      const DirectionDRHFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const DirectionDRHCnt =  await dbService.count(DirectionDRH,DirectionDRHFilter);

      const AgentDRHFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const AgentDRHCnt =  await dbService.count(AgentDRH,AgentDRHFilter);

      const SectionAppFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const SectionAppCnt =  await dbService.count(SectionApp,SectionAppFilter);

      const DirectionAppFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const DirectionAppCnt =  await dbService.count(DirectionApp,DirectionAppFilter);

      const PhotoFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const PhotoCnt =  await dbService.count(Photo,PhotoFilter);

      const StatutFicheFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const StatutFicheCnt =  await dbService.count(StatutFiche,StatutFicheFilter);

      const FicheempotageStatutFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const FicheempotageStatutCnt =  await dbService.count(FicheempotageStatut,FicheempotageStatutFilter);

      const conteneurRectifFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const conteneurRectifCnt =  await dbService.count(ConteneurRectif,conteneurRectifFilter);

      const MarchandiseRectifFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const MarchandiseRectifCnt =  await dbService.count(MarchandiseRectif,MarchandiseRectifFilter);

      const RectifFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const RectifCnt =  await dbService.count(Rectif,RectifFilter);

      const FicheEmpotageFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const FicheEmpotageCnt =  await dbService.count(FicheEmpotage,FicheEmpotageFilter);

      const fichierJointFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const fichierJointCnt =  await dbService.count(FichierJoint,fichierJointFilter);

      const OperateurExportateurFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const OperateurExportateurCnt =  await dbService.count(OperateurExportateur,OperateurExportateurFilter);

      const OperateurCDAFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const OperateurCDACnt =  await dbService.count(OperateurCDA,OperateurCDAFilter);

      const ConteneurFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const ConteneurCnt =  await dbService.count(Conteneur,ConteneurFilter);

      const MarchandiseFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const MarchandiseCnt =  await dbService.count(Marchandise,MarchandiseFilter);

      const AgentDouaneEmailFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const AgentDouaneEmailCnt =  await dbService.count(AgentDouaneEmail,AgentDouaneEmailFilter);

      const AgentFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const AgentCnt =  await dbService.count(Agent,AgentFilter);

      const userFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const userCnt =  await dbService.count(User,userFilter);

      const userAuthSettingsFilter = { $or: [{ userId : { $in : user } },{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const userAuthSettingsCnt =  await dbService.count(UserAuthSettings,userAuthSettingsFilter);

      const userTokensFilter = { $or: [{ userId : { $in : user } },{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const userTokensCnt =  await dbService.count(UserTokens,userTokensFilter);

      const userRoleFilter = { $or: [{ userId : { $in : user } }] };
      const userRoleCnt =  await dbService.count(UserRole,userRoleFilter);

      let response = {
        RoleDouane : RoleDouaneCnt,
        RoleAgentDouane : RoleAgentDouaneCnt,
        Notification : NotificationCnt,
        Rdv : RdvCnt,
        Fonction : FonctionCnt,
        Historique : HistoriqueCnt,
        SectionDRH : SectionDRHCnt,
        DirectionDRH : DirectionDRHCnt,
        AgentDRH : AgentDRHCnt,
        SectionApp : SectionAppCnt,
        DirectionApp : DirectionAppCnt,
        Photo : PhotoCnt,
        StatutFiche : StatutFicheCnt,
        FicheempotageStatut : FicheempotageStatutCnt,
        conteneurRectif : conteneurRectifCnt,
        MarchandiseRectif : MarchandiseRectifCnt,
        Rectif : RectifCnt,
        FicheEmpotage : FicheEmpotageCnt,
        fichierJoint : fichierJointCnt,
        OperateurExportateur : OperateurExportateurCnt,
        OperateurCDA : OperateurCDACnt,
        Conteneur : ConteneurCnt,
        Marchandise : MarchandiseCnt,
        AgentDouaneEmail : AgentDouaneEmailCnt,
        Agent : AgentCnt,
        user : userCnt,
        userAuthSettings : userAuthSettingsCnt,
        userTokens : userTokensCnt,
        userRole : userRoleCnt,
      };
      return response; 
    } else {
      return {  user : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserAuthSettings = async (filter) =>{
  try {
    const userAuthSettingsCnt =  await dbService.count(UserAuthSettings,filter);
    return { userAuthSettings : userAuthSettingsCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserTokens = async (filter) =>{
  try {
    const userTokensCnt =  await dbService.count(UserTokens,filter);
    return { userTokens : userTokensCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countActivityLog = async (filter) =>{
  try {
    const activityLogCnt =  await dbService.count(ActivityLog,filter);
    return { activityLog : activityLogCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countRole = async (filter) =>{
  try {
    let role = await dbService.findAll(Role,filter);
    if (role && role.length){
      role = role.map((obj) => obj.id);

      const routeRoleFilter = { $or: [{ roleId : { $in : role } }] };
      const routeRoleCnt =  await dbService.count(RouteRole,routeRoleFilter);

      const userRoleFilter = { $or: [{ roleId : { $in : role } }] };
      const userRoleCnt =  await dbService.count(UserRole,userRoleFilter);

      let response = {
        routeRole : routeRoleCnt,
        userRole : userRoleCnt,
      };
      return response; 
    } else {
      return {  role : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countProjectRoute = async (filter) =>{
  try {
    let projectroute = await dbService.findAll(ProjectRoute,filter);
    if (projectroute && projectroute.length){
      projectroute = projectroute.map((obj) => obj.id);

      const routeRoleFilter = { $or: [{ routeId : { $in : projectroute } }] };
      const routeRoleCnt =  await dbService.count(RouteRole,routeRoleFilter);

      let response = { routeRole : routeRoleCnt, };
      return response; 
    } else {
      return {  projectroute : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countRouteRole = async (filter) =>{
  try {
    const routeRoleCnt =  await dbService.count(RouteRole,filter);
    return { routeRole : routeRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserRole = async (filter) =>{
  try {
    const userRoleCnt =  await dbService.count(UserRole,filter);
    return { userRole : userRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRoleDouane = async (filter,updateBody) =>{  
  try {
    const RoleDouaneCnt =  await dbService.update(RoleDouane,filter);
    return { RoleDouane : RoleDouaneCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRoleAgentDouane = async (filter,updateBody) =>{  
  try {
    const RoleAgentDouaneCnt =  await dbService.update(RoleAgentDouane,filter);
    return { RoleAgentDouane : RoleAgentDouaneCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteNotification = async (filter,updateBody) =>{  
  try {
    const NotificationCnt =  await dbService.update(Notification,filter);
    return { Notification : NotificationCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRdv = async (filter,updateBody) =>{  
  try {
    const RdvCnt =  await dbService.update(Rdv,filter);
    return { Rdv : RdvCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteFonction = async (filter,updateBody) =>{  
  try {
    const FonctionCnt =  await dbService.update(Fonction,filter);
    return { Fonction : FonctionCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteHistorique = async (filter,updateBody) =>{  
  try {
    const HistoriqueCnt =  await dbService.update(Historique,filter);
    return { Historique : HistoriqueCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteSectionDRH = async (filter,updateBody) =>{  
  try {
    const SectionDRHCnt =  await dbService.update(SectionDRH,filter);
    return { SectionDRH : SectionDRHCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteDirectionDRH = async (filter,updateBody) =>{  
  try {
    const DirectionDRHCnt =  await dbService.update(DirectionDRH,filter);
    return { DirectionDRH : DirectionDRHCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteAgentDRH = async (filter,updateBody) =>{  
  try {
    const AgentDRHCnt =  await dbService.update(AgentDRH,filter);
    return { AgentDRH : AgentDRHCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteSectionApp = async (filter,updateBody) =>{  
  try {
    const SectionAppCnt =  await dbService.update(SectionApp,filter);
    return { SectionApp : SectionAppCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteDirectionApp = async (filter,updateBody) =>{  
  try {
    const DirectionAppCnt =  await dbService.update(DirectionApp,filter);
    return { DirectionApp : DirectionAppCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeletePhoto = async (filter,updateBody) =>{  
  try {
    const PhotoCnt =  await dbService.update(Photo,filter);
    return { Photo : PhotoCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteStatutFiche = async (filter,updateBody) =>{  
  try {
    const StatutFicheCnt =  await dbService.update(StatutFiche,filter);
    return { StatutFiche : StatutFicheCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteFicheempotageStatut = async (filter,updateBody) =>{  
  try {
    const FicheempotageStatutCnt =  await dbService.update(FicheempotageStatut,filter);
    return { FicheempotageStatut : FicheempotageStatutCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteConteneurRectif = async (filter,updateBody) =>{  
  try {
    const conteneurRectifCnt =  await dbService.update(ConteneurRectif,filter);
    return { conteneurRectif : conteneurRectifCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteMarchandiseRectif = async (filter,updateBody) =>{  
  try {
    const MarchandiseRectifCnt =  await dbService.update(MarchandiseRectif,filter);
    return { MarchandiseRectif : MarchandiseRectifCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRectif = async (filter,updateBody) =>{  
  try {
    const RectifCnt =  await dbService.update(Rectif,filter);
    return { Rectif : RectifCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteFicheEmpotage = async (filter,updateBody) =>{  
  try {
    const FicheEmpotageCnt =  await dbService.update(FicheEmpotage,filter);
    return { FicheEmpotage : FicheEmpotageCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteFichierJoint = async (filter,updateBody) =>{  
  try {
    const fichierJointCnt =  await dbService.update(FichierJoint,filter);
    return { fichierJoint : fichierJointCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteOperateurExportateur = async (filter,updateBody) =>{  
  try {
    const OperateurExportateurCnt =  await dbService.update(OperateurExportateur,filter);
    return { OperateurExportateur : OperateurExportateurCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteOperateurCDA = async (filter,updateBody) =>{  
  try {
    const OperateurCDACnt =  await dbService.update(OperateurCDA,filter);
    return { OperateurCDA : OperateurCDACnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteConteneur = async (filter,updateBody) =>{  
  try {
    const ConteneurCnt =  await dbService.update(Conteneur,filter);
    return { Conteneur : ConteneurCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteMarchandise = async (filter,updateBody) =>{  
  try {
    const MarchandiseCnt =  await dbService.update(Marchandise,filter);
    return { Marchandise : MarchandiseCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteAgentDouaneEmail = async (filter,updateBody) =>{  
  try {
    const AgentDouaneEmailCnt =  await dbService.update(AgentDouaneEmail,filter);
    return { AgentDouaneEmail : AgentDouaneEmailCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteAgent = async (filter,updateBody) =>{  
  try {
    const AgentCnt =  await dbService.update(Agent,filter);
    return { Agent : AgentCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUser = async (filter,updateBody) =>{  
  try {
    let user = await dbService.findAll(User,filter, { id:1 });
    if (user.length){
      user = user.map((obj) => obj.id);

      const RoleDouaneFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const RoleDouaneCnt = await dbService.update(RoleDouane,RoleDouaneFilter,updateBody);

      const RoleAgentDouaneFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const RoleAgentDouaneCnt = await dbService.update(RoleAgentDouane,RoleAgentDouaneFilter,updateBody);

      const NotificationFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const NotificationCnt = await dbService.update(Notification,NotificationFilter,updateBody);

      const RdvFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const RdvCnt = await dbService.update(Rdv,RdvFilter,updateBody);

      const FonctionFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const FonctionCnt = await dbService.update(Fonction,FonctionFilter,updateBody);

      const HistoriqueFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const HistoriqueCnt = await dbService.update(Historique,HistoriqueFilter,updateBody);

      const SectionDRHFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const SectionDRHCnt = await dbService.update(SectionDRH,SectionDRHFilter,updateBody);

      const DirectionDRHFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const DirectionDRHCnt = await dbService.update(DirectionDRH,DirectionDRHFilter,updateBody);

      const AgentDRHFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const AgentDRHCnt = await dbService.update(AgentDRH,AgentDRHFilter,updateBody);

      const SectionAppFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const SectionAppCnt = await dbService.update(SectionApp,SectionAppFilter,updateBody);

      const DirectionAppFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const DirectionAppCnt = await dbService.update(DirectionApp,DirectionAppFilter,updateBody);

      const PhotoFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const PhotoCnt = await dbService.update(Photo,PhotoFilter,updateBody);

      const StatutFicheFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const StatutFicheCnt = await dbService.update(StatutFiche,StatutFicheFilter,updateBody);

      const FicheempotageStatutFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const FicheempotageStatutCnt = await dbService.update(FicheempotageStatut,FicheempotageStatutFilter,updateBody);

      const conteneurRectifFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const conteneurRectifCnt = await dbService.update(ConteneurRectif,conteneurRectifFilter,updateBody);

      const MarchandiseRectifFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const MarchandiseRectifCnt = await dbService.update(MarchandiseRectif,MarchandiseRectifFilter,updateBody);

      const RectifFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const RectifCnt = await dbService.update(Rectif,RectifFilter,updateBody);

      const FicheEmpotageFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const FicheEmpotageCnt = await dbService.update(FicheEmpotage,FicheEmpotageFilter,updateBody);

      const fichierJointFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const fichierJointCnt = await dbService.update(FichierJoint,fichierJointFilter,updateBody);

      const OperateurExportateurFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const OperateurExportateurCnt = await dbService.update(OperateurExportateur,OperateurExportateurFilter,updateBody);

      const OperateurCDAFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const OperateurCDACnt = await dbService.update(OperateurCDA,OperateurCDAFilter,updateBody);

      const ConteneurFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const ConteneurCnt = await dbService.update(Conteneur,ConteneurFilter,updateBody);

      const MarchandiseFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const MarchandiseCnt = await dbService.update(Marchandise,MarchandiseFilter,updateBody);

      const AgentDouaneEmailFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const AgentDouaneEmailCnt = await dbService.update(AgentDouaneEmail,AgentDouaneEmailFilter,updateBody);

      const AgentFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const AgentCnt = await dbService.update(Agent,AgentFilter,updateBody);

      const userFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const userCnt = await dbService.update(User,userFilter,updateBody);

      const userAuthSettingsFilter = { '$or': [{ userId : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const userAuthSettingsCnt = await dbService.update(UserAuthSettings,userAuthSettingsFilter,updateBody);

      const userTokensFilter = { '$or': [{ userId : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const userTokensCnt = await dbService.update(UserTokens,userTokensFilter,updateBody);

      const userRoleFilter = { '$or': [{ userId : { '$in' : user } }] };
      const userRoleCnt = await dbService.update(UserRole,userRoleFilter,updateBody);
      let updated = await dbService.update(User,filter,updateBody);

      let response = {
        RoleDouane :RoleDouaneCnt.length,
        RoleAgentDouane :RoleAgentDouaneCnt.length,
        Notification :NotificationCnt.length,
        Rdv :RdvCnt.length,
        Fonction :FonctionCnt.length,
        Historique :HistoriqueCnt.length,
        SectionDRH :SectionDRHCnt.length,
        DirectionDRH :DirectionDRHCnt.length,
        AgentDRH :AgentDRHCnt.length,
        SectionApp :SectionAppCnt.length,
        DirectionApp :DirectionAppCnt.length,
        Photo :PhotoCnt.length,
        StatutFiche :StatutFicheCnt.length,
        FicheempotageStatut :FicheempotageStatutCnt.length,
        conteneurRectif :conteneurRectifCnt.length,
        MarchandiseRectif :MarchandiseRectifCnt.length,
        Rectif :RectifCnt.length,
        FicheEmpotage :FicheEmpotageCnt.length,
        fichierJoint :fichierJointCnt.length,
        OperateurExportateur :OperateurExportateurCnt.length,
        OperateurCDA :OperateurCDACnt.length,
        Conteneur :ConteneurCnt.length,
        Marchandise :MarchandiseCnt.length,
        AgentDouaneEmail :AgentDouaneEmailCnt.length,
        Agent :AgentCnt.length,
        user :userCnt.length + updated.length,
        userAuthSettings :userAuthSettingsCnt.length,
        userTokens :userTokensCnt.length,
        userRole :userRoleCnt.length,
      };
      return response;
    } else {
      return {  user : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserAuthSettings = async (filter,updateBody) =>{  
  try {
    const userAuthSettingsCnt =  await dbService.update(UserAuthSettings,filter);
    return { userAuthSettings : userAuthSettingsCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserTokens = async (filter,updateBody) =>{  
  try {
    const userTokensCnt =  await dbService.update(UserTokens,filter);
    return { userTokens : userTokensCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteActivityLog = async (filter,updateBody) =>{  
  try {
    const activityLogCnt =  await dbService.update(ActivityLog,filter);
    return { activityLog : activityLogCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRole = async (filter,updateBody) =>{  
  try {
    let role = await dbService.findAll(Role,filter, { id:1 });
    if (role.length){
      role = role.map((obj) => obj.id);

      const routeRoleFilter = { '$or': [{ roleId : { '$in' : role } }] };
      const routeRoleCnt = await dbService.update(RouteRole,routeRoleFilter,updateBody);

      const userRoleFilter = { '$or': [{ roleId : { '$in' : role } }] };
      const userRoleCnt = await dbService.update(UserRole,userRoleFilter,updateBody);
      let updated = await dbService.update(Role,filter,updateBody);

      let response = {
        routeRole :routeRoleCnt.length,
        userRole :userRoleCnt.length,
      };
      return response;
    } else {
      return {  role : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteProjectRoute = async (filter,updateBody) =>{  
  try {
    let projectroute = await dbService.findAll(ProjectRoute,filter, { id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj.id);

      const routeRoleFilter = { '$or': [{ routeId : { '$in' : projectroute } }] };
      const routeRoleCnt = await dbService.update(RouteRole,routeRoleFilter,updateBody);
      let updated = await dbService.update(ProjectRoute,filter,updateBody);

      let response = { routeRole :routeRoleCnt.length, };
      return response;
    } else {
      return {  projectroute : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRouteRole = async (filter,updateBody) =>{  
  try {
    const routeRoleCnt =  await dbService.update(RouteRole,filter);
    return { routeRole : routeRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserRole = async (filter,updateBody) =>{  
  try {
    const userRoleCnt =  await dbService.update(UserRole,filter);
    return { userRole : userRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

module.exports = {
  deleteRoleDouane,
  deleteRoleAgentDouane,
  deleteNotification,
  deleteRdv,
  deleteFonction,
  deleteHistorique,
  deleteSectionDRH,
  deleteDirectionDRH,
  deleteAgentDRH,
  deleteSectionApp,
  deleteDirectionApp,
  deletePhoto,
  deleteStatutFiche,
  deleteFicheempotageStatut,
  deleteConteneurRectif,
  deleteMarchandiseRectif,
  deleteRectif,
  deleteFicheEmpotage,
  deleteFichierJoint,
  deleteOperateurExportateur,
  deleteOperateurCDA,
  deleteConteneur,
  deleteMarchandise,
  deleteAgentDouaneEmail,
  deleteAgent,
  deleteUser,
  deleteUserAuthSettings,
  deleteUserTokens,
  deleteActivityLog,
  deleteRole,
  deleteProjectRoute,
  deleteRouteRole,
  deleteUserRole,
  countRoleDouane,
  countRoleAgentDouane,
  countNotification,
  countRdv,
  countFonction,
  countHistorique,
  countSectionDRH,
  countDirectionDRH,
  countAgentDRH,
  countSectionApp,
  countDirectionApp,
  countPhoto,
  countStatutFiche,
  countFicheempotageStatut,
  countConteneurRectif,
  countMarchandiseRectif,
  countRectif,
  countFicheEmpotage,
  countFichierJoint,
  countOperateurExportateur,
  countOperateurCDA,
  countConteneur,
  countMarchandise,
  countAgentDouaneEmail,
  countAgent,
  countUser,
  countUserAuthSettings,
  countUserTokens,
  countActivityLog,
  countRole,
  countProjectRoute,
  countRouteRole,
  countUserRole,
  softDeleteRoleDouane,
  softDeleteRoleAgentDouane,
  softDeleteNotification,
  softDeleteRdv,
  softDeleteFonction,
  softDeleteHistorique,
  softDeleteSectionDRH,
  softDeleteDirectionDRH,
  softDeleteAgentDRH,
  softDeleteSectionApp,
  softDeleteDirectionApp,
  softDeletePhoto,
  softDeleteStatutFiche,
  softDeleteFicheempotageStatut,
  softDeleteConteneurRectif,
  softDeleteMarchandiseRectif,
  softDeleteRectif,
  softDeleteFicheEmpotage,
  softDeleteFichierJoint,
  softDeleteOperateurExportateur,
  softDeleteOperateurCDA,
  softDeleteConteneur,
  softDeleteMarchandise,
  softDeleteAgentDouaneEmail,
  softDeleteAgent,
  softDeleteUser,
  softDeleteUserAuthSettings,
  softDeleteUserTokens,
  softDeleteActivityLog,
  softDeleteRole,
  softDeleteProjectRoute,
  softDeleteRouteRole,
  softDeleteUserRole,
};
