// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

    let x = 2
    console.log(x)

    for (let i = 1; i < 10; i++) {
     x *= 2
    console.log(x)
}


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function degree(x, n) {
    let result = x;
    console.log(result)

for (let i = 1; i < n; i++) {
    result *= x;
    console.log(result)
}
return result;
}
degree(2, 10);




// // Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :),
// //  во второй :):) и так далее
// //  Пример в консоли:
// // :)
// // :):)
// // :):):)
// // :):):):)
// // :):):):):)


let result = ':)';
console.log(result)

for (let i = 1; i < 5; i++) {
result += ':)'
console.log(result)
}


// // 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль 
// // (как в условии смайлик), а также количество строк для вывода 
// // e.g. function printSmile(stroka, numberOfRows)


function printSmile(x, n) {
    let result = x;
    console.log(result)

for (let i = 1; i < n; i++) {
    result += x;
    console.log(result)
}
return result;
}
printSmile(':)', 5);


// // 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, 
// // сколько в слове гласных, и сколько согласных букв.
// // e.g. function getWordStructure(word)
// // В консоли: 
// // Слово (word) состоит из  (число) гласных и (число) согласных букв

// // Проверки: 'case', 'Case', 'Check-list'


const getWordStructure = (word) => { 
         
    let vow = 0; 
    let cons = 0; 
    let sym = 0;
 
  
    for(let i = 0; i < word.length; i++){ 
        let el = word.toLowerCase()[i]; 
        if(el == 'a' || el == 'e' || el == 'i' || el == 'o' || el == 'u') 
            vow += 1;
            else if (el == '-');
        
    else
            cons += 1; 
            
    }; 
  
    console.log(`${'Слово '}${word}${' состоит из '}${vow}${' гласных и '}${cons}${' согласных'}`);
}
; 
 
getWordStructure('case'); 
getWordStructure('Case');
getWordStructure('Check-list');


// // 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// // e.g. function isPalindrom(word)

// // Проверки: 'abba', 'Abba'

function IsPalindrome(word) {
    word = word.toLowerCase();  
    return word == word.split('').reverse().join('');
  }
  console.log(IsPalindrome('abba'));
  console.log(IsPalindrome('Abba'));