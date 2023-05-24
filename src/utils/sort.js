export const sort = (arr = []) => {
  let flag = false;
  if (arr.length == 0 || arr.length == 1) return arr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      const x = arr[i];
      const y = arr[i + 1];
      arr[i + 1] = x;
      arr[i] = y;
      flag = true;
    }
  }
  if (flag) {
    sort(arr);
  }
  return arr;
};

export const bubbleSort = (arr = []) => {
  if (arr.length == 0 || arr.length == 1) return arr;
  let swapped;
  do {
    swapped = false;
    arr.forEach((number, index) => {
      if (number > arr[index + 1]) {
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        swapped = true;
      }
    });
  } while (swapped);
  return arr;
};

export const insertionSort = (arr = []) => {
  if (arr.length == 0 || arr.length == 1) return arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        arr.splice(j, 0, arr.splice(i, 1)[0]);
      }
    }
  }
  return arr;
};

export const mergeSort = (arr = []) => {
  if (arr.length == 0 || arr.length == 1) return arr;
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left = [], right = []) => {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
};
