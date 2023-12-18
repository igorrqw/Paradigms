/*Ваша задача
Написать программу на любом языке в любой парадигме для
бинарного поиска. На вход подаётся целочисленный массив и
число. На выходе - индекс элемента или -1, в случае если искомого
элемента нет в массиве.
*/

let binarySearch = function (arr, number) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === number)
      return ` Индекс элемента ${mid} искомый элемент ${arr[mid]}`;
    else if (arr[mid] < number) start = mid + 1;
    else end = mid - 1;
  }
};

let arr = [6, 7, 12, 9, 4, 5, 8, 2];
let number = 6;

if (!arr.includes(number)) {
  console.log(`Число ${number} отсутствует `);
} else {
  console.log(binarySearch(arr, number));
}
