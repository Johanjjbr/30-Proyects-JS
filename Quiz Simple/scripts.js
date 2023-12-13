const questions = [
    {question: "Cual es el animal mas largo del mundo",
        answer:[
        {text: "Tiburon Blanco", correct: false},
        {text: "Ballena azul", correct: true},
        {text: "Jirafa", correct: false},
        {text: "Yeti", correct: false},
        ]
        },
        {question: "Cual es el Pais mas pequeño del mundoo",
        answer:[
        {text: "El Vaticano", correct: true},
        {text: "Tailandia", correct: false},
        {text: "Senegal", correct: false},
        {text: "Maracaibo", correct: false},
        ]
        },
        {question: "De donde son los Tequeños",
        answer:[
        {text: "Tequelandia", correct: false},
        {text: "Los Teques", correct: true},
        {text: "Tequeño City", correct: false},
        {text: "Tequeñolandia", correct: false},
        ]
        },
        {question: "En que pelicula de Disney sale Evangeline ",
        answer:[
        {text: "Rampuzel", correct: false},
        {text: "Moana", correct: false},
        {text: "Frozen", correct: false},
        {text: "La Princesa y el Sapo", correct: true},
        ]
        }
    ];

    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz(){
        currentQuestionIndex=0;
        score=0;
        nextButton.innerHTML="Next";
        showQuestion();
    }

    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex +1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

        currentQuestion.answer.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML= answer.text;
            button.classList.add("btn");
            answerButton.appendChild(button);
            if (answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
            
        });
    }


    function resetState(){
        nextButton.style.display = "none";
        while (answerButton.firstChild) {
            answerButton.removeChild(answerButton.firstChild);            
        }
    }

    function selectAnswer (e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if (isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButton.children).forEach(button => {
            if (button.dataset.correct === "true"){
                button.classList.add("correct");
            }    
            button.disabled = true;
        });
        nextButton.style.display="block";
    }

function showScore(){
resetState();
questionElement.innerHTML = `Tu puntuacion es de ${score} de las ${questions.length}!`;
nextButton.innerHTML ="Hacerlo de Nuevo"
nextButton.style.display = "block";

}

function handleNextButton (){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
}

    nextButton.addEventListener("click", ()=>{
        if (currentQuestionIndex < questions.length){
            handleNextButton();
        } else {
            startQuiz();
        }    }  
    )

    startQuiz();

