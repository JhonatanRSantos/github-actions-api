import LambdaHelper from 'libs/LambdaHelper';

const lambdaHelper = new LambdaHelper();

/**
 *
 * The API base route
 *
 * @alias main
 * @alias /
 * @method GET
 *
 * @param {AWSLambda.APIGatewayEvent} __event The AWS API Gateway Event
 * @return {Promise<AWSLambda.APIGatewayProxyResult>} Response
 */
export async function handler(__event: AWSLambda.APIGatewayEvent): Promise<AWSLambda.APIGatewayProxyResult> {
  try {
    const date = new Date();

    return lambdaHelper.success({
      status  : 200,
      message : `The API is online`,
      date    : `${date.toLocaleDateString('pt-BR')} ${date.toLocaleTimeString('pt-BR')}`,
    });
  } catch (e) {
    console.error(`Can't procprocceess the request. Cause: ${e.message}`);
    return lambdaHelper.error(`Ops, we can't process your request right now :(. Please try again.`);
  }
}
