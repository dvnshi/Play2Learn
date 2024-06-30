//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let homeButton = document.querySelector(".home-button");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
let caseStudyQ = document.querySelector(".case1");
let continueButton = document.querySelector(".continue-btn");
//Questions and Options array

const quizArray = [
  {
    id: "0",
    question:
      "What is the primary right at stake in Pooja's situation? ",
    options: [
        "Right against Child Marriage        ",
      " rightagainst exploitation",
      "Right to Equality      ",
    ],
    correct: "Right against Child Marriage    ",
  },
  {
    id: "1",
    question:
      "Which legal age restriction is associated with the prevention of child marriage in India?",
    options: [
      "16 years   ",
      "18 years  ",
      "21 years ",
    ],
    correct: "18 years",
  },
  {
    id: "2",
    question:
      " Which specific legislation in India addresses the issue of child marriage and sets the legal age for marriage?",
    options: [
      " Child Marriage Restraint Act (CMRA)      ",
      "pocso    ",
      "right to education ",
    ],
    correct: "Child Marriage Restraint Act (CMRA)",
  },
  {
    id: "3",
    question:
      "What role can community awareness and education play in preventing situations like Pooja's?",
    options: [
      "Important role ",
      " Limited role  ",
      " No significant role      ",
    ],
    correct: "Important role   ",
  },
  // {
  //   id: "4",
  //   question:
  //     "How can the local community contribute to improving Priya's educational experience?",
  //   options: [
  //     "By avoiding discussions about education",
  //     " By organizing community study sessions",
  //     " By isolating Priya from community events",
  //   ],
  //   correct: " By organizing community study sessions",
  // },
];
//display casestrudy scene
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  caseStudyQ.classList.remove("hide");
});

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  // displayContainer.classList.remove("hide");
  startScreen.classList.remove("hide");
  scoreContainer.classList.add("hide");
  caseStudyQ.classList.add("hide");
  // homeButton.addEventListener("click","../index.html");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      caseStudyQ.classList.add("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  caseStudyQ.classList.remove("hide");
  initial();
});
//when user click on continue button
continueButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  caseStudyQ.classList.add("hide");
  displayContainer.classList.add("hide");
};

const cursor = document.querySelector(".cursor");
var timeout;
//follow cursor on mouse
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  //cursor effect onj mouse stopped
  function mouseStopped() {
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

//cursor effect on mouse
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});