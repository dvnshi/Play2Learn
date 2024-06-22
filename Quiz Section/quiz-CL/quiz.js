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
    question: "What international treaty explicitly recognizes the right against exploitation, including child labor?",
    options: [
      "Paris Agreement",
      "Convention on the Rights of the Child",
      "Universal Declaration of Human Rights",
    ],
    correct: "Convention on the Rights of the Child",
    reason: "The Convention on the Rights of the Child explicitly recognizes children's rights to be protected from economic exploitation and hazardous work. It emphasizes the importance of ensuring children's safety, health, and education."
  },
  {
    id: "1",
    question: "In the context of human rights, what is the term for using someone's labor or resources for personal gain without fair compensation?",
    options: [
      "Exploitation", 
      "Employment", 
      "Collaboration"
    ],
    correct: "Exploitation",
    reason: "Exploitation refers to the unethical use of someone's labor or resources for personal gain without fair compensation. It often involves taking advantage of vulnerable individuals or groups, violating their rights and dignity."
  },
  {
    id: "2",
    question: "Which form of exploitation involves forcing individuals to work under threat, coercion, or debt bondage?",
    options: [
      "Forced labor",
      "Voluntary labor",
      "Fair labor",
    ],
    correct: "Forced labor",
    reason: "Forced labor is a severe form of exploitation where individuals are compelled to work against their will under threat, coercion, or debt bondage. It is a violation of human rights and is often associated with trafficking and modern slavery."
  },
  {
    id: "3",
    question: "According to international standards, what is the minimum age for employment in hazardous work?",
    options: [
      "12 years", 
      "14 years", 
      "18 years"
    ],
    correct: "18 years",
    reason: "International standards, such as those set by the ILO, establish 18 years as the minimum age for hazardous work. This is to protect young individuals from dangerous environments that could harm their health, safety, and development."
  },
  {
    id: "4",
    question: "Which UN agency plays a significant role in addressing and combating various forms of exploitation, including child labor?",
    options: [
      "WHO",
      "UNICEF",
      "ILO",
    ],
    correct: "ILO",
    reason: "The International Labour Organization (ILO) is a key UN agency dedicated to promoting social justice and internationally recognized labor rights. It plays a significant role in addressing and combating exploitation, including child labor and forced labor."
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
      count = 31;
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