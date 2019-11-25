const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
    return client.init().url('http://localhost:8080/admin');
});

test('На странице есть кнопка "Авторизоваться"', () => {
    return client
      .isExisting('.btn--main')
      .then(browsers => {
          for (const browserName in browsers) {
              expect(browsers[browserName]).toBe(true);
          }
      })
      .screenshot()
      .then(browsers => {
          for (const browserName in browsers) {
              fs.writeFileSync(`./screenshots/auth-btn${browserName}_has_open.png`, browsers[browserName].value, 'base64');
          }
      });
});



afterAll(() => {
    return client.end();
});
