# Notes

- HTML element can be at the same time a flex container and a flex item
- `flex: 1 0 auto;` to make flex items maximize their width equally so that they
  fill out their container
- Hiding first item:
```css
.panel > *:first-child {
      transform: translateY(-100%);
    }
```
- `transform: translateY()` from `0%` to `100%` - and vice-versa - takes care of
  the animation
- Toggling a class on and off `this.classList.toggle('open');`