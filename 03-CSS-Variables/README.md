# Notes

- Declaring CSS variables at root level:
```css
:root {
    --base: #f0db4f;
    --spacing: 10px;
    --blur: 10px;
    }
```
- CSS ```filter: blur(var(--blur));``` applied to ```img``` element
- Array vs. NodeList: ```document.querySelectorAll()``` returns NodeList.
  NodeList recently added ```forEach```. No need to convert to Array.
- DOM event ```change```
- DOM event ```mousemove```
- JavaScript ```this.dataset``` to retrieve all ```data-*``` attributes and values
- Setting CSS variable value with JavaScript:
```js
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
```