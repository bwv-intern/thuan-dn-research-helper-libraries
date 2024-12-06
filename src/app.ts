import _ from 'lodash';
import Big from 'big.js';

const sum = _.reduce([1, 2, 3], (acc, num) => acc + num, 0);
console.log('Check sum: ', sum);

const debouncedFunction = _.debounce(() => console.log('Function debounced'), 3000);
debouncedFunction();

let array1 = [
  [1, 2],
  [4, 5],
  [7, 8],
];
let newArray = _.flatten(array1);
console.log('original Array1: ', array1);
console.log('new Array: ', newArray);

const nestedArray = [1, [2, 3, [4], 5]];
const flattenedArray = _.flatten(nestedArray);
console.log('flattenedArray: ', flattenedArray);

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = _.uniq(arrayWithDuplicates);
console.log('uniqueArray: ', uniqueArray);

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { c: 2 }, a: 1 };
const isEqual = _.isEqual(obj1, obj2);
console.log('isEqual: ', isEqual);

const emptyArray = [1];
const isEmptyArray = _.isEmpty(emptyArray);
console.log('isEmptyArray: ', isEmptyArray);

const emptyObject = { a: 1 };
const isEmptyObject = _.isEmpty(emptyObject);
console.log('isEmptyObject: ', isEmptyObject);

const numbers = [2, 4, 6];
const groupedByFloor = _.groupBy(numbers, Math.floor);
console.log('Check group by: ', groupedByFloor);

const names = ['Alice', 'Bob', 'Charlie', 'Lucas'];
const ages = [30, 35, 25];
const zipped = _.zip(names, ages);
console.log('Check zipped: ', zipped);

Big.DP = 10;
Big.RM = Big.roundHalfUp;

let x = new Big(2);
let y = new Big(3);
let z = x.div(y);
z.sqrt();
z.pow(-3);
z.times(z);
z.times(z).round(10);
