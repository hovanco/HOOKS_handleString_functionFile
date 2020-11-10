// find perfect number
const handlePerfectNumber = (arrString) => {
  var arrPerfectNum = [];
  var total = 0;

  for (let j of arrString) {
    total = 0;
    for (let i = 1; i <= j / 2; i++) {
      if (j % i === 0) {
        total = total + i;
      }
    }
    console.log(total, j);
    if (total == j) {
      arrPerfectNum.push(j);
    }
  }
  return arrPerfectNum.join();
};

// find prime number
const handlePrimeNumber = (arrString) => {
  var arrPrimeNum = [];
  let isT = 0;
  for (let j of arrString) {
    isT = 0;
    for (var i = 2; i <= j / 2; i++) {
      if (j % i === 0) {
        isT++;
        break;
      }
    }
    if (isT === 0) {
      arrPrimeNum.push(j);
    }
  }
  return arrPrimeNum.join();
};

export { handlePerfectNumber, handlePrimeNumber };
