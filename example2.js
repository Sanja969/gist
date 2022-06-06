const greet = (message, name) => {
  console.log(`${message}, ${name}!`)
}

greet('Hello', 'John');
greet('Hola', 'Antonio');
greet('Ciao', 'Luigi')


"code is dry - great function is made with message and name property, we will call function every time with unique name and message"