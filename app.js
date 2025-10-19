const questions =[
    {
        question:"Who is the current prime minister of Nepal?",
        answers:[
            {text:"KP Chor",correct:false},
            {text:"Deuba",correct:false},
            {text:"Prachanda",correct:false},
            {text:"Sushila Karki",correct:true},
        ]
    },
    {
        question:"When did genZ andolan started in Nepal?",
        answers:[
            {text:"23rd September",correct:true},
            {text:"24h October",correct:false},
            {text:"20th July",correct:false},
            {text:"30th september",correct:false},
        ]
    },
    {
        question:"Where is ICC T20 worldcup going to held?",
        answers:[
            {text:"India and Nepal",correct:false},
            {text:"India and China",correct:false},
            {text:"India and Srilanka",correct:true},
            {text:"India and Maldives",correct:false},
        ]
    }
];
const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answers");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
        button.addEventListener("click",selectAnswer);
    
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();