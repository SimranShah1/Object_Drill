const keys = require('../problem/problemKeys');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const result = keys(testObject);
console.log(result);