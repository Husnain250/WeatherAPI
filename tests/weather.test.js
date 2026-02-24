const { test, expect } = require('@playwright/test');

const API_KEY = 'd40be709eeacbbf9ec9cc65e8abc3e77';

test('Verify Islamabad Temperature & Success Response', async ({ request }) => {

  const response = await request.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=${API_KEY}&units=metric`
  );

  
  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body);

  
  expect(body.name).toBe('Islamabad');
  expect(body.main.temp).toBeDefined();
  expect(typeof body.main.temp).toBe('number');

});