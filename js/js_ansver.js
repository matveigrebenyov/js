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

/* первые два одинаковые, в аргументе указывается начало и конец строки, либо просто начало. в тертьем используется в первом аргументе указать с какого символа начинать и потом количество симвволов */

/* const logg = 'hello world';
console.log(logg.slice(6, 11));  
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));


const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test)); */

/* function first(){
    setTimeout(function(){
        console.log(1);
    }, 500);
}
function second(){
    console.log(2);
}

first();
second();

function learnJS(lang, callback){
    console.log(`я учу:${lang}`);
    callback();
}

function done() {
    console.log('я прошёл этт урок');
}

learnJS('JS', done); */


/* const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border:'black',
        bg: 'red'
    },
    maketest: function(){
        console.log('test');
    }
};

options.maketest();

const {border, bg} = options.colors; //деструктуризация
console.log(border);

console.log(Object.keys(options).length); */

//console.log(options.name);

/* delete options.name;

console.log(options); */

/* let counter = 0;

for (let key in options){
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    }else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
    
}
console.log(counter); */


/* const arr = [12, 2, 37, 4, 5];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){
    return a -b;
} */
/* arr[99] = 0;
console.log(arr.length); */ 

/* arr.forEach( function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

/* arr.pop();
arr.push(10);

console.log(arr); */

/* for ( let i =0; i < arr.length; i++){
    console.log(arr[i]);
} */

/* for ( let value of arr){
    console.log(value);
} */

/* const str = prompt("", "");
const product = str.split(', '); // создаёт массив их строки через разделитель, который указывается в скобках
product.sort();
console.log(product.join('; ')); */ // объединяет обратно массив в строку


/* let a = 5,
    b = a;
b += 5;

console.log(b);
console.log(a);

const obj = {
    a : 5,
    b : 1
}; */

/* const copy = obj; // здесь передаётся не сам объект, а только ссылка на него

copy.a =10;
console.log(copy);
console.log(obj); */

/* function copy(mainObj){  // поверхностная копия объекта
    let objCopy ={};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a:2,
    b:5,
    c: {
        x:7,
        y:4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10; */
/* newNumbers.c.x =10; */
/* console.log(newNumbers);
console.log(numbers); */

/* const add = {
    d:17,
    e:64
}; */
/* console.log(Object.assign(numbers, add)); // объединение объектов */
/* const clone = Object.assign({}, add);
clone.d = 20; */
/* console.log(add);
console.log(clone); */

/* const oldArr = ['a', 'b', 'm'];
const newArr = oldArr.slice();


newArr[1] = 'asasd';
console.log(newArr);
console.log(oldArr);


const video = ['yt', 'vimeo', 'retube'],
      blogs = ['wordpress', 'livejournell', 'blogger'],
      internet = [...video, ...blogs, 'vk'];

console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];

log(...num);


const array = ['a', 'v'];

const newArray = [...array];


const q ={
    one:1,
    two:2
};

const newObj = {...q}; */



/* let str = 'som';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));


console.dir([1,2,3]);

const soldier = {
    health:400,
    armor:100,
    sayHello: function(){
        console.log('hell');
    }
}; */

/* const jon = Object.create(soldier); */

/* const jon = {
    health:100
};
 */
/* 
Object.setPrototypeOf(jon, soldier); */

/* jon.sayHello(); */





