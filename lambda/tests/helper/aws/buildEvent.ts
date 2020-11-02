/**
 * Mock a APIGatewayEvent
 *
 * @param {any} body
 * @param {string} [path='']
 * @param {any} [opts={}]
 * @return {AWSLambda.APIGatewayEvent}
 */
export function buildPost(body: any, path = '', opts = {}): AWSLambda.APIGatewayEvent {
  return {
    'body'                            : JSON.stringify(body),
    'resource'                        : '/{proxy+}',
    'path'                            : '/path/to/resource',
    'httpMethod'                      : 'POST',
    'isBase64Encoded'                 : true,
    'queryStringParameters'           : null,
    'multiValueHeaders'               : {},
    'multiValueQueryStringParameters' : {},
    'pathParameters'                  : {
      'proxy' : '/path/to/resource',
    },
    'stageVariables' : {
      'baz' : 'qux',
    },
    'headers' : {
      'Accept'                       : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Encoding'              : 'gzip, deflate, sdch',
      'Accept-Language'              : 'en-US,en;q=0.8',
      'Cache-Control'                : 'max-age=0',
      'CloudFront-Forwarded-Proto'   : 'https',
      'CloudFront-Is-Desktop-Viewer' : 'true',
      'CloudFront-Is-Mobile-Viewer'  : 'false',
      'CloudFront-Is-SmartTV-Viewer' : 'false',
      'CloudFront-Is-Tablet-Viewer'  : 'false',
      'CloudFront-Viewer-Country'    : 'US',
      'Host'                         : '1234567890.execute-api.us-east-1.amazonaws.com',
      'Upgrade-Insecure-Requests'    : '1',
      'User-Agent'                   : 'Custom User Agent String',
      'Via'                          : '1.1 08f323deadbeefa7af34d5feb414ce27.cloudfront.net (CloudFront)',
      'X-Amz-Cf-Id'                  : 'cDehVQoZnx43VYQb9j2-nvCh-9z396Uhbp027Y2JvkCPNLmGJHqlaA==',
      'X-Forwarded-For'              : '127.0.0.1, 127.0.0.2',
      'X-Forwarded-Port'             : '443',
      'X-Forwarded-Proto'            : 'https',
    },
    'requestContext' : {
      'authorizer'       : null,
      'accountId'        : '123456789012',
      'resourceId'       : '123456',
      'stage'            : 'prod',
      'requestId'        : 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
      'requestTime'      : '09/Apr/2015:12:34:56 +0000',
      'requestTimeEpoch' : Date.now(),
      'identity'         : {
        'cognitoIdentityPoolId'         : null,
        'accountId'                     : null,
        'cognitoIdentityId'             : null,
        'caller'                        : null,
        'accessKey'                     : null,
        'sourceIp'                      : '127.0.0.1',
        'cognitoAuthenticationType'     : null,
        'cognitoAuthenticationProvider' : null,
        'userArn'                       : null,
        'userAgent'                     : 'Custom User Agent String',
        'user'                          : null,
        'apiKey'                        : null,
        'apiKeyId'                      : null,
        'principalOrgId'                : null,
      },
      'path'         : path ? path : '/prod/path/to/resource',
      'resourcePath' : '/{proxy+}',
      'httpMethod'   : 'POST',
      'apiId'        : '1234567890',
      'protocol'     : 'HTTP/1.1',
      ...opts,
    },
  };
}

/**
 * Mock a APIGatewayEvent
 *
 * @param {{}} queryStringParameters
 * @param {string} [path='']
 * @param {any} [opts={}]
 * @return {AWSLambda.APIGatewayEvent}
 */
