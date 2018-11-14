"use strict";



/**
 * User Kyc Service
 *
 * @module services/users_kyc
 */

const rootPrefix = ".."
  , validate = require(rootPrefix + '/lib/validate')
  , sanitize = require(rootPrefix + '/lib/sanitize')
;

// hide request object
var _requestObj = null;

/**
 * Users Kyc Service constructor
 *
 * @constructor
 */
const usersKyc = function (requestObj) {
  const oThis = this;

  // Assign request object
  _requestObj = requestObj;

  // Define the url prefix
  oThis.urlPrefix = '/api/v2/users-kyc';

  return oThis;
};

usersKyc.prototype = {

  /**
   * Create or update
   *
   * @param {object} params
   *
   * @public
   */
  submitKyc: function (params = {}) {
    const oThis = this;
    const userId =  validate.getUserId(params);
    sanitize.removeKey(params, 'user_id')
    return _requestObj.post(oThis.urlPrefix + "/" + userId , params);
  },


  /**
   * List
   *
   * @param {object} params
   *
   * @public
   */
  list: function (params) {
    const oThis = this;
    params = params || {};

    return _requestObj.get(oThis.urlPrefix , params);
  },

  /**
   * Get user details
   *
   * @param {object} params
   *
   * @public
   */
  get: function (params) {
    const oThis = this;
    params = params || {};
    var id = validate.getId(params);
    sanitize.removeKey(params, 'id');
    return _requestObj.get(oThis.urlPrefix + "/" + id, params);
  },


  /**
   * Get pre signed url for put
   *
   * @param {object} params
   *
   * @public
   */
  getPresignedUrlPut: function(params){
    const oThis = this,
      suffix = "/pre-signed-urls/for-put";
    return _requestObj.get(oThis.urlPrefix + suffix , params);
  },

  /**
   * Get pre signed url for post
   *
   * @param {object} params
   *
   * @public
   */
  getPresignedUrlPost: function (params) {
    const oThis = this,
      suffix = "/pre-signed-urls/for-post";
    return _requestObj.get(oThis.urlPrefix + suffix , params);

  }

};

module.exports = usersKyc;