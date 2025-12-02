## Bicolano Recipes – Simple Responsive Recipe Website

This project is a single-page, responsive recipe website showcasing iconic Bicolano dishes such as Bicol Express, Laing, Pinangat, and Kinalas. 
It was built for an academic/portfolio requirement using HTML5, CSS3, JavaScript, and Bootstrap 5.

Features

- Modern hero header
  - Title: Bicolano Recipes
  - Short description explaining the purpose of the site.
  - Large food-related hero background image.

- Bootstrap navigation bar
  - Links: Home, Recipes, About.
  - Fixed at the top for easy navigation on any section.

- Recipes section
  - Card-based layout using the Bootstrap grid system.
  - Each card shows:
    - Dish image
    - Dish name
    - Short description
    - “View Recipe” button

- Recipe details in modals
  - Clicking “View Recipe” opens a Bootstrap modal with:
    - Intro/background of the dish
    - Ingredients (bullet list)
    - Step-by-step instructions
    - Cooking tips

- About section
  - Explains the purpose of the webpage.
  - Highlights the cultural importance of learning Bicolano dishes.

- Footer
  - Simple copyright text.

- Styling & UX
  - Bright, modern, food-friendly color palette.
  - Google Fonts for typography (`Poppins`, `Playfair Display`).
  - Hover effects on cards and buttons.
  - Smooth scroll behavior for navigation links.
  - Scroll-triggered fade-in animations using `IntersectionObserver`.
  - Back-to-top floating button.

Technologies Used

- HTML5
- CSS3
- Bootstrap 5 (CDN)
- JavaScript (vanilla)
- Google Fonts
- Font Awesome 6 (icons)

Project Structure

- `index.html` – Main page containing all sections, recipe cards, and recipe modals.
- `style.css` – Custom styles for layout, colors, typography, cards, buttons, animations, and responsiveness.
- `script.js` – Handles smooth scrolling, back-to-top behavior, and scroll-triggered animations.
- `README.md` – Project documentation (this file).

How to Run the Project

1. Make sure all files (`index.html`, `style.css`, `script.js`, `README.md`) are in the same folder.
2. Open the folder on your computer.
3. Double-click `index.html` (or right-click → Open with → your browser).
4. Scroll through the page:
   - Use the navbar to jump between Home, Recipes, and About.
   - Click “View Recipe” on any card to open its modal with ingredients and instructions.
   - Scroll down to see fade-in animations and the back-to-top button.

No build tools, compilers, or installations are required. The site runs purely in the browser.

Suggested Improvements (Optional)

If you want to extend this project further:

- Add a filter or search bar for recipes.
- Add a “spice level” indicator (mild, medium, very spicy) on each card.
- Make a separate page or section for more Bicolano dishes and stories.


