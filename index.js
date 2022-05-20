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
