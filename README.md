## KYC Javascript SDK

The official [KYC JavaScript SDK](https://dev.ost.com/docs/kyc/index.html).

## Requirements


To use this node module, developers will need to:
1. Login on [https://kyc.ost.com/admin/login](https://kyc.ost.com/admin/login).
2. Obtain an API Key and API Secret from [https://kyc.ost.com/admin/settings/developer-integrations](https://kyc.ost.com/admin/settings/developer-integrations).

## Documentation

[https://dev.ost.com/docs/kyc](https://dev.ost.com/docs/kyc/index.html)

## Installation

Install OST KYC JavaScript SDK

```bash
> npm install @ostdotcom/ost-kyc-sdk-js
```

## Example Usage

Require the SDK:

```node.js
const KYCSDK = require('@ostdotcom/ost-kyc-sdk-js');
```

Initialize the SDK object:

```node.js
// the latest valid API endpoint is "https://kyc.sandboxost.com", this may change in the future
// timeout can be passed in config object. This is http request timeout.(In seconds)
const kycObj = new KYCSDK({apiKey: <api_key>, apiSecret: <api_secret>, apiEndpoint: <api_endpoint>, 
config: {timeout: <timeout>}});
```

### Users Module 

```node.js
const userService = kycObj.services.users;
```

Create a new user:

```node.js
userService.create({email: 'alice+1@ost.com'}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });
```


Get an existing user:

```node.js
userService.get({id: '123454333'}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });
```

Get a list of users and other data:

```node.js
userService.list({}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });
```

### Users KYC module 

```node.js
const usersKYCService = kycSdk.services.usersKyc;
```

Submit KYC:

```node.js
usersKYCService.submitKyc({user_id:11003, first_name:'RAJESH',  last_name:'KUMAR',  birthdate:'29/07/1992', country:'INDIA', nationality:'INDIAN', document_id_number:'ADDHBDHBSH', document_id_file_path:'10/i/4ae058629d4b384edcda8decdfbf0dd1', selfie_file_path:'10/i/4ae058629d4b384edcda8decdfbf0dd2', ethereum_address:'0x04d39e0b112c20917868ffd5c42372ecc5df577b',estimated_participation_amount:'1.2',residence_proof_file_path:'10/i/4ae058629d4b384edcda8decdfbf0dd3',investor_proof_files_path: ['10/i/4ae058629d4b384edcda8decdfbf0da1', '10/i/4ae058629d4b384edcda8decdfbf0da2'], city:'pune',street_address:'hadapsar',postal_code:'411028',state:'maharashtra'}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });
```

List Users KYC:

```node.js
usersKYCService.list().then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });
```

Get Users KYC

```node.js
usersKYCService.get({user_id:11003}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });
```



Get PUT Presigned url

```node.js
    usersKYCService.getPresignedUrlPut({
         files: {
           residence_proof: 'application/pdf',
           investor_proof_file1: 'application/pdf',
           investor_proof_file2: 'application/pdf',
           document_id: 'image/jpeg',
           selfie: 'image/jpeg'
         }
       }
       ).then(function(res) { console.log(JSON.stringify(res, null, "  ")); }).catch(function(err) { console.log(JSON.stringify(err)); });
```


Get POST Presigned url

```node.js
usersKYCService.getPresignedUrlPost({
     files: {
       residence_proof: 'application/pdf',
       investor_proof_file1: 'application/pdf',
       investor_proof_file2: 'application/pdf',
       document_id: 'image/jpeg',
       selfie: 'image/jpeg'
     }
   }
 ).then(function(res) { console.log(JSON.stringify(res, null, "  ")); }).catch(function(err) { console.log(JSON.stringify(err)); });
```




### Users KYC details Module 

```node.js
const usersKYCDetailsService = kycSdk.services.usersKycDetails;
```

Get user's kyc details

```node.js
usersKYCDetailsService.get({user_id:11003}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });
```

### Validation Module 
    

```node.js
const validatorService = kycSdk.services.validators;
```

Verify ethereum address

```node.js
 validatorService.verifyEthereumAddress({ethereum_address: '0x32be343b94f860124dc4fee278fdcbd38c102d88'}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });
```
 