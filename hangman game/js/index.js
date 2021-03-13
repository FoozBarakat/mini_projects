//previous question
let askedQuestions = [];
let questionIndex; //current question
let span = []; //current span
let hints; //mistakes

document.querySelector("#start").addEventListener("click", () => {
  // set the score to 0
  document.querySelector("#score").innerHTML = "0";
  // hide game Over element
  document.querySelector("#game-over").style.display = "none";
  preventKeyboard("auto"); //function to manage the keyboard
  //clear previous askedQuestions Array
  askedQuestions = [];

  // hide the sketch
  clearSketch();

  // get random question from data array
  questionIndex = getQuestion();
  document.querySelector("#question").innerHTML = data[questionIndex].question;
  askedQuestions.push(questionIndex);

  // function to mange the answer display
  answerLength();
});

const getQuestion = () => {
  // get random question from the data array
  questionIndex = Math.floor(Math.random() * data.length);
  // stop recurrsion
  if (askedQuestions.length == data.length) {
    return "Play another game!";
  }

  // make sure that is the question is not in the askedQuestions array
  if (askedQuestions.includes(questionIndex) == false) {
    // if it is not in the array return the question index
    return questionIndex;
  }
  // else call the function again to get another random number
  return getQuestion();
};

const answerLength = () => {
  // save the answer length on var
  let length = data[questionIndex].answer.length;

  // to remove the prevoius letters
  document.querySelectorAll(".letter").forEach((letter) => letter.remove());
  span = [];

  // add the letters depending on the answer length
  for (let i = 0; i < length; i++) {
    let letter = document.createElement("span");
    letter.classList.add("letter");
    document.querySelector(".letters").appendChild(letter);
    span.push(letter);
  }
};

document.querySelectorAll(".keyboard").forEach((letter) =>
  letter.addEventListener("click", () => {
    //checks to see if the clicked letter is correct based on the answer in the data
    if (data[questionIndex].answer.includes(letter.id) == true) {
      //checks how many time the letter is repeated in the answer
      let indexs = checkAnswer(letter.id, data[questionIndex].answer);
      indexs.forEach((index) => (span[index].innerHTML = letter.id));
      winner(data[questionIndex].answer); //handles win
    } else {
      hints--;
      //checks the mistakes
      if (hints === 5) {
        //display sketch
        document.querySelector("#head").style.display = "block";
        document.querySelector("#hints").innerHTML = hints;
      } else if (hints === 4) {
        document.querySelector("#body").style.display = "block";
        document.querySelector("#hints").innerHTML = hints;
      } else if (hints === 3) {
        document.querySelector("#left-arm").style.display = "block";
        document.querySelector("#hints").innerHTML = hints;
      } else if (hints === 2) {
        document.querySelector("#right-arm").style.display = "block";
        document.querySelector("#hints").innerHTML = hints;
      } else if (hints === 1) {
        document.querySelector("#left-leg").style.display = "block";
        document.querySelector("#hints").innerHTML = hints;
      } else if (hints === 0) {
        document.querySelector("#right-leg").style.display = "block";
        document.querySelector("#hints").innerHTML = hints;
        document.querySelector("#game-over").style.display = "block";
        preventKeyboard("none");
      }
    }
  })
);

function checkAnswer(letter, data) {
  let indexs = [];

  for (let i = 0; i < data.length; i++) {
    if (letter === data[i]) {
      indexs.push(i);
    }
  }
  document.getElementById(letter).style.pointerEvents = "none";
  return indexs;
}

function winner(answer) {
  let wordSpan = ""; //saves the letters in the span
  span.forEach((element) => (wordSpan += element.innerHTML));
  if (wordSpan === answer) {
    //prevents from clicking after winning
    preventKeyboard("none"); //adds score when winning
    document.querySelector("#score").innerHTML++;
    questionIndex = getQuestion();
    if (typeof questionIndex == "string") {
      document.querySelector("#game-over").innerText = "Play another game";
      document.querySelector("#game-over").style.display = "block";
      document.querySelector("#game-over").style.color = "lightgreen";
      document.querySelector("#game-over").style.fontSize = "40px";
    } else {
      //gives another question
      document.querySelector("#question").innerHTML =
        data[questionIndex].question;
      askedQuestions.push(questionIndex);
      answerLength();
      preventKeyboard("auto");
      clearSketch();
    }
  }
}

function preventKeyboard(string) {
  document
    .querySelectorAll(".keyboard")
    .forEach((key) => (key.style.pointerEvents = string));
}

function clearSketch() {
  // hide the sketch
  document.querySelector("#head").style.display = "none";
  document.querySelector("#body").style.display = "none";
  document.querySelector("#left-arm").style.display = "none";
  document.querySelector("#right-arm").style.display = "none";
  document.querySelector("#left-leg").style.display = "none";
  document.querySelector("#right-leg").style.display = "none";
  hints = document.querySelector("#hints").innerHTML = "6";
}
