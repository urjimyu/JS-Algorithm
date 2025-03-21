const path = require('path');
const filePath = path.join(__dirname, 'test.txt');

const [inputs, ...combis] = require('fs')
  //   .readFileSync('./dev/stdin')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

inputs = Number(inputs);
combis = combis;
