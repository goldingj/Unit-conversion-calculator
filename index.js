
var answerDisplay = document.getElementById("answer-display");
var submitButton = document.getElementById("submit-button");
var firstChoice = document.getElementById("first-choice");

function convertToCelsius(){
    var usersInput = document.getElementById("starting-amount").value;
    var answer = (usersInput - 32) * 5/9;
    return answer;  
}

function convertToFarenheit(){
    var usersInput = document.getElementById("starting-amount").value;
    var answer = (usersInput * 9/5) + 32;
    return answer;
}

function convertToInches(){
    var usersInput = document.getElementById("starting-amount").value;
    var answer = usersInput * 12;
    return answer;
}

function convertToFeet(){
    var usersInput = document.getElementById("starting-amount").value;
    var answer = usersInput / 12;
    return answer;
}

submitButton.addEventListener("click", function() {
    var usersInput = document.getElementById("starting-amount").value;
    var choice = firstChoice.options[firstChoice.selectedIndex].value;
    var answer;
  
    if (choice == 'farenheit') {
      answer = convertToCelsius(usersInput);
    } else if (choice == 'celsius') {
      answer = convertToFarenheit(usersInput);
    } else if (choice == 'inches') {
      answer = convertToFeet(usersInput);
    } else if (choice == 'feet') {
      answer = convertToInches(usersInput);
    }
  
    answerDisplay.innerHTML = answer;
  });
