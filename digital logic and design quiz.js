
let html = "";
function writeQuestions(questions) {
  let i;
  let questionNumber = 1;
  let data = questions.split("$");
  for (i = 0; i < data.length; i += 5) {
    html =
      html +
      `<div class="quizQuestions" id="${questionNumber}">
        ${data[i]}
        <br>
        <br>
        <div class="answers " id="${questionNumber}">
        <div>
        <input type="radio" id="option${
          i + 1
        }" name="options${i}" value="${data[i + 1]}">
        <label for="option${i + 1}">${data[i + 1]}</label>
        </div>
        <div>
        <input type="radio" id="option${
          i + 2
        }" name="options${i}" value="${data[i + 2]}">
        <label for="option${i + 2}">${data[i + 2]}</label>
        </div>
        <div>
        <input type="radio" id="option${
          i + 3
        }" name="options${i}" value="${data[i + 3]}">
        <label for="option${i + 3}">${data[i + 3]}</label>
        </div>
        <div>
        <input type="radio" id="option${
          i + 4
        }" name="options${i}" value="${data[i + 4]}">
        <label for="option${i + 4}">${data[i + 4]}</label>
        </div>
        </div>
        <button onclick="checkAnswers(this)" class="btn nextButton" >Next</button>
        </div>`;
    let element = document.getElementById("questions");
    element.innerHTML = html;
    console.log(element);
    questionNumber++;
  }
}

function getQuestions() {
  let url = "digital logic and design.txt";
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      writeQuestions(data);
    });
}

function getAnswers(){
  var data1;
  let url = "digital logic and design ans.txt";
  fetch(url).then((response) => {
    return response.text();
  }).then((data) => {
    data1 = data;
  });
}

getQuestions();

function checkAnswers(id) {
  var button = id;
  var question = button.parentElement;
  var child = question.getElementsByTagName("input");
  var questionID = question.id;
  var selectedOption;
  let correctAns;
  for(let i=0; i<4; i++){
    if(child[i].checked){
      selectedOption = child[i].attributes.value.nodeValue;
      checkedRadio = child[i].parentElement;
      
    }
  }
  let url = "digital logic and design ans.txt";
  fetch(url).then((response) => {
    console.log(response);
    return response.text();
  }).then((data => {
    var ansKeys = data.split("$");
    var rightAns = selectedOption.match(/[a-zA-Z]/);
    if(rightAns.toString() === ansKeys[questionID-1]){
      checkedRadio.style.background = "green";
    }else{
      checkedRadio.style.background = "red";
      
      switch(ansKeys[questionID-1]){
        case 'a':
          correctAns = child[0].parentElement;
          break;
          
          case 'b':
            correctAns = child[1].parentElement;
            break;
            
            case 'c':
              correctAns = child[2].parentElement;
              break;
              
              case 'd':
                correctAns = child[3].parentElement;
                break;
              }
              correctAns.style.background = "green";
              console.log(correctAns);
    }
  }));
  
}










