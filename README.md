Documenting my frontend journey

1.tailwind theming with @theme tag:
**<Hero/>**

(read from https://tailwindcss.com/docs/theme)

## Tailwind CSS Utility Classes Explanation

### `App.jsx`

- **`div`**:
  - `flex`: Sets the display to flex, enabling flexbox layout.
  - `h-screen`: Sets the height of the element to 100% of the viewport height.
  - `justify-center`: Centers the content horizontally within the flex container.
  - `bg-neutral-900`: Sets the background color to a dark gray (`#171717`).

### `Hero.jsx`

- **`div` (outer)**:
  - `mx-10`: Sets a horizontal margin of 2.5rem (40px).
  - `flex`: Sets the display to flex.
  - `w-full`: Sets the width to 100%.
  - `flex-col`: Sets the flex direction to column, arranging children vertically.
  - `items-center`: Centers items along the cross axis (horizontally in this case).
  - `justify-center`: Centers items along the main axis (vertically in this case).

- **`h1`**:
  - `max-w-2xl`: Sets the maximum width of the element to 42rem (672px).
  - `bg-gradient-to-b`: Creates a background gradient from top to bottom.
  - `from-neutral-50`: Sets the starting color of the gradient to a very light gray (`#fafafa`).
  - `to-neutral-500`: Sets the ending color of the gradient to a medium gray (`#737373`).
  - `bg-clip-text`: Clips the background to the shape of the text, making the text appear to have a gradient.
  - `text-center`: Centers the text horizontally.
  - `text-7xl`: Sets the font size to 4.5rem (72px).
  - `leading-tight`: Sets the line height to 1.25.
  - `font-bold`: Sets the font weight to bold.
  - `tracking-tight`: Sets the letter spacing to -0.05em.
  - `text-transparent`: Makes the text color transparent, revealing the background gradient.

- **`p`**:
  - `mx-auto`: Centers the element horizontally by setting left and right margins to auto.
  - `mt-10`: Sets a top margin of 2.5rem (40px).
  - `max-w-3xl`: Sets the maximum width of the element to 48rem (768px).
  - `text-center`: Centers the text horizontally.
  - `text-xl`: Sets the font size to 1.25rem (20px).
  - `text-neutral-500`: Sets the text color to a medium gray (`#737373`).
  - `selection:bg-gray-200`: Sets the background color of selected text to a light gray (`#e5e7eb`).

- **`span`**:
  - `text-primary`: Sets the text color to the custom primary color defined in `index.css`.

- **`div` (inner)**:
  - `mt-8`: Sets a top margin of 2rem (32px).
  - `flex`: Sets the display to flex.
  - `justify-center`: Centers the content horizontally.

- **`input`**:
  - `mr-4`: Sets a right margin of 1rem (16px).
  - `rounded-xl`: Sets the border radius to 0.75rem (12px).
  - `border`: Adds a 1px border.
  - `border-neutral-600`: Sets the border color to a dark gray (`#525252`).
  - `px-4`: Sets a horizontal padding of 1rem (16px).
  - `text-white`: Sets the text color to white.
  - `transition`: Adds a transition effect to all properties.
  - `duration-200`: Sets the transition duration to 200ms.
  - `placeholder:text-neutral-500`: Sets the color of the placeholder text to a medium gray (`#737373`).
  - `focus:ring-sky-500`: Adds a blue ring around the element when it has focus.
  - `focus:outline-none`: Removes the default outline when the element has focus.

- **`button`**:
  - `relative`: Sets the position to relative, allowing absolute positioning of children.
  - `cursor-pointer`: Sets the cursor to a pointer on hover.
  - `rounded-xl`: Sets the border radius to 0.75rem (12px).
  - `border`: Adds a 1px border.
  - `border-neutral-700`: Sets the border color to a dark gray (`#404040`).
  - `px-4`: Sets a horizontal padding of 1rem (16px).
  - `py-2`: Sets a vertical padding of 0.5rem (8px).
  - `text-white`: Sets the text color to white.

- **`div` (inside button)**:
  - `absolute`: Sets the position to absolute, relative to the button.
  - `inset-x-0`: Sets the left and right positions to 0, making it span the full width of element relative to its parent, but only when the element's position is set to absolute, fixed, or sticky.inset properties control the distance between an element and the edges of its containing block, which is usually its closest positioned ancestor.
  - `-bottom-px`: Positions the element 1px from the bottom.
  - `h-px`: Sets the height to 1px.
  - `w-full`: Sets the width to 100%.
  - `bg-gradient-to-r`: Creates a background gradient from left to right.
  - `from-transparent`: Sets the starting color of the gradient to transparent.
  - `via-primary`: Sets the middle color of the gradient to the custom primary color.
  - `to-transparent`: Sets the ending color of the gradient to transparent.

## Theming with `@theme` in `index.css`

The `@theme` directive in `index.css` is used to extend and customize Tailwind's default theme.

```css
@theme {
  --color-primary: oklch(64.5% 0.246 16.439);
}
```

In this project, we are defining a custom CSS variable `--color-primary` with an `oklch` color value. This variable is then available to be used throughout the CSS and in the Tailwind configuration. By defining this variable within the `@theme` block, we can then use it in our `tailwind.config.js` to create a custom color utility. For example, we can add `primary: 'var(--color-primary)'` to the `theme.extend.colors` object in the config file. This allows us to use classes like `text-primary`, `bg-primary`, etc., which will apply the defined `oklch` color. This is a powerful way to create a consistent color scheme and theme for your application.
