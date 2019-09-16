# Notes

- `console.table()`: cool way to print objects
- When the `sort()` function compares two values, it sends the values to the
  compare function, and sorts the values according to the returned (negative,
  zero, positive) value.
    - If the result is negative `a` is sorted before `b`.
    - If the result is positive `b` is sorted before `a`.
    - If the result is zero no changes are done with the sort order of the two
      values.
- `querySelectorAll()` returns `NodeList`, so it has to be converted to `Array`
before being filtered.
    - `Array.from()` or spread operator `[...]` both work.
- JavaScript strings can be compared alphabetically using inequality operators `<` and `>`
- Using `reduce()` to return an object with dynamically created properties. We
  still need to initialize the property's counter with `0` if it doesn't exist
  yet. `callback` function has to return the object and initial value of
  `sort()` is an empty object `{}`
