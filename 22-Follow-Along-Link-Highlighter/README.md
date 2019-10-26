# Notes

- `this.getBoundingClientRect()` to get where exactly on the page the element "lives"
- This technique consists of adding one `<span>` to the DOM that is going to have its width, height and position set on the `mouseenter` DOM event
- Position is set with CSS `transform` property and `translate()` function
- Animation is given by `transition: all 0.2s;`