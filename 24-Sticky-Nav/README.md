# Notes

- `nav.offsetTop` to get distance between top and `nav` start
- `window.scrollY` to get distance scrolled from the top
- add and remove class to `body` `fixed-nav` on `scroll`
- target elements with `.fixed-nav nav`, as `nav` inside element with class `fixed-nav`
```css
.fixed-nav nav {
	position: fixed;
	box-shadow: 0 4px rgba(0, 0, 0, 0.1);
}
```
- since `nav` is now `position: fixed;`, it's not taking any space,
which makes the rest of the content **jump**
- `document.body.style.paddingTop = nav.offsetHeight;` when `fixed-nav` is added
- `max-width` can be animated, `width` can't