export const handleSubmit = (e) => {
  e.preventDefault();
  // check what text was put into the form field
  const formData = document.getElementById('name').value;
  const dataObject = { formData };

  fetch('http://localhost:3000/apidata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataObject),
  })
    .then((data) => data.json())
    .then((data) => {
      document.getElementById('subjectivity').innerHTML =
        'Subjectivity: ' + data.subjectivity;
      document.getElementById('confidence').innerHTML =
        'Confidence: ' + data.confidence;
      document.getElementById('agreement').innerHTML =
        'Agreement: ' + data.agreement;
      document.getElementById('score').innerHTML = 'Score:' + data.score_tag;
    });
};
