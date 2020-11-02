import {handler} from 'functions/main/main';
import {buildGet} from '../../../helper/aws/buildEvent';
import LambdaHelper from 'libs/LambdaHelper';

describe(`Base API route | Testing success`, () => {
  beforeAll(() => {
    // Disable all logs
    console.log = console.debug = console.info = console.error = jest.fn();
    Date.prototype.toLocaleDateString = jest.fn(() => '31/10/2020');
    Date.prototype.toLocaleTimeString = jest.fn(() => '23:00:00');
  });

  it(`Should return 200 OK status`, async () => {
    const response = await handler(buildGet());
    const body = JSON.parse(response.body);

    expect(response.statusCode).toStrictEqual(200);
    expect(body).toMatchObject({
      status  : 200,
      message : 'The API is online',
      date    : '31/10/2020 23:00:00',
    });
  });
});


describe(`Base API route | Testing failure`, () => {
  beforeAll(() => {
    // Disable all logs
    console.log = console.debug = console.info = console.error = jest.fn();
    LambdaHelper.prototype.success = jest.fn(() => {
      throw Error(`Moked function success error`);
    });
  });

  it(`Should fail and return code 500`, async () => {
    const response = await handler(buildGet());

    expect(response.statusCode).toStrictEqual(500);
    expect(response.body).toStrictEqual(`Ops, we can't process your request right now :(. Please try again.`);
  });
});
