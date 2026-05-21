#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
// - add: addition
// - sub: subtraction
// - mul: multiplication
// - div: division

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

let result;
switch (op) {
  case 'add': // addition
    result = a + b;
    break;
  case 'sub': // subtraction
    result = a - b;
    break;
  case 'mul': // multiplication
    result = a * b;
    break;
  case 'div': // division
    if (b === 0) {
      console.error('Error: division by zero');
      process.exit(2);
    }
    result = a / b;
    break;
  default:
    console.error(`Unknown operation: ${op}`);
    usage();
}

// Print concise result
console.log(result);
