# Notes

Super interesting exercise. My version is different and quite more verbose than Wes'.
Not sure if less efficient or not.

- Selecting all `input` elements with `type` attribute `checkbox` inside class `inbox`
```javascript
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
```
- `e.shiftKey` to check if Shift was pressed