const { readFileSync, writeFileSync } = require('fs');
const wabt = require("wabt")();


const inputPath = './main.wat';
const outputPath = './main.wasm';

const wasmModule = wabt.parseWat(inputPath, readFileSync(inputPath, 'utf8'));
const { buffer } = wasmModule.toBinary({});

writeFileSync(outputPath, new Buffer.from(buffer));