function map(sourceArray, value){
    let newArray = []
    sourceArray.forEach(a => newArray.push(value(a)))
    return newArray
}

function reduce(arr, callback, start) {
    let accumulator = start ? start : arr[0];
    let i = start ? 0 : 1;
  
    for (; i < arr.length; i++) {
      accumulator = callback(arr[i], accumulator);
    }
  
    return accumulator;
  }
