const saludo = require('./app');

test('Debe de salir el saludo', () => {
  expect(saludo('Adrián')).toBe('Hola, Adrián!');
});
