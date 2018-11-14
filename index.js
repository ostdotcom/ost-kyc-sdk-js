"use strict";

/*
* KYC Javascript SDK
*
* @module index
*
* */


const rootPrefix = '.'
  ,   serviceManifestKlass    = require(rootPrefix + '/services/manifest');



const KYCSDK = function (params) {
  const oThis = this;
  oThis.services = new serviceManifestKlass(params);
};

module.exports = KYCSDK;
