#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
// - add: addition
// - sub: subtraction
// - mul: multiplication
// - div: division

const calc = require('./lib/calculator');

const [,, op, aStr, bStr] = process.argv;

function usage() {
  console.error('Usage: node src/calculator.js <operation> <a> <b>');
  console.error('Operations: add, sub, mul, div');
  process.exit(1);
}

if (!op || !aStr || !bStr) {
  usage();
}

const a = Number(aStr);
const b = Number(bStr);
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: both operands must be numbers');
  process.exit(1);
}

try {
  let result;
  switch (op) {
    case 'add':
      result = calc.add(a, b);
      break;
    case 'sub':
      result = calc.sub(a, b);
      break;
    case 'mul':
      result = calc.mul(a, b);
      break;
    case 'div':
      result = calc.div(a, b);
      break;
    default:
      console.error(`Unknown operation: ${op}`);
      usage();
  }
  console.log(result);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(2);
}
