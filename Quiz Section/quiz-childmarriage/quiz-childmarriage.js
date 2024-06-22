// References to various HTML elements
let timeLeft = document.querySelector(".time-left"); // Timer display element
let quizContainer = document.getElementById("container"); // Quiz container element
let nextBtn = document.getElementById("next-button"); // Next button element
let countOfQuestion = document.querySelector(".number-of-question"); // Question count display element
let displayContainer = document.getElementById("display-container"); // Main display container element
let scoreContainer = document.querySelector(".score-container"); // Score container element
let restart = document.getElementById("restart"); // Restart button element
let homeButton = document.querySelector(".home-button"); // Home button element
let userScore = document.getElementById("user-score"); // User score display element
let startScreen = document.querySelector(".start-screen"); // Start screen element
let startButton = document.getElementById("start-button"); // Start button element

// Variables for tracking quiz state
let questionCount; // Current question index
let scoreCount = 0; // User's score
let count = 31; // Timer count (30 seconds)
let countdown; // Interval ID for countdown timer

// Questions and options array
const quizArray = [
  {
    id: "0",
    question: "What is the legal age for marriage to prevent child marriages in many countries?",
    options: ["16 years", "18 years", "21 years"],
    correct: "18 years",
    reason: "REASON - The legal age for marriage is set at 18 years in many countries to ensure individuals are mature enough to make such a significant decision."
  },
  {
    id: "1",
    question: "Which international convention addresses the issue of child marriage and advocates for a minimum age for marriage?",
    options: [
      "Convention on the Rights of the Child (CRC)", 
      "Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW)", 
      "International Covenant on Civil and Political Rights (ICCPR)"
    ],
    correct: "Convention on the Rights of the Child (CRC)",
    reason: "REASON - The CRC addresses child marriage by advocating for the protection of children's rights and setting a minimum age for marriage."
  },
  {
    id: "2",
    question: "In many jurisdictions, what is the primary purpose of setting a minimum age for marriage?",
    options: [
      "To encourage early family planning",
      "To protect children from abuse and exploitation",
      "To promote cultural traditions"
    ],
    correct: "To protect children from abuse and exploitation",
    reason: "REASON - The primary purpose of setting a minimum age for marriage is to protect children from abuse and exploitation."
  },
  {
    id: "3",
    question: "What are the potential consequences of child marriage on a young girl's health and well-being?",
    options: [
      "Improved mental health", 
      "Increased risk of maternal mortality", 
      "Only teachers"
    ],
    correct: "Increased risk of maternal mortality",
    reason: "REASON - Child marriage can lead to an increased risk of maternal mortality and other severe health complications for young girls."
  },
  {
    id: "4",
    question: "Which of the following strategies is commonly employed to combat child marriage?",
    options: [
      "Providing financial incentives for early marriages",
      "Implementing awareness programs on the harms of child marriage",
      "Encouraging child labor to delay marriage age"
    ],
    correct: "Implementing awareness programs on the harms of child marriage",
    reason: "REASON - Awareness programs educate communities about the harms of child marriage and advocate for legal reforms to combat it."
  },
];

// Event listener for restarting the quiz
restart.addEventListener("click", () => {
  initial(); // Call initial setup function
  displayContainer.classList.remove("hide"); // Show the display container
  scoreContainer.classList.add("hide"); // Hide the score container
});

// Event listener for the next button
nextBtn.addEventListener("click", displayNext = () => {
  questionCount += 1; // Increment the question count
  if (questionCount == quizArray.length) {
    // If all questions are answered
    displayContainer.classList.add("hide"); // Hide the display container
    scoreContainer.classList.remove("hide"); // Show the score container
    userScore.innerHTML = "Your score is " + scoreCount + " out of " + questionCount; // Display the user's score
  } else {
    countOfQuestion.innerHTML = (questionCount + 1) + " of " + quizArray.length + " Question"; // Update the question count display
    quizDisplay(questionCount); // Display the next question
    count = 31; // Reset the timer
    clearInterval(countdown); // Clear the previous timer
    timerDisplay(); // Start the new timer
  }
});

