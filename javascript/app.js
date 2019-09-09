var audio = new Audio("./assets");
var time = 130;
var lap = 1;

window.onload = function() {
  intervalId = setInterval(count, 1000);
};

function count() {
  time--;
  console.log(time);
  $("#display").text(time);
  stop();
}


function stop() {
  if (time <= 0) {
    clearInterval(intervalId);
    clockRunning = false;
  }
}

(function() {
  const myQuestions = [
    {
      question: "When is the first appearance of Mario ?",
      answers: {
        a: "Mario Bros",
        b: "Super Mario Bros",
        c: "Donkey Kong"
      },
      correctAnswer: "c"
    },
    {
      question: "Mario breaks blocks with his head or fist ?",
      answers: {
        a: "Head",
        b: "Fist"
      },
      correctAnswer: "b"
    },
    {
      question:
        "The blue Mario lookalike causing mischief in Super Mario Sunshine was actually...",
      answers: {
        a: "Magikoopa/Kamek",
        b: "an evil Toad",
        c: "a robot",
        d: "Bowser Jr."
      },
      correctAnswer: "d"
    },
    {
      question:
        "The Super Mario franchise is the best-selling video game franchise of all time.",
      answers: {
        a: "true",
        b: "false"
      },
      correctAnswer: "a"
    },
    {
      question:
        "The blue Mario lookalike causing mischief in Super Mario Sunshine was actually...",
      answers: {
        a: "Princess Peach is his mom",
        b: "Toad is a spy for Bowser",
        c: "Bowser is retiring from evil",
        d: "He wanted to join Mario's team"
      },
      correctAnswer: "a"
    },
    {
      question:
        "According to the Super Mario Super Show, this is how Mario and Luigi got to the Mushroom Kingdom.",
      answers: {
        a: "A magic spell",
        b: "In their dreams",
        c: "Through a haunted house",
        d: "Sucked down a drain"
      },
      correctAnswer: "d"
    }
  ];

  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
        );
      }

      output.push(
        `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
      } else {
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();







