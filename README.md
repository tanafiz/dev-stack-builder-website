# DevStack

DevStack is a React and TypeScript website where users can explore different technologies and build their own personalized tech stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- HTML
- CSS

## Features

### 1. Explore Technologies
Users can explore different technologies with their category, description, difficulty level, rating, and icon.

### 2. Build Your Own Stack
Users can add technologies to their personal stack and remove individual technologies whenever they want.

### 3. Toast Notifications
The website shows toast notifications when a technology is added, removed, or when the user tries to add the same technology again.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

## 2. What is the difference between props and state?

Props are used to pass data from a parent to a child component. State is used to store data that can change inside a component.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a React component. In this project, I used it in `App.tsx` to store the selected technologies in the user's stack.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects such as fetching data after a component renders. In this project, I did not use `useEffect` for loading the JSON data. I used `fetch()` with React's `use()` and `Suspense` to load the data.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update or remove the correct item when the list changes.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition.
In my project, I used conditional rendering in the Stack section. When the stack is empty, it shows **"Your Stack is Empty"**. When technologies are added, it shows the selected technologies instead.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props. To send data back, the parent can pass a function to the child, and the child can call that function.

In my project, `App` passes the `toggleStack` function to the `Card` component. When the user clicks **Add to Stack**, the `Card` calls the function and sends the selected technology back to `App`.
