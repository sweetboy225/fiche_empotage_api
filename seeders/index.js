/**
 * seeder.js
 * @description :: functions that seeds mock data to run the application
 */
const model = require('../model');
const dbService = require('../utils/dbService');
const bcrypt = require('bcrypt');
const authConstant = require('../constants/authConstant');
const { replaceAll } = require('../utils/common');

/* seeds default users */
async function seedUser () {
  try {
    let userToBeInserted = {};
    userToBeInserted = await dbService.findOne(model.user,{ 'username':'Darrel_Quigley29' });
    if (!userToBeInserted) {  
      userToBeInserted = {
        'password':'G9iVbW97eH192yf',
        'isDeleted':false,
        'username':'Darrel_Quigley29',
        'email':'Michelle_Osinski28@gmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.OperateurEXportateur
      };
      await dbService.createOne(model.user,userToBeInserted);
    } else {
      userToBeInserted = {
        'password':'G9iVbW97eH192yf',
        'isDeleted':false,
        'username':'Darrel_Quigley29',
        'email':'Michelle_Osinski28@gmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.OperateurEXportateur
      };
      userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
      await dbService.update(model.user, { 'username':'Darrel_Quigley29' }, userToBeInserted);
    }
    userToBeInserted = await dbService.findOne(model.user,{ 'username':'Reginald.Miller' });
    if (!userToBeInserted) {  
      userToBeInserted = {
        'password':'axd8owDprlYbBMY',
        'isDeleted':false,
        'username':'Reginald.Miller',
        'email':'Oran74@hotmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.OperateurCDA
      };
      await dbService.createOne(model.user,userToBeInserted);
    } else {
      userToBeInserted = {
        'password':'axd8owDprlYbBMY',
        'isDeleted':false,
        'username':'Reginald.Miller',
        'email':'Oran74@hotmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.OperateurCDA
      };
      userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
      await dbService.update(model.user, { 'username':'Reginald.Miller' }, userToBeInserted);
    }
    userToBeInserted = await dbService.findOne(model.user,{ 'username':'Veda_Kohler' });
    if (!userToBeInserted) {  
      userToBeInserted = {
        'password':'QQFgnuigurq_eTl',
        'isDeleted':false,
        'username':'Veda_Kohler',
        'email':'Rachelle.Will@hotmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.Douanes
      };
      await dbService.createOne(model.user,userToBeInserted);
    } else {
      userToBeInserted = {
        'password':'QQFgnuigurq_eTl',
        'isDeleted':false,
        'username':'Veda_Kohler',
        'email':'Rachelle.Will@hotmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.Douanes
      };
      userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
      await dbService.update(model.user, { 'username':'Veda_Kohler' }, userToBeInserted);
    }
    userToBeInserted = await dbService.findOne(model.user,{ 'username':'Marta.Lakin' });
    if (!userToBeInserted) {  
      userToBeInserted = {
        'password':'_IPEYqBbOesu4vh',
        'isDeleted':false,
        'username':'Marta.Lakin',
        'email':'Graciela_King@hotmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.SuperAdmin
      };
      await dbService.createOne(model.user,userToBeInserted);
    } else {
      userToBeInserted = {
        'password':'_IPEYqBbOesu4vh',
        'isDeleted':false,
        'username':'Marta.Lakin',
        'email':'Graciela_King@hotmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.SuperAdmin
      };
      userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
      await dbService.update(model.user, { 'username':'Marta.Lakin' }, userToBeInserted);
    }
    console.info('User model seeded 🍺');
  } catch (error){
    console.log('User seeder failed due to ', error.message);
  }
}
  
/* seeds roles */
async function seedRole () {
  try {
    const roles = [ 'Admin', 'System_User', 'User' ];
    const insertedRoles = await dbService.findAll(model.role, { code: { $in: roles.map(role => role.toUpperCase()) } });
    const rolesToInsert = [];
    roles.forEach(role => {
      if (!insertedRoles.find(insertedRole => insertedRole.code === role.toUpperCase())) {
        rolesToInsert.push({
          name: role,
          code: role.toUpperCase(),
          weight: 1
        });
      }
    });
    if (rolesToInsert.length) {
      const result = await dbService.createMany(model.role, rolesToInsert);
      if (result) console.log('Role seeded 🍺');
      else console.log('Role seeder failed!');
    } else {
      console.log('Role is upto date 🍺');
    }
  } catch (error) {
    console.log('Role seeder failed due to ', error.message);
  }
}

