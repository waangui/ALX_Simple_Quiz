

function checkAnswer(){
    const correctAnswer = "4";
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked')
    const userAnswer = selectedAnswer.value ;
    const feedbackElement = document.getElementById('feedback');

    // compare answers

   if (userAnswer === correctAnswer){
        feedbackElement.textContent = "Correct! Well done."
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!"
    }
 
}

// Add eventlistener to submit button

document.querySelector('submit-answer').addEventListener('click', checkAnswer);

