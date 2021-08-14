"use strict";

/* 
alert -  выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмёт «ОК». 
promt - Она выводит модальное окно с заголовком title, полем для ввода текста, заполненным строкой по умолчанию 
default и кнопками OK/CANCEL. 
confirm - confirm выводит окно с вопросом question с двумя кнопками: OK и CANCEL. */


/* 
if (4 == 9){
    console.log('jdf');
} else{
    console.log('error');
}


if (num < 49){
    console.log('error');
}else if(num > 100){
    console.log("a lot");
}else{
    console.log('ok');
}

(num === 50) ? console.log('ok') : console.log('error'); */

/* const num = 50;

switch (num) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 50:
        console.log('ok');
        break;
    default:
        console.log('aaaa');
        break;
} */



/* while (num < 55){
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55); */

/* let num = 50;

for (let i = 1; i < 8; i++) {
    if (i === 6){
        continue;
    }

    console.log(i);
    
} */
/*  continue - похволяет пропускать шаг, котороый не нужен. break - полностью прирывает цикл. 
switch только для прямого сравнения */

/* let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 100;
    console.log(num);
}

showFirstMessage('h w');
console.log(num); */

/* function calc(a, b) {
    return a + b;
}

console.log(calc(3,78)); */

/* function ret() {
    let num = 50;
    return num ;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log('de')
};

logger();


const calc = (a, b) => a + b;

const calci = (a, b) => {
    console.log('54');
    return a + b;
}; */

/* const str = 'test';
const arr = [1,2,3];

console.log(str.toUpperCase());

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); */

/* первые два одинаковые, в аршументе указывается начало и конец строки, либо просто начало. в тертьем используется в первом аргументе указать с какого символа начинать и потом количество симвволов */

/* const logg = 'hello world';
console.log(logg.slice(6, 11));  
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));


const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test)); */