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
const slicedBegin = numberArray.slice(0, 3);

console.log(slicedBegin);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// const numberArray = [1, 2, 3, 4, 5];
const slicedEnd = numberArray.slice(-2);

console.log(slicedEnd);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const numberArraySplice1 = [1, 2, 3, 4, 5];
const removedFromArraySplice1 = numberArraySplice1.splice(1, 2);

console.log(numberArraySplice1);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const numberArraySplice2 = [1, 2, 3, 4, 5];
const removedFromArraySplice2 = numberArraySplice2.splice(1, 3);

console.log(removedFromArraySplice2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const numberArraySplice3 = [1, 2, 3, 4, 5];
const addedToArraySplice3 = numberArraySplice3.splice(3, 0, "a", "b", "c");

console.log(numberArraySplice3);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const numberArraySplice4 = [1, 2, 3, 4, 5];
const firstAddToArraySplice4 = numberArraySplice4.splice(1, 0, "a", "b");
const secondAddToArraySplice4 = numberArraySplice4.splice(6, 0, "c");
const thirdAddToArraySplice4 = numberArraySplice4.splice(8, 0, "e");

console.log(numberArraySplice4);

//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const toBeSortedArray = [3, 4, 1, 2, 7];

console.log(toBeSortedArray.sort());

//Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет

/**
 * *
 * @param {string} string
 * @param {array} array
 * @returns {boolean} true if has string in value
 */
const string = "hello";
const array = ["hi", "hello"];
const hasElem = function (stringValue, arrayOfThings) {
  for (let i = 0; i < arrayOfThings.length; i++) {
    if (stringValue === arrayOfThings[i]) {
      return true;
    }
  }
  return false;
};
console.log(hasElem(string, array));

//Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.
