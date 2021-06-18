const { handleSubmit } = require('../src/client/js/formHandler');

describe('Function should be defined', () => {
  test('Run function', () => {
    expect(handleSubmit).toBeDefined();
  });
});

test('The function returns an object', () => {
  const formData = document.getElementById('name').value;
  const dataObject = { formData };
  fetch('http://localhost:3000/apidata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataObject),
  }).then((data) => {
    expect(data.tobe({}));
  });
});
