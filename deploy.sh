#!/bin/bash

DEPLOY_TYPE=$1
ENVIRONMENT=$2
FUNCTION_NAME=$3

TESTING=false

if [ "$DEPLOY_TYPE" == "" ] || [ "$DEPLOY_TYPE" != "lambda" ]; then
  echo "##########################"
  echo "#      DEPLOY ERROR      #"
  echo "##########################"
  echo "   Invalid deploy type    "
  exit
elif [ "$ENVIRONMENT" == "" ] ||
  ( [ "$ENVIRONMENT" != "test" ] &&
  [ "$ENVIRONMENT" != "local" ] && 
  [ "$ENVIRONMENT" != "debug" ] && 
  [ "$ENVIRONMENT" != "dev" ]  && 
  [ "$ENVIRONMENT" != "prd" ]); then

  echo "##########################"
  echo "#      DEPLOY ERROR      #"
  echo "##########################"
  echo " Invalid environment type "
  exit
fi

if [ "$ENVIRONMENT" == "debug" ] || [ "$ENVIRONMENT" == "test" ]; then
  if [ "$ENVIRONMENT" == "test" ]; then
    TESTING=true
  fi    
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

if [ -d "~/.aws" ]; then
  mkdir ~/.aws
fi

mv ./credentials ~/.aws/credentials

if [ "$FUNCTION_NAME" != "" ]; then
  echo "Deploying function => ${FUNCTION_NAME}"
  yarn serverless deploy -f $FUNCTION_NAME

elif ([ "$ENVIRONMENT" == "local" ] || [ "$ENVIRONMENT" == "debug" ]) &&  ! $TESTING ; then
  yarn serverless offline --stage=local --httpPort=8000

elif $TESTING ; then
  yarn serverless offline --stage=local --httpPort=8000 &>/dev/null &
  echo "Sleep for a moment while the project is building with serverless offline"
  sleep 30

  if [ "$GIT_ACTION" == "" ]; then 
    yarn newman run ./tests/postman/collection.json -e ./tests/postman/environment.json
    killall node
  fi

else
  yarn serverless deploy --stage=${ENVIRONMENT}
  # Destroy all lambdas
  # yarn serverless remove --stage=${ENVIRONMENT}
fi

echo "All done!"
