let player = {
  name: "",
  score: 0
};

const quiz = [
  {
    question: "Q1",
    correctAns: "yay",
    incorrectAns: ["b1", "c1", "d1"]
  },
  {
    question: "Q2",
    correctAns: "yay",
    incorrectAns: ["b2", "c2", "d2"]
  },
  {
    question: "Q3",
    correctAns: "yay",
    incorrectAns: ["b3", "c3", "d3"]
  },
  {
    question: "Q4",
    correctAns: "yay",
    incorrectAns: ["b4", "c4", "d4"]
  },
  {
    question: "Q5",
    correctAns: "yay",
    incorrectAns: ["b5", "c5", "d5"]
  },
  {
    question: "Q6",
    correctAns: "yay",
    incorrectAns: ["b6", "c6", "d6"]
  },
  {
    question: "Q7",
    correctAns: "yay",
    incorrectAns: ["b7", "c7", "d7"]
  },
  {
    question: "Q8",
    correctAns: "yay",
    incorrectAns: ["b8", "c8", "d8"]
  },
  {
    question: "Q9",
    correctAns: "yay",
    incorrectAns: ["b9", "c9", "d9"]
  },
  {
    question: "Q10",
    correctAns: "yay",
    incorrectAns: ["b10", "c10", "d10"]
  }
]

let questionId = 0;

const startQuiz = () => {
  $("#start-quiz").remove();
  $("#main").empty();
  questionId = 0;

  createQuestion();
  $(".timer").append($("<span>").addClass("countdown").text("100"));
  timer;
};

const createQuestion = function() {
  if(questionId < quiz.length) {
    const question = quiz[questionId].question;
    const questionAns = quiz[questionId].incorrectAns;
    
    const randomIndex = function(max) {
      return Math.floor(Math.random() * max);
    };
    // randomized question answer choices
    questionAns.splice(randomIndex(questionAns.length + 1), 0, quiz[questionId].correctAns);
  
    const questionHead = $("<h1>").text(question);
    const answers = $("<div>").attr("id", "answer-choice").addClass("d-inline-flex flex-column");
    const ansChoices = ["a)", "b)", "c)", "d)"];
    
    ansChoices.forEach((choice, index) => {
      const ansButton = $("<button>").prop("type", "button").addClass("btn m-1").text(choice + " " + questionAns[index]);
  
      if (questionAns[index] === quiz[questionId].correctAns) {
        ansButton.addClass("correct-ans");
        // console.log(ansButton.attr("class"));
      }
  
      answers.append(ansButton);
    });
  
    $("main").append(questionHead, answers);
  
    questionId++;
  } else {
    endQuiz();
  }
};

const beginTimer = () => {
  let timerStr = $("span.countdown").text();
  let timerInt = parseInt(timerStr);
  $("span.countdown").text(String(timerInt - 1));
  
  if (timerInt <= 1) {
    endQuiz();
  };

  return timerStr;
};

const countdown = setInterval(beginTimer, 1000); // BUG countdown starts 2 fast every other reload

const timerHandler = (event) => {
  const target = $(event.target);
  const addTime = parseInt($("span.countdown").text()) + 4
  const subtractTime = parseInt($("span.countdown").text()) - 10

  if (target.hasClass("correct-ans")) {
    $("span.countdown").text(addTime);
  } else {
    $("span.countdown").text(subtractTime);
  }
};

const endQuiz = () => {
  player.score = parseInt($("span.countdown").text());

  clearInterval(countdown);
  $("span.countdown").remove();
  $("main").empty();
  
  if (player.score > 0) {
  $("main").append("<h1>Congrats! You've completed the quiz.</h1>");

  const resultsBtn = $("<button>").prop("type", "button").addClass("btn")
  .text("Proceed to Results")
  .click(() => {
    $("main").empty();
    $("main").append("<h1>Your Score: " + player.score + " points!</h1>");
    $("main").append(retakeBtn);
  });

  const retakeBtn = $("<button>").prop("type", "button").addClass("btn")
  .prop("id", "start-quiz")
  .text("Retake Quiz")
  .click(() => {
    startQuiz();
  });

  $("main").append(resultsBtn);
  } else {
    $("main").append("<h1>You've failed the quiz. Better luck next time!</h1>");

    $("main").append(retakeBtn);
  }
};

$("#start-quiz").click(() => {
  startQuiz();
});

$("main").on("click", "#answer-choice", () => {
  $("main").empty();
  createQuestion();
});

$("main").on("click", "#answer-choice", timerHandler);


