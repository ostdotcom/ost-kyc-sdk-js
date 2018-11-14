"use strict";

/**
 * User Kyc details Service
 *
 * @module services/users_kyc_details
 */

const rootPrefix = ".."
  , validate = require(rootPrefix + '/lib/validate')
  , sanitize = require(rootPrefix + '/lib/sanitize')
;

// hide request object
var _requestObj = null;

/**
 * Users Kyc details Service constructor
 *
 * @constructor
 */
const UsersKycDetailsKlass = function (requestObj) {
  const oThis = this;
  // Assign request object
  _requestObj = requestObj;
  // Define the url prefix
  oThis.urlPrefix = '/api/v2/users-kyc-detail';
  return oThis;
};

UsersKycDetailsKlass.prototype = {

  /**
   * Get user kyc details
   *
   * @param {object} params
   *
   * @public
   */
  get: function (params = {}) {
    const oThis = this;
    const userId = validate.getUserId(params);
    sanitize.removeKey(params, 'user_id');
    return _requestObj.get(oThis.urlPrefix + "/" + userId, params);
  }

};

module.exports = UsersKycDetailsKlass;