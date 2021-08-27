import { strict as assert } from 'assert';
import capitalized from '../src/capitalized.js';

assert(capitalized('hello') === 'Hello');
  
assert(capitalized('') === '');

console.log('Все тесты пройдены!');