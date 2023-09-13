//Задание1
let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);

//Задание2
let myAge = 34;
let secInMin = 60;
let minInHour = 60;
let HourInDay = 24;
let DayInYear = 365;
let myAgeInSeconds = myAge * secInMin * minInHour * HourInDay * DayInYear;
console.log (myAgeInSeconds);

//Задание3 Создайте две переменные. Поместите в них переменную count и превратите в
//строку, а userName наоборот в число. Попробуйте реализовать задачу двумя
//разными способами
let count = 42;
let userName = '42';
//Способ1
console.log(String(count), +userName);
//Способ2
console.log(count + '' , Number(userName));

//Задание4 Имеется три переменные: Сложите переменные так, чтобы в результате получилось выражение: 12 белых
//медведей и результат выведите в консоль
let a = 1;
let b = 2;
let c = 'белых медведей';
console.log(String(a) + String(b) + ' ' + c);

//Задание5 
//Создайте переменные и поместите в них нижеприведенные слова. Затем
//создайте еще одну переменную lengthWords и посчитайте в ней длину всех слов
//из списка:
let a = "доступ";
let b = "морпех";
let c = "наледь";
let d = "попрек";
let e = "рубило";
let lengthWords = (a + b + c + d + e);
console.log(lengthWords.length);

//Задание6 
//Создать 3 переменные разных типов и вывести в консоль для каждой из них
//строку следующего вида:
//`Variable: %variable name% have type: %type variable%`
let randomNumber = 42;
let haveType = typeof randomNumber;
let result = 'Variable': %variable name% 'have type' : %haveType%
console.log(result);

//!!не понял как сделать 6 задание.

//Задание7
//Запросить у пользователя имя и возраст и вывести их в консоль.
let Name = prompt('Имя');
let Age = prompt('Возраст');
console.log(Name, Age);
