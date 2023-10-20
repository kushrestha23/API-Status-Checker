const { expect } = require('chai');
const axios = require('axios');

describe('Test SkipTheDishes API Endpoint', () => {
  it('should return a valid response with status code 200', async () => {
    const appToken = 'd7033722-4d2e-4263-9d67-d83854deb0fc';
    const url =
      'https://api-skipthedishes.skipthedishes.com/v1/restaurants/clean-url/ellement-wine-market';
    const params = {
      lat: 49.898215,
      long: -97.13588229999999,
    };
    const headers = {
      'app-token': appToken,
    };

    const response = await axios.get(url, { params, headers });

    expect(response.status).to.equal(200);
    expect(response.body).to.not.be.null;
  });
});
