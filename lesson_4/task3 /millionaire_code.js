//*На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

var currentPrize = 0;

for(var tourIndex in questions){
    var tour = questions[tourIndex];
    var answer = getAnswer(tour.question, tour.answers);
    if(answer == -1){
        alert("Вы забираете " + currentPrize + " рублей :(");
        break;
    } 
    if(answer == tour.correctAnswerNumber) {
        currentPrize = tour.prize;
        if(tourIndex == questions.length - 1) {
            alert("Вы стали миллионером! Поздравляем!");
        } else {
            alert("Ваш выигрыш достиг " + tour.prize + " рублей!");
        }
    } else {
        alert("Неправильный ответ! Вы самое слабое звено! Прощайте!");
        break;
    }
}



function isAnswerCorrect(max, answer) {
    if (isNaN(answer) || !isFinite(answer)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (answer < 1 || answer > max) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

function getAnswer(question,answers){
    var ok;
    do {
        ok = false;
        var answersStr = '';
        for(var i= 0; i < answers.length; i++){
            answersStr += "\n" + (i+1) + " - " + answers[i];
        }
        answer = +prompt(question + answersStr + '\n-1 - Забрать деньги');
        if (answer == -1) {
            break;
        }
        else {
            ok = isAnswerCorrect(answers.length, answer);
        }
    } while (!ok);
    return answer;
}

