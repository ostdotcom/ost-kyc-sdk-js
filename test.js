"use strict";


const KYCSDK = require('./index');

//const kycSdk = new KYCSDK();


const kycSdk = new KYCSDK({apiKey: '8c9870d2bf08e3fb362263715e519bbe', apiSecret: '35f346e5ef825ed4499da98a6ac6b401', apiEndpoint: 'http://kyc.developmentost.com:8080'}),

  userService = kycSdk.services.users,

  usersKYCService = kycSdk.services.usersKyc,

  usersKYCDetailsService = kycSdk.services.usersKycDetails,

  validatorService = kycSdk.services.validators;

   //userService.list().then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });

   // userService.get({id: 11002}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });

   //usersKYCService.get({id:11003}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });

    usersKYCService.submitKyc({user_id:11003, first_name:'YOGESH@1212^+',  last_name:'SAWANT',  birthdate:'29/07/1992', country:'INDIA', nationality:'INDIAN', document_id_number:'DMDPS9634C', document_id_file_path:'10/i/4ae058629d4b384edcda8decdfbf0dd1', selfie_file_path:'10/i/4ae058629d4b384edcda8decdfbf0dd2', ethereum_address:'0x04d39e0b112c20917868ffd5c42372ecc5df577b',estimated_participation_amount:'1.2',residence_proof_file_path:'10/i/4ae058629d4b384edcda8decdfbf0dd3',investor_proof_files_path: ['10/i/4ae058629d4b384edcda8decdfbf0da1', '10/i/4ae058629d4b384edcda8decdfbf0da2'], city:'pune',street_address:'hadapsar',postal_code:'411028',state:'maharashtra'}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });

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




