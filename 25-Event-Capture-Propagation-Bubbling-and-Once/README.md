# Notes

- **Capturing**: from top to bottom, to figure out where the `click` took place
- **Bubbling**: the browser will trigger the event listeners, starting from the innermost clicked element, and through its parent chain
- `addEventListener('click', logText, { capture: true })` runs the function on the *way down*, during the capturing stage
- `e.stopPropagation();` to stop bubbling the event up
- `once: true` is the same as removing the event listener after the first time the event occurs
- Limiting a checkout button to one click only is a good use case scenario for `once: true`
