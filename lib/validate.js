"use strict";

/**
 * Validate parameters
 *
 * @module lib/validate
 */
const rootPrefix = ".."
;

/**
 * Validate parameters constructor
 *
 * @constructor
 */
const ValidateKlass = function() {};

ValidateKlass.prototype = {

  pattern: /^[a-z\d\-\.]+$/i,

  /**
   * Check if parameter is present
   *
   * @param {string} param - parameter value
   *
   * @public
   */
  isPresent: function (param) {
    return (typeof param !== 'undefined' && param !== null && String(param).trim() !== '');
  },

  /**
   * Get id from params
   *
   * @param {object} params
   */
  getId: function (params) {
    const oThis = this;
    if (oThis.isPresent(params.id) && oThis.pattern.test(params.id)) {
      return params.id;
    } else {
      throw new Error('missing or invalid id in request params');
    }
  },

  /**
   * Get user id from params
   *
   * * @param {object} params
   */
  getUserId: function (params) {
    const oThis = this;
    if(oThis.isPresent(params.user_id)&& oThis.pattern.test(params.user_id)){
      return params.user_id
    } else{
      throw new Error('missing or invalid user id in request params');
    }
  }

};

module.exports = new ValidateKlass();