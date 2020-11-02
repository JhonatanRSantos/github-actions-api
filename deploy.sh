#!/bin/bash

DEPLOY_TYPE=$1
ENVIRONMENT=$2
FUNCTION_NAME=$3

if [ "$DEPLOY_TYPE" == "" ] || [ "$DEPLOY_TYPE" != "lambda" ]; then
  echo "##########################"
  echo "#      DEPLOY ERROR      #"
  echo "##########################"
  echo "   Invalid deploy type    "
  exit
elif [ "$ENVIRONMENT" == "" ] || 
  ( [ "$ENVIRONMENT" != "local" ] && 
  [ "$ENVIRONMENT" != "debug" ] && 
  [ "$ENVIRONMENT" != "dev" ]  && 
  [ "$ENVIRONMENT" != "prd" ]); then

  echo "##########################"
  echo "#      DEPLOY ERROR      #"
  echo "##########################"
  echo " Invalid environment type "
  exit
fi

if [ "$ENVIRONMENT" == "debug" ]; then
  ENVIRONMENT="local"
fi

YARN_PATH=$(which yarn)

if [ "$YARN_PATH" == "" ]; then
  echo "##########################"
  echo "#    DEPENDENCY ERROR    #"
  echo "##########################"
  echo "   Please install yarn    "
  exit
fi

export "STAGE=$ENVIRONMENT"
cd $DEPLOY_TYPE
yarn

yarn buildConfig
mv ./credentials ~/.aws/credentials

if [ "$FUNCTION_NAME" != "" ]; then
  echo "Deploying function => ${FUNCTION_NAME}"
  yarn serverless deploy -f $FUNCTION_NAME

elif [ "$ENVIRONMENT" == "local" ] || [ "$ENVIRONMENT" == "debug" ]; then
  yarn serverless offline --stage=local --httpPort=8000
else
  yarn serverless deploy --stage=${ENVIRONMENT}
  # yarn serverless remove --stage=${ENVIRONMENT}
fi

echo "All done!"
