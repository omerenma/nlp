const { handleSubmit } = require('../src/client/js/formHandler');
const { UIDataUpdate } = require('../src/client/js/UI');

test('Testing if function is truthy', () => {
  expect(handleSubmit).toBeTruthy();
});
const arguement = 'data';

test('UIDataUpdate function is defined', () => {
  expect(UIDataUpdate).toBeDefined();
});
