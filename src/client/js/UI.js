export const UIDataUpdate = (data) => {
  document.getElementById('subjectivity').innerHTML =
    'Subjectivity: ' + data.subjectivity;
  document.getElementById('confidence').innerHTML =
    'Confidence: ' + data.confidence;
  document.getElementById('agreement').innerHTML =
    'Agreement: ' + data.agreement;
  document.getElementById('score').innerHTML = 'Score:' + data.score_tag;
};
