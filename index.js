const isAwesome = (names) => {
  const awesomeNames = names.map((name) => `${name} is awesome!`);
  return awesomeNames;
}

const namesArray = [`john`, `jim`, `janet`, `joseph`, `jesus`]

console.log(isAwesome(namesArray));

const getBigNumbers = (numbers) => {
  const bigNumbers = numbers.filter((number) => number > 10);
  return bigNumbers;
}

const numArray = [1, 25, 10, 14, 5, 3, -6, 11, 8, 167, 9, 50, 2]

console.log(getBigNumbers(numArray));