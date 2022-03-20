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
  }
]

let questionId = 0;

const createQuestion = function() {
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
  
  ansChoices.forEach(choice => {
    console.log(ansChoices.indexOf(choice))
    // $("<button>").prop("type", "button").addClass("btn m-1").text(choice + questionAns[indexOf(choice)]);

    // answers.append(choice);
  });

  // const ansA = $("<button>").prop("type", "button").addClass("btn m-1").text("a) " + questionAns[0]);
  // const ansB = $("<button>").prop("type", "button").addClass("btn m-1").text("b) " + questionAns[1]);
  // const ansC = $("<button>").prop("type", "button").addClass("btn m-1").text("c) " + questionAns[2]);
  // const ansD = $("<button>").prop("type", "button").addClass("btn m-1").text("d) " + questionAns[3]);
  
  // answers.append(ansA, ansB, ansC, ansD);
  $("main").append(questionHead, answers);

  questionId++;
};

const beginTimer = () => {
  let timerStr = $("span.countdown").text();
  let timerInt = parseInt(timerStr);
  $("span.countdown").text(String(timerInt - 1));
  
  if (timerInt == 1) {
    clearInterval(countdown);
  };
};

const countdown = setInterval(beginTimer, 1000); // BUG countdown starts 2 fast every other reload

// const addTime = (beginTimer)

const timerHandler = (event) => {
  const target = $(event.target);
  console.log(target);
  // if ()
  // timerStr -= 10;
}

$("#start-quiz").click(() => {
  $("#start-quiz").remove();
  createQuestion();
  $(".timer").append($("<span>").addClass("countdown").text("100"));
  beginTimer;
});

$("main").on("click", "#answer-choice", () => {
  $("main").empty();
  createQuestion();
});

$("main").on("click", "#answer-choice", timerHandler);