export function buildGet(queryStringParameters = {}, path = '', opts = {}): AWSLambda.APIGatewayEvent {
  // @ts-ignore
  return {
    'resource'                        : '/{proxy+}',
    'path'                            : '/path/to/resource',
    'httpMethod'                      : 'GET',
    'isBase64Encoded'                 : true,
    'queryStringParameters'           : queryStringParameters,
    'multiValueHeaders'               : {},
    'multiValueQueryStringParameters' : {},
    'pathParameters'                  : {
      'proxy' : '/path/to/resource',
    },
    'stageVariables' : {
      'baz' : 'qux',
    },
    'headers' : {
      'Accept'                       : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Encoding'              : 'gzip, deflate, sdch',
      'Accept-Language'              : 'en-US,en;q=0.8',
      'Cache-Control'                : 'max-age=0',
      'CloudFront-Forwarded-Proto'   : 'https',
      'CloudFront-Is-Desktop-Viewer' : 'true',
      'CloudFront-Is-Mobile-Viewer'  : 'false',
      'CloudFront-Is-SmartTV-Viewer' : 'false',
      'CloudFront-Is-Tablet-Viewer'  : 'false',
      'CloudFront-Viewer-Country'    : 'US',
      'Host'                         : '1234567890.execute-api.us-east-1.amazonaws.com',
      'Upgrade-Insecure-Requests'    : '1',
      'User-Agent'                   : 'Custom User Agent String',
      'Via'                          : '1.1 08f323deadbeefa7af34d5feb414ce27.cloudfront.net (CloudFront)',
      'X-Amz-Cf-Id'                  : 'cDehVQoZnx43VYQb9j2-nvCh-9z396Uhbp027Y2JvkCPNLmGJHqlaA==',
      'X-Forwarded-For'              : '127.0.0.1, 127.0.0.2',
      'X-Forwarded-Port'             : '443',
      'X-Forwarded-Proto'            : 'https',
    },
    'requestContext' : {
      'authorizer'       : null,
      'accountId'        : '123456789012',
      'resourceId'       : '123456',
      'stage'            : 'prod',
      'requestId'        : 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
      'requestTime'      : '09/Apr/2015:12:34:56 +0000',
      'requestTimeEpoch' : Date.now(),
      'identity'         : {
        'cognitoIdentityPoolId'         : null,
        'accountId'                     : null,
        'cognitoIdentityId'             : null,
        'caller'                        : null,
        'accessKey'                     : null,
        'sourceIp'                      : '127.0.0.1',
        'cognitoAuthenticationType'     : null,
        'cognitoAuthenticationProvider' : null,
        'userArn'                       : null,
        'userAgent'                     : 'Custom User Agent String',
        'user'                          : null,
        'apiKey'                        : null,
        'apiKeyId'                      : null,
        'principalOrgId'                : null,
      },
      'path'         : path ? path : '/prod/path/to/resource',
      'resourcePath' : '/{proxy+}',
      'httpMethod'   : 'GET',
      'apiId'        : '1234567890',
      'protocol'     : 'HTTP/1.1',
      ...opts,
    },
  };
}

/**
 * Mock a APIGatewayEvent
 *
 * @param {any} body
 * @param {string} [path='']
 * @param {any} [opts={}]
 * @return {AWSLambda.APIGatewayEvent}
 */
export function buildDelete(body: any, path = '', opts = {}): AWSLambda.APIGatewayEvent {
  return {
    'body'                            : JSON.stringify(body),
    'resource'                        : '/{proxy+}',
    'path'                            : '/path/to/resource',
    'httpMethod'                      : 'DELETE',
    'isBase64Encoded'                 : true,
    'queryStringParameters'           : null,
    'multiValueHeaders'               : {},
    'multiValueQueryStringParameters' : {},
    'pathParameters'                  : {
      'proxy' : '/path/to/resource',
    },
    'stageVariables' : {
      'baz' : 'qux',
    },
    'headers' : {
      'Accept'                       : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Encoding'              : 'gzip, deflate, sdch',
      'Accept-Language'              : 'en-US,en;q=0.8',
      'Cache-Control'                : 'max-age=0',
      'CloudFront-Forwarded-Proto'   : 'https',
      'CloudFront-Is-Desktop-Viewer' : 'true',
      'CloudFront-Is-Mobile-Viewer'  : 'false',
      'CloudFront-Is-SmartTV-Viewer' : 'false',
      'CloudFront-Is-Tablet-Viewer'  : 'false',
      'CloudFront-Viewer-Country'    : 'US',
      'Host'                         : '1234567890.execute-api.us-east-1.amazonaws.com',
      'Upgrade-Insecure-Requests'    : '1',
      'User-Agent'                   : 'Custom User Agent String',
      'Via'                          : '1.1 08f323deadbeefa7af34d5feb414ce27.cloudfront.net (CloudFront)',
      'X-Amz-Cf-Id'                  : 'cDehVQoZnx43VYQb9j2-nvCh-9z396Uhbp027Y2JvkCPNLmGJHqlaA==',
      'X-Forwarded-For'              : '127.0.0.1, 127.0.0.2',
      'X-Forwarded-Port'             : '443',
      'X-Forwarded-Proto'            : 'https',
    },
    'requestContext' : {
      'authorizer'       : null,
      'accountId'        : '123456789012',
      'resourceId'       : '123456',
      'stage'            : 'prod',
      'requestId'        : 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
      'requestTime'      : '09/Apr/2015:12:34:56 +0000',
      'requestTimeEpoch' : Date.now(),
      'identity'         : {
        'cognitoIdentityPoolId'         : null,
        'accountId'                     : null,
        'cognitoIdentityId'             : null,
        'caller'                        : null,
        'accessKey'                     : null,
        'sourceIp'                      : '127.0.0.1',
        'cognitoAuthenticationType'     : null,
        'cognitoAuthenticationProvider' : null,
        'userArn'                       : null,
        'userAgent'                     : 'Custom User Agent String',
        'user'                          : null,
        'apiKey'                        : null,
        'apiKeyId'                      : null,
        'principalOrgId'                : null,
      },
      'path'         : path ? path : '/prod/path/to/resource',
      'resourcePath' : '/{proxy+}',
      'httpMethod'   : 'POST',
      'apiId'        : '1234567890',
      'protocol'     : 'HTTP/1.1',
      ...opts,
    },
  };
}

