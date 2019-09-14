# Notes

- Declaring CSS variables at root level:
```css
:root {
    --base: #f0db4f;
    --spacing: 10px;
    --blur: 10px;
    }
```
- CSS ```filter: blur(var(--blur));``` applied to ```ìmg``` element
- Array vs. NodeList; ```document.querySelectorAll()``` returns NodeList. No need to convert to Array. NodeList recently added ```forEach```
- event ```change```