///! "№ 86-б" Данно натуральное число n. Чему равна сумма его цифр? //////////
///! What is the sum of the digits of natural numbers //////////////////////
///////////////////////////////////////////////////////////////////////////

function sum(num = 0) {
  return (
    Number(num) &&
    [...`${Math.abs(num)}`].reduce((prev, acc) => +acc + +prev, 0)
  );
}

module.exports = sum;
