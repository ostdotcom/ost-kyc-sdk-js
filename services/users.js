"use strict";

/**
 * Users Service
 *
 * @module services/v1/users
 */

const rootPrefix = ".."
  , validate = require(rootPrefix + '/lib/validate')
  , sanitize = require(rootPrefix + '/lib/sanitize')
;

// hide request object
var _requestObj = null;

/**
 * Users Service constructor
 *
 * @constructor
 */
const users = function (requestObj) {
  const oThis = this;
  // Assign request object
  _requestObj = requestObj;
  // Define the url prefix
  oThis.urlPrefix = '/api/v2/users';
  return oThis;
};

users.prototype = {

  /**
   * Create
   *
   * @param {object} params
   *
   * @public
   */
  create: function (params) {
    const oThis = this;
    params = params || {};

    return _requestObj.post(oThis.urlPrefix , params);
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
  }

};

module.exports = users;