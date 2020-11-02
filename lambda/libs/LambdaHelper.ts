/**
 * Tools for lambda
 */
export default class LambdaHelper {
  /**
   * The constructor
   */
  constructor() {}

  /**
   * Prepare a simple success response
   *
   * @param {GenericData | string} body The reponse body
   * @return {AWSLambda.APIGatewayProxyResult}
   */
  success(body: GenericData | string): AWSLambda.APIGatewayProxyResult {
    return {
      statusCode : 200,
      body       : typeof body === 'string' ? body : JSON.stringify(body),
    };
  }

  /**
   * Prepare a simple error response
   *
   * @param {GenericData | string} body The reponse body
   * @return {AWSLambda.APIGatewayProxyResult}
   */
  error(body: GenericData | string): AWSLambda.APIGatewayProxyResult {
    return {
      statusCode : 500,
      body       : typeof body === 'string' ? body : JSON.stringify(body),
    };
  }

  /**
   * Prepare a simple bad request response
   *
   * @param {GenericData | string} body The reponse body
   * @return {AWSLambda.APIGatewayProxyResult}
   */
  badRequest(body: GenericData | string): AWSLambda.APIGatewayProxyResult {
    return {
      statusCode : 400,
      body       : typeof body === 'string' ? body : JSON.stringify(body),
    };
  }
}
