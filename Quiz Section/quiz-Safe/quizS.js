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
let count = 31;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "What does the right to a safe environment for children include?",
    options: [
      "Access to playgrounds",
      "Safe drinking water and clean air",
      "Freedom to play without any rules",
    ],
    correct: "Safe drinking water and clean air",
    reason: "The right to a safe environment includes access to clean air, safe drinking water, and sanitation. These are essential for children's health and well-being, preventing diseases and promoting development."
  },
  {
    id: "1",
    question: "Which international document outlines children's rights to a safe environment?",
    options: ["Universal Declaration of Human Rights", "Convention on the Rights of the Child", "Paris Agreement"],
    correct: "Convention on the Rights of the Child",
    reason: "The Convention on the Rights of the Child, adopted by the United Nations in 1989, outlines the rights of children, including the right to a safe and healthy environment. It is a comprehensive document focusing on various aspects of children's well-being."
  },
  {
    id: "2",
    question: "Why is it important for children to have access to green spaces?",
    options: [
      "To have a place to get dirty",
      "To connect with nature and play freely",
      "To avoid doing homework",
    ],
    correct: "To connect with nature and play freely",
    reason: "Access to green spaces allows children to connect with nature, engage in physical activities, and play freely. This is important for their physical, mental, and emotional development, promoting overall well-being."
  },
  {
    id: "3",
    question: "Who is responsible for ensuring that children live in a safe and healthy environment?",
    options: ["Only parents", "The government and the community", "Only teachers"],
    correct: "The government and the community",
    reason: "Ensuring a safe and healthy environment for children is a collective responsibility involving the government, the community, and parents. Governments must enforce environmental laws, and communities should support sustainable practices."
  },
  {
    id: "4",
    question: "What should you do if you see pollution affecting your community's environment?",
    options: [
      "Ignore it and continue your activities",
      "Tell a responsible adult or authority",
      "Contribute to the pollution",
    ],
    correct: "Tell a responsible adult or authority",
    reason: "If you see pollution affecting your community, it's important to inform a responsible adult or authority. Taking action helps protect the environment and ensures that everyone, especially children, can enjoy a clean and safe place to live."
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
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
  let reason_DIV = document.createElement("p"); // Create a paragraph for the reason
  reason_DIV.classList.add("reason"); // Add a class to the paragraph
  reason_DIV.innerHTML = quizArray[questionCount].reason; // Set the reason text
  reason_DIV.style.cssText = `
    margin-top: 20px;
    padding: 15px;
    border-radius: 8px;
    background-color: #f9f9f9;
    color: #333;
    font-size: 1em;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    opacity: 0;
  `; // Add inline CSS for styling the reason
  question.appendChild(reason_DIV); // Add the reason to the question card

  // Add a transition effect
  setTimeout(() => {
    reason_DIV.style.opacity = 1;
  }, 100); // Fade in the reason

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
  count = 31;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
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