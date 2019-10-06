# Notes

- DOM event `scroll`
- Using a `debounce` function to control the number of times a function is executed
- `debounce` prevents listener to fire the function every time the event occurs
- Scroll and resize are good candidates for `debounce` because the number of times those activities execute can significantly impact the browser's performance.
- `window.scrollY` to get the number of pixels scrolled down from the top
- Adding `window.innerHeight` to `window.scrollY` gives us the pixel level for how far down
we have scrolled
