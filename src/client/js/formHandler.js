const { UIDataUpdate } = require('./UI');
export const handleSubmit = (event) => {
  event.preventDefault();
  // check what text was put into the form field
  let formData = document.getElementById('name').value;
  const urlData = {
    formData,
  };
  if (Client.checkForName(formData)) {
    fetch('http://localhost:3000/apidata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(urlData),
    })
      .then((data) => data.json())
      .then((data) => {
        UIDataUpdate(data);
      });

    // .then((data) => {
    //   document.getElementById('subjectivity').innerHTML =
    //     'Subjectivity: ' + data.subjectivity;
    //   document.getElementById('confidence').innerHTML =
    //     'Confidence: ' + data.confidence;
    //   document.getElementById('agreement').innerHTML =
    //     'Agreement: ' + data.agreement;
    //   document.getElementById('score').innerHTML = 'Score:' + data.score_tag;
    // });
  } else {
    alert('URL must be valid');
  }
};
