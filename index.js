"use strict";

//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayConcat = array1.concat(array2);

console.log(arrayConcat);

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const normalArray = [1, 2, 3];
console.log("normal array: ", normalArray);

const reversedArray = normalArray.reverse();
console.log("reversed array: ", reversedArray);

console.log("normal array: ", normalArray);

//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const initialArray = [1, 2, 3];
const total = initialArray.push(4, 5, 6);

console.log(initialArray);
console.log(total);

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const smallArray = [1, 2, 3];

console.log(smallArray.unshift(4, 5, 6));
console.log(smallArray);

//Дан массив ['js', 'css', ‘html']. Выведите на экран первый элемент и удалите его.
const languageArray = ["js", "css", "html"];
const shifted = languageArray.shift();

console.log(shifted);
console.log(languageArray);

// Дан массив ['js', 'css', ‘html']. Выведите на экран последний элемент и удалите его.
const languageArray2 = ["js", "css", "html"];
const popped = languageArray2.pop();

console.log(popped);
console.log(languageArray2);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const numberArray = [1, 2, 3, 4, 5];
const sliced = numberArray.slice(0,3);

console.log(sliced);
