function merge(a, b) {
  const lenA = a.length;
  const lenB = b.length;
  let ptrA = 0;
  let ptrB = 0;
  const acc = [];
  while (ptrA < lenA || ptrB < lenB) {
    if (ptrA < lenA && ptrB < lenB) {
      if (a[ptrA] < b[ptrB]) {
        acc.push(a[ptrA]);
        ptrA++;
      } else {
        acc.push(b[ptrB]);
        ptrB++;
      }
    } else if (ptrA < lenA) {
      acc.push(a[ptrA]);
      ptrA++;
    } else {
      acc.push(b[ptrB]);
      ptrB++;
    }
  }
  return acc;
}

function mergeSort(arr) {
  console.log("sorting: ", arr);
  if (arr.length <= 1) {
    return arr;
  }
  mid = Math.floor(arr.length / 2);
  const a = arr.slice(0, mid);
  const b = arr.slice(mid);
  const sortedA = mergeSort(a);
  const sortedB = mergeSort(b);
  const result = merge(sortedA, sortedB);
  return result;
}

module.exports = { merge, mergeSort };
