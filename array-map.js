const numbers = [1, 2, 3, 4, 5, 6, 7];

function getDoubles(numbers) {
  const output = [];

  for (const nuber of numbers) {
    const doubled = doubleIt(number);

    output.push(doubled);
  }
  return output;
}

const doubleIt = (num) => num * 2;

const makeDouble = numbers.map(doubleIt);

const makeDoubleDirect = numbers.map((num) => num * 2);

const makeDouble2 = numbers.map((x) => x * 2);

console.log(makeDoubleDirect);

const fiveTimes = [1, 2, 3, 4, 5].map((x) => x * 5);

console.log(fiveTimes);

// function doubleIt(number)
// {

// return numbe *2;

// }
