"use strict";

/**
 * validators service
 *
 * @module services/validators
**/

var _requestObj = null;



/**
 * validators constructor
 *
 * @constructor
 */
const Validators = function(requestObj){
  const oThis = this;
  // Assign request object
  _requestObj = requestObj;
  // Define the url prefix
  oThis.urlPrefix = '/api/v2/ethereum-address-validation';
  return oThis;
};

Validators.prototype = {

  /**
   * Verify ethereum address
   *
   * @param {object} params
   *
   * @public
   */
  verifyEthereumAddress: function (params) {
    const oThis =this;
    return _requestObj.get(oThis.urlPrefix, params);
  }

};

module.exports = Validators;