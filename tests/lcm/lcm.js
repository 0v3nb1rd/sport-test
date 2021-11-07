///! "№ 226" Данны натуральные числа m, n. Получить все их натуральные общие кратные, меньшие mn ///////////////
///! Given natural numbers m, n. Get all their natural least common multiples, less than mn ////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function numbersIcm(m, n) {
  let res = [];
  for (let i = 1; i < m * n; i++) {
    if (i % m === 0 && i % n === 0) {
      res.push(i); // --> Least Common Multiple (lcm)
    }
  }
  return res;
}

module.exports = numbersIcm;