// Function to display the countdown timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--; // Decrement the timer count
    timeLeft.innerHTML = `${count}s`; // Update the timer display
    if (count == 0) {
      clearInterval(countdown); // Clear the timer if it reaches 0
      displayNext(); // Move to the next question
    }
  }, 1000); // Timer updates every second
};

// Function to display a quiz question
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid"); // Select all quiz cards
  quizCards.forEach((card) => {
    card.classList.add("hide"); // Hide all quiz cards
  });
  quizCards[questionCount].classList.remove("hide"); // Show the current question card
};

// Function to create the quiz questions and options
function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5); // Randomly sort the questions
  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5); // Randomly sort the options
    let div = document.createElement("div"); // Create a new div for the question card
    div.classList.add("container-mid", "hide"); // Add classes to the div
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question"; // Display the first question count
    let question_DIV = document.createElement("p"); // Create a paragraph for the question
    question_DIV.classList.add("question"); // Add a class to the paragraph
    question_DIV.innerHTML = i.question; // Set the question text
    div.appendChild(question_DIV); // Add the question to the div
    // Create buttons for the options and add them to the div
    div.innerHTML += `
      <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
    `;
    quizContainer.appendChild(div); // Add the question card to the quiz container
  }
}

// Function to check if the selected option is correct
function checker(userOption) {
  let userSolution = userOption.innerText; // Get the text of the selected option
  let question = document.getElementsByClassName("container-mid")[questionCount]; // Get the current question card
  let options = question.querySelectorAll(".option-div"); // Get all options for the current question

  if (userSolution === quizArray[questionCount].correct) {
    // If the selected option is correct
    userOption.classList.add("correct"); // Add the 'correct' class to the selected option
    scoreCount++; // Increment the score
  } else {
    userOption.classList.add("incorrect"); // Add the 'incorrect' class to the selected option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct"); // Mark the correct option
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

  clearInterval(countdown); // Clear the timer
  options.forEach((element) => {
    element.disabled = true; // Disable all options
  });
}

// Initial setup function
function initial() {
  quizContainer.innerHTML = ""; // Clear the quiz container
  questionCount = 0; // Reset the question count
  scoreCount = 0; // Reset the score count
  count = 31; // Reset the timer count
  clearInterval(countdown); // Clear any existing countdown
  timerDisplay(); // Start the timer
  quizCreator(); // Create the quiz questions
  quizDisplay(questionCount); // Display the first question
}

// Event listener for the start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide"); // Hide the start screen
  displayContainer.classList.remove("hide"); // Show the display container
  initial(); // Call initial setup function
});

// Page load event to hide the quiz and display the start screen
window.onload = () => {
  startScreen.classList.remove("hide"); // Show the start screen
  displayContainer.classList.add("hide"); // Hide the display container
};

// Cursor effect for the quiz page
const cursor = document.querySelector(".cursor"); // Select the custom cursor element
var timeout; // Variable to store the timeout ID

// Follow cursor on mouse move
document.addEventListener("mousemove", (e) => {
  let x = e.pageX; // Get the x-coordinate of the mouse
  let y = e.pageY; // Get the y-coordinate of the mouse
  cursor.style.top = y + "px"; // Set the top position of the cursor
  cursor.style.left = x + "px"; // Set the left position of the cursor
  cursor.style.display = "block"; // Display the cursor

  // Function to hide the cursor when the mouse stops moving
  function mouseStopped() {
    cursor.style.display = "none";
  }

  clearTimeout(timeout); // Clear the previous timeout
  timeout = setTimeout(mouseStopped, 1000); // Set a new timeout to hide the cursor
});

// Hide the cursor when the mouse leaves the window
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});
