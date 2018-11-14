"use strict";

/*
* Service manifest
*
*
* */


const rootPrefix = "..",
    RequestKlass = require(rootPrefix + "/lib/request"),
    UsersKlass = require(rootPrefix + "/services/users"),
    UsersKycKlass = require(rootPrefix + "/services/users_kyc"),
    UsersKycDetailsKlass = require(rootPrefix + "/services/users_kyc_details"),
    Validators = require(rootPrefix + "/services/validators");

var _requestObj = null;


const Manifest = function (params) {
  const oThis = this;
  console.log('before requestobject', params);
  _requestObj = new RequestKlass(params);
  console.log('requestobject', _requestObj);
  oThis.users = new UsersKlass(_requestObj);
  oThis.usersKyc = new UsersKycKlass(_requestObj);
  oThis.usersKycDetails = new UsersKycDetailsKlass(_requestObj);
  oThis.validators = new Validators(_requestObj);


};

Manifest.prototype = {

};

module.exports = Manifest;

