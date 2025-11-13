const isAwesome = (names) => {
  const awesomeNames = names.map((name) => `${name} is awesome!`)
  return awesomeNames;
}

const namesArray = [`john`, `jim`, `janet`, `joseph`, `jesus`]

console.log(isAwesome(namesArray))