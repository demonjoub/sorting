import { generateCid, verifyCid } from './utils/cid';
import { bubbleSort, sort, insertionSort, mergeSort } from './utils/sort';

console.time('recursive sorting');
console.log(sort([7, 12, 1, 2, 6, 3, 4, 5, 2]));
console.timeEnd('recursive sorting');
console.log('\n');
console.time('bubbleSort');
console.log(bubbleSort([7, 12, 1, 2, 6, 3, 4, 5, 2]));
console.timeEnd('bubbleSort');
console.log('\n');
console.time('insertionSort');
console.log(insertionSort([7, 12, 1, 2, 6, 3, 4, 5, 2]));
console.timeEnd('insertionSort');
console.log('\n');
console.time('mergeSort');
console.log(mergeSort([7, 12, 1, 2, 6, 3, 4, 5, 2]));
console.timeEnd('mergeSort');
console.log('\n');
console.log('Check cid: 1319001913429', verifyCid(1319001913429));
const digitalNumber = generateCid();
console.log(
  `Generate cid: ${digitalNumber} check cid:`,
  verifyCid(digitalNumber)
);
