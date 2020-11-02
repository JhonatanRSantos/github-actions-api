
// Builds all the configs!!!
const fs = require('fs');
const path = require('path');
const stage = process.env.STAGE;

let envVariable = null;
try {
  // Get the correct .env json
  envVariable = process.env.DEV_ENVIRONMENT ? JSON.parse(process.env.DEV_ENVIRONMENT) : require(`../.env.${stage}.json`);
} catch (e) {
  console.error(`Can't get environment variables. Cause: ${e.message}`);
  process.exit(1);
}

const awsKey = envVariable.aws_accessKeyId;
const awsSecret = envVariable.aws_secretAccessKey;
const awsRegion = envVariable.aws_defaultRegion;

const baseVariables = {
  ENVIRONMENT: stage,

  AWS: {
    ACCESS_KEY_ID: awsKey,
    SECRET_ACCESS_KEY: awsSecret,
    REGION: awsRegion,
  },

};

// Write a CONFIG.json file with all the base configuration!
fs.writeFileSync(
  path.join(__dirname, 'config.json'),
  JSON.stringify(baseVariables, null, 2)
);

// Write the AWS credentials file
fs.writeFileSync(
  './credentials',
  '[default]\n' +
  `aws_access_key_id=${awsKey}\n` +
  `aws_secret_access_key=${awsSecret}\n` +
  `region=${awsRegion}\n`
);
