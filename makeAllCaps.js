function makeAllCaps(array) {
  return new Promise((resolve, reject) => {
    if (array.every(item => typeof item === 'string')) {
      const capitalizedArray = array.map(item => item.toUpperCase());
      resolve(capitalizedArray);
    } else {
      reject('Array contains non-string elements');
    }
  });
}

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
  .then(makeAllCaps)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) });

makeAllCaps(complicatedArray)
  .then(makeAllCaps)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) });
