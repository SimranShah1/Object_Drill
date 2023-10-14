const defaults = require('../problem/problemDefaults');
const testObject = { name:undefined , age: 36, location: 'Gotham' };
const defaultProps = { name: 'simran', age: 25, address: "33ABC" };

const result = defaults(testObject, defaultProps);
console.log(result);