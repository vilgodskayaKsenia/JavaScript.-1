//Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)

var event, ok;
var userAnswers = [];


event = getAnswer(works.a00, [works.a1, works.a2], 1);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        event = getAnswer(works.b00, [works.b1, works.b2], 2);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                event = getAnswer(works.d00, [works.d1, works.d2], 3);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        event = getAnswer(works.c00, [works.c1, works.c2], 2);
        switch (event) {
            case 1: // Второе действие
            case 2: // Второе действие
                event = getAnswer(works.d00, [works.d1, works.d2], 3);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

var step = +prompt("Введите номер шага, чтобы получить ответ");
if(isAnswer(3,step)) {
   alert("Ваш ответ на вопрос - " + userAnswers[step]); 
}


//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

function getAnswer(question,answers,step){
    do {
        ok = false;
        var answersStr = '';
        for(var i= 0; i < answers.length; i++){
            answersStr+=answers[i];
        }
        event = +prompt(question + answersStr + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(answers.length, event);
        }
    } while (!ok);
    userAnswers[step] = answers[event-1];
    return event;
}

