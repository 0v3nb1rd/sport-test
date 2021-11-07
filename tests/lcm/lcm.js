///! "№ 226" Данны натуральные числа m, n. Получить все их натуральные общие кратные, меньшие mn ///////////////
///! Given natural numbers m, n. Get all their natural least common multiples, less than mn ////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function numbersIcm(m, n) {
  // if (n <= 0 || m <= 0) return [];
  // const maxNum = String(m) + n; // --> concat numbers
  let res = [];
  for (let i = 1; i < 200; i++) {
    if (i % m === 0 && i % n === 0) {
      res.push(i); // --> Least Common Multiple (lcm)
    }
  }
  return res;
}

console.log(numbersIcm());

module.exports = numbersIcm;
