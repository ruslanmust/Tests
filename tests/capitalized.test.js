import capitalized from '../src/capitalized.js';

if (capitalized('hello') !== 'Hello') {
    throw new Error('Функция работает неверно!');
  }
  
if (capitalized('') !== '') {
    throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!');