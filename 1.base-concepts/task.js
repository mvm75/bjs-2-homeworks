"use strict"

function solveEquation(a, b, c) {
  let arr;
  const discriminant = b ** 2 - 4 * a * c;
  
  if (discriminant > 0) {
    arr = [((-b + Math.sqrt(discriminant))/(2*a)), ((-b - Math.sqrt(discriminant))/(2*a))];
  } else {
    if (discriminant === 0) {
      arr = [-b/(2*a)];
    } else {
      arr = [];
    }
  }
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(percent)) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }

  if (isNaN(contribution)) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  }

  if (isNaN(amount)) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }

  const loanBody = amount - contribution;
  let months;
  let today = new Date();

  months = (date.getFullYear() - today.getFullYear()) * 12;
  months -= today.getMonth();
  months += date.getMonth();
  months <= 0 ? 0 : months;

  const p = percent /(100*12);
  const monthsPay = loanBody * (p + (p / ((Math.pow((1 + p), months) - 1))));

  totalAmount = Number((months * monthsPay).toFixed(2));
  console.log(totalAmount);  

  return totalAmount;
}
