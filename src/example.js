// This file has intentional linting errors
const unusedVar = 'this is unused'; // no-unused-vars error

function example() {
  console.log('Hello world'); // no-console warn
  let str = "double quotes"; // quotes error
  let num = 10 // semi error
  return str + num;
}

example();