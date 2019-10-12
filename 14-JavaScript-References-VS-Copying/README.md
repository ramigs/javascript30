# Notes

- strings, numbers, and booleans copy the values and not the references
- with arrays the reference is shared, pointing to the same array
- to copy the array we can use `slice` with no arguments 
- or `[].concat(players)`
- or ES6 Spread `[...players]`;
- or `Array.from(players)`
- objects also share the reference
- we can use `Object.assign()` to make a copy
- `Object.assign()` only copies one level deep, the rest of the levels share the reference
- `JSON.parse(JSON.stringify(ramigs))` a trick to make a full copy, the "poor man's" deep clone


