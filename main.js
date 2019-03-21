const { readFileSync } = require('fs');

const run = async () => {
  const buffer = readFileSync('./main.wasm');
  const module = await WebAssembly.compile(buffer);
  const instance = await WebAssembly.instantiate(module);
  console.log(instance.exports.helloWorld());
  console.log(instance.exports.double(3));
  console.log(instance.exports.quadruple(4));
  console.log(instance.exports.areaOfCircle(10));
};

run();