/**
 * Mock a APIGatewayEvent
 *
 * @param {any} body
 * @param {string} [path='']
 * @param {any} [opts={}]
 * @return {AWSLambda.APIGatewayEvent}
 */
export function buildPut(body: any, path = '', opts = {}): AWSLambda.APIGatewayEvent {
  return {
    'body'                            : JSON.stringify(body),
    'resource'                        : '/{proxy+}',
    'path'                            : '/path/to/resource',
    'httpMethod'                      : 'PUT',
    'isBase64Encoded'                 : true,
    'queryStringParameters'           : null,
    'multiValueHeaders'               : {},
    'multiValueQueryStringParameters' : {},
    'pathParameters'                  : {
      'proxy' : '/path/to/resource',
    },
    'stageVariables' : {
      'baz' : 'qux',
    },
    'headers' : {
      'Accept'                       : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Encoding'              : 'gzip, deflate, sdch',
      'Accept-Language'              : 'en-US,en;q=0.8',
      'Cache-Control'                : 'max-age=0',
      'CloudFront-Forwarded-Proto'   : 'https',
      'CloudFront-Is-Desktop-Viewer' : 'true',
      'CloudFront-Is-Mobile-Viewer'  : 'false',
      'CloudFront-Is-SmartTV-Viewer' : 'false',
      'CloudFront-Is-Tablet-Viewer'  : 'false',
      'CloudFront-Viewer-Country'    : 'US',
      'Host'                         : '1234567890.execute-api.us-east-1.amazonaws.com',
      'Upgrade-Insecure-Requests'    : '1',
      'User-Agent'                   : 'Custom User Agent String',
      'Via'                          : '1.1 08f323deadbeefa7af34d5feb414ce27.cloudfront.net (CloudFront)',
      'X-Amz-Cf-Id'                  : 'cDehVQoZnx43VYQb9j2-nvCh-9z396Uhbp027Y2JvkCPNLmGJHqlaA==',
      'X-Forwarded-For'              : '127.0.0.1, 127.0.0.2',
      'X-Forwarded-Port'             : '443',
      'X-Forwarded-Proto'            : 'https',
    },
    'requestContext' : {
      'authorizer'       : null,
      'accountId'        : '123456789012',
      'resourceId'       : '123456',
      'stage'            : 'prod',
      'requestId'        : 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
      'requestTime'      : '09/Apr/2015:12:34:56 +0000',
      'requestTimeEpoch' : Date.now(),
      'identity'         : {
        'cognitoIdentityPoolId'         : null,
        'accountId'                     : null,
        'cognitoIdentityId'             : null,
        'caller'                        : null,
        'accessKey'                     : null,
        'sourceIp'                      : '127.0.0.1',
        'cognitoAuthenticationType'     : null,
        'cognitoAuthenticationProvider' : null,
        'userArn'                       : null,
        'userAgent'                     : 'Custom User Agent String',
        'user'                          : null,
        'apiKey'                        : null,
        'apiKeyId'                      : null,
        'principalOrgId'                : null,
      },
      'path'         : path ? path : '/prod/path/to/resource',
      'resourcePath' : '/{proxy+}',
      'httpMethod'   : 'POST',
      'apiId'        : '1234567890',
      'protocol'     : 'HTTP/1.1',
      ...opts,
    },
  };
}
