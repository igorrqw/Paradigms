// Задача №1
// Дан список целых чисел numbers. Необходимо написать в императивном стиле процедуру для
// сортировки числа в списке в порядке убывания. Можно использовать любой алгоритм сортировки.

const array = [2, 3, 6, 8, 9, 0, 1, 4, 5, 7];

function sortArray(arr) {
  if (arr.length < 2) return arr;
  let kernel = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (kernel < arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return sortArray(left).concat(kernel, sortArray(right));
}

console.log(sortArray(array));

// Задача №2
// Написать точно такую же процедуру, но в декларативном стиле

console.log(
  array.sort((a, b) => {
    return b - a;
  })
);
