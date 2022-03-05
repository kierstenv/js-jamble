// const quiz = [
//   {
//     question: "Q1",
//     answers: ["a1", "b1", "c1", "d1"]
//   },
//   {
//     question: "Q2",
//     answers: ["a2", "b2", "c2", "d2"]
//   },
//   {
//     question: "Q3",
//     answers: ["a3", "b3", "c3", "d3"]
//   }
// ]

// const createQuestion = () => {
//   const questionHead = $("<h1>").text("Q");
//   const answers = $("<div>").addClass("d-inline-flex flex-column");
//   const ansA = $("<button>").attr("type", "button").addClass("btn m-1").text("a)");
//   const ansB = $("<button>").attr("type", "button").addClass("btn m-1").text("b)");
//   const ansC = $("<button>").attr("type", "button").addClass("btn m-1").text("c)");
//   const ansD = $("<button>").attr("type", "button").addClass("btn m-1").text("d)");
  
//   answers.append(ansA, ansB, ansC, ansD);
//   $("main").append(questionHead, answers)
// }

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
  const ansA = $("<button>").prop("type", "button").addClass("btn m-1").text("a) " + questionAns[0]);
  const ansB = $("<button>").prop("type", "button").addClass("btn m-1").text("b) " + questionAns[1]);
  const ansC = $("<button>").prop("type", "button").addClass("btn m-1").text("c) " + questionAns[2]);
  const ansD = $("<button>").prop("type", "button").addClass("btn m-1").text("d) " + questionAns[3]);
  
  answers.append(ansA, ansB, ansC, ansD);
  $("main").append(questionHead, answers);

  questionId++;
};

$("#start-quiz").click(() => {
  $("#start-quiz").remove();
  createQuestion();
});

$("main").on("click", "#answer-choice", () => {
  $("main").empty();
  createQuestion();
});

// $.inArray();