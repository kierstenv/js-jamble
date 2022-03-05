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

const createQuestion = () => {
  const questionHead = $("<h1>").text("Q");
  const answers = $("<div>").addClass("d-inline-flex flex-column");
  const ansA = $("<button>").attr("type", "button").addClass("btn m-1").text("a)");
  const ansB = $("<button>").attr("type", "button").addClass("btn m-1").text("b)");
  const ansC = $("<button>").attr("type", "button").addClass("btn m-1").text("c)");
  const ansD = $("<button>").attr("type", "button").addClass("btn m-1").text("d)");
  
  answers.append(ansA, ansB, ansC, ansD);
  $("main").append(questionHead, answers)
}
  
$("button, #start-quiz").click(() => {
  $("#start-quiz").remove();
  createQuestion();
});

$.each(quiz, function() {
  console.log(this.question)
  console.log(this.correctAns)
  console.log(this.incorrectAns)
  console.log(this.incorrectAns[0])
});