/* seeds routes of project */
async function seedProjectRoutes (routes) {
  try {
    if (routes) {
      let routeName = '';
      const dbRoutes = await dbService.findAll(model.projectRoute, {});
      let routeArr = [];
      let routeObj = {};
      routes.forEach(route => {
        routeName = `${replaceAll((route.path).toLowerCase(), '/', '_')}`;
        route.methods.forEach(method => {
          routeObj = dbRoutes.find(dbRoute => dbRoute.route_name === routeName && dbRoute.method === method);
          if (!routeObj) {
            routeArr.push({
              'uri': route.path.toLowerCase(),
              'method': method,
              'route_name': routeName,
            });
          }
        });
      });
      if (routeArr.length) {
        const result = await dbService.createMany(model.projectRoute, routeArr);
        if (result) console.info('ProjectRoute model seeded 🍺');
        else console.info('ProjectRoute seeder failed.');
      } else {
        console.info('ProjectRoute is upto date 🍺');
      }
    }
  } catch (error) {
    console.log('ProjectRoute seeder failed due to ', error.message);
  }
}

/* seeds role for routes */
async function seedRouteRole () {
  try {
    const routeRoles = [ 
      {
        route: '/client/api/v1/agent/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/agent/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agent/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agent/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agent/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/agent/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agent/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/client/api/v1/agent/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/agent/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/agent/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agent/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agent/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agent/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agent/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agent/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agent/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agent/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agent/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agent/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agent/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agent/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/agent/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/agent/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agent/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdrh/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdrh/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdrh/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdrh/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdrh/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdrh/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdrh/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/client/api/v1/agentdrh/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/agentdrh/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdrh/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdrh/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdrh/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdrh/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdrh/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdrh/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdrh/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdrh/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdrh/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdrh/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdrh/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdrh/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/agentdrh/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/agentdrh/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdrh/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdouaneemail/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdouaneemail/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdouaneemail/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdouaneemail/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdouaneemail/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdouaneemail/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdouaneemail/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/agentdouaneemail/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/agentdouaneemail/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdouaneemail/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdouaneemail/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdouaneemail/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdouaneemail/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdouaneemail/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdouaneemail/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdouaneemail/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdouaneemail/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdouaneemail/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdouaneemail/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdouaneemail/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/agentdouaneemail/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/agentdouaneemail/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/agentdouaneemail/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdouaneemail/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneur/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneur/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneur/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneur/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneur/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneur/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneur/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/client/api/v1/conteneur/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/conteneur/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneur/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneur/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneur/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneur/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneur/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneur/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneur/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneur/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneur/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneur/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneur/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneur/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/conteneur/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/conteneur/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneur/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directionapp/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directionapp/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directionapp/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directionapp/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directionapp/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directionapp/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directionapp/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/directionapp/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/directionapp/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directionapp/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directionapp/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directionapp/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directionapp/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directionapp/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directionapp/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directionapp/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directionapp/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directionapp/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directionapp/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directionapp/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directionapp/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/directionapp/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/directionapp/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directionapp/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directiondrh/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directiondrh/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directiondrh/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directiondrh/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directiondrh/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directiondrh/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directiondrh/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/directiondrh/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/directiondrh/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directiondrh/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directiondrh/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directiondrh/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directiondrh/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directiondrh/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directiondrh/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directiondrh/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directiondrh/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directiondrh/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directiondrh/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directiondrh/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/directiondrh/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/directiondrh/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/directiondrh/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/directiondrh/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotage/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotage/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotage/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotage/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotage/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotage/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotage/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/ficheempotage/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/ficheempotage/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotage/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotage/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotage/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotage/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotage/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotage/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotage/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotage/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotage/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotage/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotage/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotage/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/ficheempotage/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/ficheempotage/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotage/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/ficheempotagestatut/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fonction/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fonction/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fonction/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fonction/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fonction/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fonction/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fonction/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/client/api/v1/fonction/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/fonction/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fonction/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fonction/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fonction/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fonction/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fonction/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fonction/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fonction/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fonction/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fonction/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fonction/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fonction/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fonction/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/fonction/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/fonction/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fonction/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/historique/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/historique/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/historique/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/historique/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/historique/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/historique/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/historique/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/historique/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/historique/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/historique/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/historique/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/historique/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/historique/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/historique/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/historique/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/historique/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/historique/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/historique/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/historique/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/historique/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/historique/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/historique/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/historique/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/historique/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandise/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandise/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandise/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandise/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandise/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandise/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandise/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/marchandise/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/marchandise/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandise/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandise/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandise/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandise/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandise/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandise/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandise/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandise/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandise/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandise/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandise/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandise/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/marchandise/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/marchandise/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandise/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandiserectif/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandiserectif/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandiserectif/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandiserectif/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandiserectif/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandiserectif/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandiserectif/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/marchandiserectif/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/marchandiserectif/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandiserectif/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandiserectif/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandiserectif/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandiserectif/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandiserectif/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandiserectif/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandiserectif/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandiserectif/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandiserectif/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandiserectif/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandiserectif/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/marchandiserectif/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/marchandiserectif/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/marchandiserectif/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/marchandiserectif/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/notification/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/notification/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/notification/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/notification/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/notification/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/notification/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/notification/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/notification/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/notification/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/notification/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/notification/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/notification/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/notification/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/notification/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/notification/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/notification/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/notification/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/notification/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/notification/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/notification/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/notification/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/notification/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/notification/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/notification/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurcda/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurcda/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurcda/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurcda/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurcda/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurcda/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurcda/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/operateurcda/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/operateurcda/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurcda/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurcda/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurcda/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurcda/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurcda/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurcda/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurcda/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurcda/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurcda/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurcda/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurcda/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurcda/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/operateurcda/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/operateurcda/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurcda/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurexportateur/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurexportateur/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurexportateur/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurexportateur/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurexportateur/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurexportateur/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurexportateur/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/operateurexportateur/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/operateurexportateur/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurexportateur/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurexportateur/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurexportateur/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurexportateur/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurexportateur/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurexportateur/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurexportateur/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurexportateur/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurexportateur/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurexportateur/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurexportateur/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/operateurexportateur/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/operateurexportateur/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/operateurexportateur/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/operateurexportateur/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/photo/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/photo/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/photo/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/photo/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/photo/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/photo/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/photo/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/client/api/v1/photo/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/photo/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/photo/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/photo/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/photo/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/photo/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/photo/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/photo/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/photo/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/photo/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/photo/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/photo/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/photo/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/photo/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/photo/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/photo/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/photo/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/rdv/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/rdv/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/rdv/addbulk',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/rdv/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/rdv/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/rdv/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/rdv/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/client/api/v1/rdv/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/client/api/v1/rdv/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/rdv/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/rdv/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rdv/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rdv/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rdv/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rdv/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rdv/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rdv/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rdv/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rdv/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rdv/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rdv/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/rdv/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/rdv/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/rdv/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/rectif/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/rectif/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/rectif/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/rectif/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/rectif/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/rectif/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/rectif/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/client/api/v1/rectif/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/rectif/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/rectif/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/rectif/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rectif/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rectif/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rectif/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rectif/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rectif/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rectif/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rectif/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rectif/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rectif/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/rectif/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/rectif/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/rectif/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/rectif/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roleagentdouane/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roleagentdouane/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roleagentdouane/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roleagentdouane/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roleagentdouane/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roleagentdouane/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roleagentdouane/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/roleagentdouane/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/roleagentdouane/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roleagentdouane/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roleagentdouane/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roleagentdouane/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roleagentdouane/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roleagentdouane/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roleagentdouane/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roleagentdouane/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roleagentdouane/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roleagentdouane/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roleagentdouane/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roleagentdouane/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roleagentdouane/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/roleagentdouane/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/roleagentdouane/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roleagentdouane/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roledouane/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roledouane/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roledouane/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roledouane/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roledouane/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roledouane/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roledouane/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/roledouane/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/roledouane/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roledouane/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roledouane/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roledouane/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roledouane/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roledouane/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roledouane/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roledouane/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roledouane/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roledouane/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roledouane/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roledouane/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/roledouane/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/roledouane/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/roledouane/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/roledouane/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/sectionapp/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/sectionapp/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/sectionapp/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/sectionapp/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/sectionapp/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/sectionapp/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/sectionapp/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/sectionapp/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/sectionapp/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/sectionapp/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/sectionapp/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/sectionapp/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/sectionapp/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/sectionapp/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/sectionapp/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/sectionapp/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/sectionapp/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/sectionapp/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/sectionapp/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/sectionapp/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/sectionapp/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/sectionapp/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/sectionapp/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/sectionapp/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/servicedrh/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/servicedrh/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/servicedrh/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/servicedrh/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/servicedrh/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/servicedrh/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/servicedrh/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/servicedrh/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/servicedrh/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/servicedrh/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/servicedrh/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/servicedrh/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/servicedrh/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/servicedrh/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/servicedrh/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/servicedrh/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/servicedrh/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/servicedrh/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/servicedrh/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/servicedrh/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/servicedrh/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/servicedrh/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/servicedrh/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/servicedrh/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/statutfiche/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/statutfiche/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/statutfiche/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/statutfiche/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/statutfiche/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/statutfiche/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/statutfiche/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/statutfiche/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/statutfiche/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/statutfiche/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/statutfiche/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/statutfiche/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/statutfiche/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/statutfiche/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/statutfiche/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/statutfiche/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/statutfiche/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/statutfiche/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/statutfiche/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/statutfiche/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/statutfiche/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/statutfiche/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/statutfiche/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/statutfiche/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneurrectif/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneurrectif/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneurrectif/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneurrectif/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneurrectif/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneurrectif/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneurrectif/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/conteneurrectif/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/conteneurrectif/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneurrectif/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneurrectif/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneurrectif/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneurrectif/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneurrectif/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneurrectif/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneurrectif/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneurrectif/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneurrectif/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneurrectif/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneurrectif/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/conteneurrectif/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/conteneurrectif/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/conteneurrectif/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/conteneurrectif/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fichierjoint/create',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fichierjoint/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fichierjoint/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fichierjoint/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fichierjoint/list',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fichierjoint/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fichierjoint/:id',
        role: 'Admin',
        method: 'GET'
      },
      {
        route: '/client/api/v1/fichierjoint/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/fichierjoint/count',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fichierjoint/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fichierjoint/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fichierjoint/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fichierjoint/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fichierjoint/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fichierjoint/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fichierjoint/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fichierjoint/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fichierjoint/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fichierjoint/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fichierjoint/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/fichierjoint/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/fichierjoint/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/fichierjoint/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/fichierjoint/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/user/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/user/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/addbulk',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/user/addbulk',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/user/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/user/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/user/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/client/api/v1/user/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/client/api/v1/user/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/user/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/user/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/client/api/v1/user/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/updatebulk',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/user/delete/:id',
        role: 'User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/user/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/user/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/deletemany',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userauthsettings/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userauthsettings/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userauthsettings/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userauthsettings/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/userauthsettings/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userauthsettings/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userauthsettings/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userauthsettings/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userauthsettings/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userauthsettings/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userauthsettings/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/userauthsettings/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/usertokens/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/usertokens/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/activitylog/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/activitylog/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/activitylog/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/activitylog/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/activitylog/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/activitylog/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/activitylog/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/activitylog/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/activitylog/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/activitylog/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/activitylog/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/activitylog/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/role/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/role/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/projectroute/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/projectroute/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/routerole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/routerole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/userrole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/userrole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/agentdouaneemail/:agentdouaneemail_matricule',
        role: 'System_User',
        method: 'GET'
      },

    ];
    if (routeRoles && routeRoles.length) {
      const routes = [...new Set(routeRoles.map(routeRole => routeRole.route.toLowerCase()))];
      const routeMethods = [...new Set(routeRoles.map(routeRole => routeRole.method))];
      const roles = [ 'Admin', 'System_User', 'User' ];
      const insertedProjectRoute = await dbService.findAll(model.projectRoute, {
        uri: { $in: routes },
        method: { $in: routeMethods },
        'isActive': true,
        'isDeleted': false
      });
      const insertedRoles = await dbService.findAll(model.role, {
        code: { $in: roles.map(role => role.toUpperCase()) },
        'isActive': true,
        'isDeleted': false
      });
      let projectRouteId = '';
      let roleId = '';
      let createRouteRoles = routeRoles.map(routeRole => {
        projectRouteId = insertedProjectRoute.find(pr => pr.uri === routeRole.route.toLowerCase() && pr.method === routeRole.method);
        roleId = insertedRoles.find(r => r.code === routeRole.role.toUpperCase());
        if (projectRouteId && roleId) {
          return {
            roleId: roleId.id,
            routeId: projectRouteId.id
          };
        }
      });
      createRouteRoles = createRouteRoles.filter(Boolean);
      const routeRolesToBeInserted = [];
      let routeRoleObj = {};
    
      await Promise.all(
        createRouteRoles.map(async routeRole => {
          routeRoleObj = await dbService.findOne(model.routeRole, {
            routeId: routeRole.routeId,
            roleId: routeRole.roleId,
          });
          if (!routeRoleObj) {
            routeRolesToBeInserted.push({
              routeId: routeRole.routeId,
              roleId: routeRole.roleId,
            });
          }
        })
      );
      if (routeRolesToBeInserted.length) {
        const result = await dbService.createMany(model.routeRole, routeRolesToBeInserted);
        if (result) console.log('RouteRole seeded 🍺');
        else console.log('RouteRole seeder failed!');
      } else {
        console.log('RouteRole is upto date 🍺');
      }
    }
  } catch (error){
    console.log('RouteRole seeder failed due to ', error.message);
  }
}

