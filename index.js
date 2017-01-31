function iterativeLog(array) {
  array.forEach((currentValue, index) => {
    console.log(`${index}: ${currentValue}`)
  })
}

function iterate(callback) {
  var myArray = [1, 2, 3];
  myArray.forEach(callback);
  return myArray;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
