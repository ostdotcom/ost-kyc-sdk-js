"use strict";


const SanitizeKlass = function () {
};
SanitizeKlass.prototype = {
  removeKey: function (object, key) {
    delete object[key];
    return object;
  }
};


module.exports = new SanitizeKlass();

