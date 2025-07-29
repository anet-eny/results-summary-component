# Results Summary Component

A simple responsive summary card component built with React and Tailwind CSS. This project is a solution to the [Results Summary Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). The design displays a user’s score and a categorized summary of different skill areas.

## Features

- **Responsive Layout**: Built using Flexbox and Tailwind utility classes for responsiveness across devices.
- **Dynamic Data Rendering**: The summary categories are generated dynamically from a `resultsData` array.
- **Category-Specific Styling**: Each category is color-coded using CSS variables (e.g., blue, yellow, red, green), applied via Tailwind class names.
- **Custom Tailwind Color Variables**: Colors are defined using CSS variables and integrated into Tailwind via utility class names like `bg-yellow-50`, `text-blue-800`.

## Key Learnings

- **Tailwind Customization**: Learned how to define and use custom color variables with Tailwind without modifying the `tailwind.config.js`. Overrode default Tailwind colors with CSS variables in `index.css`.
- **Conditional Styling via Props**: Passed background and text color classes as props to reusable components for flexible styling.
- **Mapping Data to Components**: Practiced mapping structured data (`resultsData`) to generate repeated components dynamically in JSX.
- **Creating text presets using CSS variables**: Learned how to define typography presets (font size, line height, font weight) using CSS custom properties and apply them consistently across components for unified styling.
- **Debugging Tailwind Behavior**: Discovered how Tailwind treats default vs. custom colors and how using unique names (like `navy`) avoids clashes with existing Tailwind palettes.

## View Project
