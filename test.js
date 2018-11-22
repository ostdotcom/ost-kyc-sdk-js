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
  userService = kycSdk.services.users
;

function checkSignature() {
    const requestObj = new RequestKlass({apiKey: '12121', apiSecret:'dsdsd', apiEndpoint: "endpoint" }),
      queryString = requestObj.formatQueryParams(testObjForSignature);
    var fullQueryString = requestObj.signQueryParamsTest(configObj["testResource"], queryString, credentialObject),
       queryStringObj = qs.parse(fullQueryString);
    assert.equal(queryStringObj.signature, configObj["signatureExpected"] );

}

function checkGetRequest(){
  userService.list().then(function(res) { }).catch(function(err) { assert.fail('GET request testcase is failed'); });
}

function checkPostRequest() {
  var email = 'alice+' + Date.now() + '@ost.com'
  userService.create({email: email, test_params: testObjForSignature }).then(function(res) { }).catch(function(err) { assert.fail('POST request testcase is failed'); });

}

function main() {
  checkSignature();
  checkGetRequest();
  checkPostRequest();
}

main();



// const KYCSDK = require('./index');
//
// //const kycSdk = new KYCSDK();
//
//
// const kycSdk = new KYCSDK({apiKey: '8c9870d2bf08e3fb362263715e519bbe', apiSecret: '35f346e5ef825ed4499da98a6ac6b401', apiEndpoint: 'http://kyc.developmentost.com:8080'}),
//
//   userService = kycSdk.services.users,
//
//   usersKYCService = kycSdk.services.usersKyc,
//
//   usersKYCDetailsService = kycSdk.services.usersKycDetails,
//
//
//   testParam = {'k1':'Rachin',
//     'k2':'tejas',
//     'list2':[{'a':'L21A', 'b':'L21B'},
//       {'a':'L22A', 'b':'L22B'},
//       {'a':'L23A', 'b':'L23B'}]
//   },

  // validatorService = kycSdk.services.validators;
  //   userService.create({email: 'mayur+544@ost.com', test_params: testParam }).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });

   //userService.list().then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });

   // userService.get({id: 11002}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });

   //usersKYCService.get({user_id:11003}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });

   // usersKYCService.submitKyc({user_id:11003, first_name:'YOGESH@1212^+',  last_name:'SAWANT',  birthdate:'29/07/1992', country:'INDIA', nationality:'INDIAN', document_id_number:'DMDPS9634C', document_id_file_path:'10/i/4ae058629d4b384edcda8decdfbf0dd1', selfie_file_path:'10/i/4ae058629d4b384edcda8decdfbf0dd2', ethereum_address:'0x04d39e0b112c20917868ffd5c42372ecc5df577b',estimated_participation_amount:'1.2',residence_proof_file_path:'10/i/4ae058629d4b384edcda8decdfbf0dd3',investor_proof_files_path: ['10/i/4ae058629d4b384edcda8decdfbf0da1', '10/i/4ae058629d4b384edcda8decdfbf0da2'], city:'pune',street_address:'hadapsar',postal_code:'411028',state:'maharashtra'}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });

 // usersKYCService.list().then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });
// usersKYCService.getPresignedUrlPut({
//     files: {
//       residence_proof: 'application/pdf',
//       investor_proof_file1: 'application/pdf',
//       investor_proof_file2: 'application/pdf',
//       document_id: 'image/jpeg',
//       selfie: 'image/jpeg'
//     }
//   }
// ).then(function(res) { console.log(JSON.stringify(res, null, "  ")); }).catch(function(err) { console.log(JSON.stringify(err)); });
//console.log(JSON.stringify(object, null, "  "));

// usersKYCService.getPresignedUrlPost({
//     files: {
//       residence_proof: 'application/pdf',
//       investor_proof_file1: 'application/pdf',
//       investor_proof_file2: 'application/pdf',
//       document_id: 'image/jpeg',
//       selfie: 'image/jpeg'
//     }
//   }
// ).then(function(res) { console.log(JSON.stringify(res, null, "  ")); }).catch(function(err) { console.log(JSON.stringify(err)); });

   //usersKYCDetailsService.get({user_id:11003}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });


//validatorService.verifyEthereumAddress({ethereum_address: '0x32be343b94f860124dc4fee278fdcbd38c102d88'}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });




