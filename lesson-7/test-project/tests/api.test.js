const axios = require("axios");

const getMyApi = async (from, to) => {
  let resp;
  try {
    resp = await axios.get('http://localhost:3000', {
      params: {
        from,
        to
      }
    });
  } catch(e){
    resp = e.response;
  }
  return resp
}

describe('Base API tests', () => {

  // let authToken;
  // beforeAll(async () => {
  //     authToken = await someFuncToGetToken();
  // })
    
    
  test("Success request for BTC/GBP", async () => {
    const response = await axios.get('http://localhost:3000', {
      params: {
        from: 'BTC',
        to: 'GBP'
      }
    });

    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
    expect(response.data).toBe('BTC/GBP');
  })

  test("Success request for BTC/USD", async () => {
    const response = await getMyApi('BTC', 'USD');

    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
    expect(response.data).toContain('BTC/USD');
  })

  test("Failed request for BTC/undefined", async () => {
    const resp = await getMyApi('BTC');
    
    expect(resp.status).toBe(400);
    expect(resp.statusText).toBe('Bad Request');
    expect(resp.data).toContain('Incorrect params');
  })

  test("Failed request for BTC/ERC", async () => {
    const resp = await getMyApi('BTC', 'ERC');
    
    expect(resp.status).toBe(404);
    expect(resp.statusText).toBe('Not Found');
    expect(resp.data).toContain('Invalid Symbols Pair');
  })
})