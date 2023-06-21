/**
 * authConstant.js
 * @description :: constants used in authentication
 */

const JWT = {
  CLIENT_SECRET:'myjwtclientsecret',
  EXPIRES_IN: 10000
};

const USER_TYPES = {
  OperateurEXportateur:1,
  OperateurCDA:2,
  Douanes:3,
  SuperAdmin:4,
};

const PLATFORM = { CLIENT:1, };

let LOGIN_ACCESS = {
  [USER_TYPES.Douanes]:[PLATFORM.CLIENT],        
  [USER_TYPES.OperateurCDA]:[PLATFORM.CLIENT],        
  [USER_TYPES.OperateurEXportateur]:[PLATFORM.CLIENT],        
  [USER_TYPES.SuperAdmin]:[PLATFORM.CLIENT],        
};

const DEFAULT_USER_ROLE = 'OperateurCDA';

const MAX_LOGIN_RETRY_LIMIT = 3;
const LOGIN_REACTIVE_TIME = 20;   

const SEND_LOGIN_OTP = { EMAIL:1, };
const DEFAULT_SEND_LOGIN_OTP = SEND_LOGIN_OTP.EMAIL;

const FORGOT_PASSWORD_WITH = {
  LINK: {
    email: true,
    sms: false
  },
  EXPIRE_TIME: 20
};

module.exports = {
  JWT,
  USER_TYPES,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  LOGIN_REACTIVE_TIME,
  SEND_LOGIN_OTP,
  DEFAULT_SEND_LOGIN_OTP,
  FORGOT_PASSWORD_WITH,
  LOGIN_ACCESS,
  DEFAULT_USER_ROLE,
};