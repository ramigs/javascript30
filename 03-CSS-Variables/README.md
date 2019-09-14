# Notes

- Unlike SASS, the value of CSS variables can be altered dynamically (with
  JavaScript). HTML elements that use these variables will be updated
  accordingly. Variables also follow regular cascading rules.
- Declaring CSS variables at root level:
```css
:root {
    --base: #f0db4f;
    --spacing: 10px;
    --blur: 10px;
    }
```
- HTML `<input type="range">`
- CSS `filter: blur(var(--blur));` applied to `img` element
- Array vs. NodeList: `document.querySelectorAll()` returns NodeList.
  NodeList recently added `forEach`. No need to convert to Array.
- DOM event `change`
- DOM event `mousemove`
- JavaScript `this.dataset` to retrieve all `data-*` attributes and values
- Setting CSS variable value with JavaScript:
```javascript
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
```

