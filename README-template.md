# Frontend Mentor - Fylo dark theme landing page solution

This is my solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help developers improve their coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover and focus states for interactive elements
- Submit an email address through the early-access form
- Receive accessible feedback when the email address is invalid

### Screenshot

![Screenshot of the completed Fylo landing page](/Screenshot%202026-08-28%20125332.png)

> Add the final project screenshot as `screenshot.jpg` before publishing the solution.

### Links

- Solution URL: [Add the Frontend Mentor solution URL after submission](https://github.com/JoeWebDevelopment/fylo-dark-theme-frontendmentorio)
- Live Site URL: [Add the deployed site URL](https://nimble-hotteok-5724f7.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- CSS nesting
- Desktop-first responsive workflow
- JavaScript
- Constraint Validation API
- Accessible form feedback and ARIA attributes

### What I learned

Through trial and error, I improved my understanding of responsive layouts and fluid sizing. I used AI primarily for debugging guidance, while using browser DevTools and computed styles to trace layout problems myself. The completed layout now adjusts fluidly between desktop, tablet, and mobile screen sizes.

The most difficult part was positioning the curved hero background. I initially overcomplicated the problem and applied the background to the wrong section, which caused unexpected spacing and sizing issues. After experimenting with several approaches, I placed the background on the parent hero section and added the necessary spacing to its inner content. This helped me better understand how a parent's background and a child's spacing can work together without changing the size of the entire section.

I also learned that horizontal overflow may come from one oversized child, such as an image, even when several containers appear too wide. Inspecting computed widths from the outside inward helped me locate the actual source of the problem.

While adding the early-access form, I learned how to use the browser's built-in email validation through `checkValidity()`. I also practiced connecting validation feedback to the input with `aria-describedby`, announcing status changes with `aria-live`, and communicating an invalid state with `aria-invalid`.

### Continued development

In future projects, I want to become faster at identifying the element responsible for overflow and more confident when combining `width`, `max-width`, and responsive images. I also want to continue testing layouts throughout the full range between breakpoints rather than checking only a few standard device sizes.

Although I currently find desktop-first development more comfortable, I would also like to practice mobile-first workflows so I can better understand the benefits and tradeoffs of both approaches. I also plan to keep improving my understanding of accessible forms and validation feedback.

### Useful resources

- [Figma](https://www.figma.com/) - I used the supplied design to inspect dimensions, spacing, typography, and the intended responsive layouts.
- [MDN Web Docs](https://developer.mozilla.org/) - I used MDN to research HTML, CSS, form validation, and accessibility features.
- Google searches - I used Google to find documentation and investigate unfamiliar CSS behavior.
- AI mentoring - I used AI for debugging guidance, code reviews, accessibility feedback, and explanations of unfamiliar concepts.

### AI collaboration

I used AI as a debugging and mentoring tool rather than having it build the project for me. It helped me identify areas to investigate, understand computed layout values, review accessibility, and reason through responsive sizing problems. I implemented and tested the solutions myself through trial and error.

The most helpful approach was combining AI guidance with browser DevTools. AI could suggest likely causes, while computed styles and viewport testing allowed me to confirm which element was actually creating the problem. This process helped me understand the solution instead of only applying a suggested change.

## Author

- Frontend Mentor: [Add your Frontend Mentor profile URL](https://www.frontendmentor.io/profile/JoeWebDevelopment)
- GitHub: [Add your GitHub profile or repository URL](https://github.com/JoeWebDevelopment)