/* seeds roles for users */
async function seedUserRole (){
  try {
    const userRoles = [{
      'username':'Darrel_Quigley29',
      'password':'G9iVbW97eH192yf'
    },{
      'username':'Reginald.Miller',
      'password':'axd8owDprlYbBMY'
    },{
      'username':'Veda_Kohler',
      'password':'QQFgnuigurq_eTl'
    },{
      'username':'Marta.Lakin',
      'password':'_IPEYqBbOesu4vh'
    }];
    const defaultRoles = await dbService.findAll(model.role);
    const insertedUsers = await dbService.findAll(model.user, { username: { $in: userRoles.map(userRole => userRole.username) } });
    let user = {};
    const userRolesArr = [];
    userRoles.map(userRole => {
      user = insertedUsers.find(user => user.username === userRole.username && user.isPasswordMatch(userRole.password) && user.isActive && !user.isDeleted);
      if (user) {
        if (user.userType === authConstant.USER_TYPES.Admin){
          userRolesArr.push({
            userId: user.id,
            roleId: defaultRoles.find((d)=>d.code === 'ADMIN').id
          });
        } else if (user.userType === authConstant.USER_TYPES.User){
          userRolesArr.push({
            userId: user.id,
            roleId: defaultRoles.find((d)=>d.code === 'USER').id
          });
        } else {
          userRolesArr.push({
            userId: user.id,
            roleId: defaultRoles.find((d)=>d.code === 'SYSTEM_USER').id
          });
        }  
      }
    });
    let userRoleObj = {};
    const userRolesToBeInserted = [];
    if (userRolesArr.length) {
      await Promise.all(
        userRolesArr.map(async userRole => {
          userRoleObj = await dbService.findOne(model.userRole, {
            userId: userRole.userId,
            roleId: userRole.roleId
          });
          if (!userRoleObj) {
            userRolesToBeInserted.push({
              userId: userRole.userId,
              roleId: userRole.roleId
            });
          }
        })
      );
      if (userRolesToBeInserted.length) {
        const result = await dbService.createMany(model.userRole, userRolesToBeInserted);
        if (result) console.log('UserRole seeded 🍺');
        else console.log('UserRole seeder failed');
      } else {
        console.log('UserRole is upto date 🍺');
      }
    }
  } catch (error){
    console.log('UserRole seeder failed due to ', error.message);
  }
}

/* calls of functions to seed mock data into multiple collections */
async function seedData (allRegisterRoutes){
  await seedUser();
  await seedRole();
  await seedProjectRoutes(allRegisterRoutes);
  await seedRouteRole();
  await seedUserRole();
};
module.exports = seedData;