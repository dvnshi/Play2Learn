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
    question: "What does the right to education mean?",
    options: [
      "Going to school only on weekdays",
      "Going to school without homework",
      "Going to school for primary education",
    ],
    correct: "Going to school for primary education",
    reason: "The right to education ensures that every child has access to free and compulsory primary education. It is a fundamental human right that promotes personal and societal development."
  },
  {
    id: "1",
    question: "What is the age group covered by the right to education?",
    options: ["5 to 15 years old", "6 to 14 years old", "12 to 18 years old"],
    correct: "6 to 14 years old",
    reason: "The right to education typically covers children between the ages of 6 to 14 years old. This age range is crucial for laying the educational foundation necessary for future learning and development."
  },
  {
    id: "2",
    question: "Who has the right to education?",
    options: [
      "Only children from wealthy families",
      "Only boys",
      "Every child, regardless of their background",
    ],
    correct: "Every child, regardless of their background",
    reason: "The right to education is universal, meaning it applies to every child, regardless of their gender, economic status, or background. It ensures equal opportunities for all children to learn and grow."
  },
  {
    id: "3",
    question: "Who is responsible for ensuring that children can access education?",
    options: ["Parents only", "The government and parents", "Only teachers"],
    correct: "The government and parents",
    reason: "Both the government and parents share the responsibility of ensuring that children can access education. Governments must provide the necessary infrastructure and policies, while parents must support and encourage their children’s educational pursuits."
  },
  {
    id: "4",
    question: "What should you do if you see a child who is not able to go to school?",
    options: [
      "Help them by telling a teacher or an adult you trust",
      "Ignore them",
      "Tease them",
    ],
    correct: "Help them by telling a teacher or an adult you trust",
    reason: "If you see a child unable to attend school, it is important to help by informing a teacher or a trusted adult. Ensuring every child’s access to education is a collective responsibility that can make a significant difference in their lives."
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
