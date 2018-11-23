"use strict";
const rootPrefix = ".",

  chai = require("chai"),
  assert = chai.assert,

  RequestKlass = require(rootPrefix + "/lib/request"),

  qs = require("qs"),

  fs = require("fs"),

  configObj = JSON.parse(fs.readFileSync(rootPrefix + '/configuration.json', 'utf8')),

  testObjForSignature = configObj["testObjForSignature"],

  credentialObject = {
    apiKey: process.env.API_KEY,
    secret: process.env.API_SECRET
  },
  apiEndpont = process.env.API_BASE_URL,

  KYCSDK = require(rootPrefix + "/index"),
  kycSdk = new KYCSDK({apiKey: credentialObject.apiKey, apiSecret: credentialObject.secret, apiEndpoint: apiEndpont}),
  userService = kycSdk.services.users,
  usersKycService = kycSdk.services.usersKyc
;

function checkSignature() {
  it ("Signature should match with given one", function () {
    const requestObj = new RequestKlass({apiKey: '12121', apiSecret:'dsdsd', apiEndpoint: "endpoint" }),
      queryString = requestObj.formatQueryParams(testObjForSignature);
    console.log("queryString", queryString );
    var fullQueryString = requestObj.signQueryParamsTest(configObj["testResource"], queryString, credentialObject),
      queryStringObj = qs.parse(fullQueryString);
    assert.equal(queryStringObj.signature, configObj["signatureExpected"] );
  });
}

function checkGetRequest(){
  it('response.success should be true for testing get request', async function () {
    var email = 'alice+' + Date.now() + '@ost.com';
    const response = await userService.list().catch(function(err) { assert.fail('GET request testcase is failed'); });
    assert.equal(response.success, true);
  });
}

function checkPostRequest() {
  var email = 'alice+' + Date.now() + '@ost.com';
  it('response.success should be true for post request', async function () {
    var email = 'alice+' + Date.now() + '@ost.com';
    const response = await userService.create({email: email, test_params: testObjForSignature }).catch(function(err) { assert.fail('POST request testcase is failed'); });
    assert.equal(response.success, true);
  });
}


function main() {
  checkSignature();
  checkGetRequest();
  checkPostRequest();
}

main();





