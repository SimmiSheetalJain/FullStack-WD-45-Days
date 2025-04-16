import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Things to Know (Part-I)
/**
 * Can we directly define and use a function component here?
 * ✅ Yes! We can create a custom component like MyApp and use it inside the render() method.
 */
function MyApp(){
  return <h1>Deep Work is a Better Choice!!</h1>
}

// Things to Know (Part-II)
/**
 * Can we use a plain JavaScript object the same way we use a function component?
 * 
 * Below is a plain object that resembles a React element structure,
 * but it's not recognized by React’s rendering engine.
 * 
 * JSX is ultimately compiled to React.createElement(...) calls, which return special React element objects.
 * 
 * However, manually created objects like the one below won't work directly in JSX
 * because they don’t go through the JSX or React.createElement() pipeline,
 * and React doesn't know how to interpret them.
 */
const reactElement = {
  type: 'a',
  props:{
    href: "https://google.com",
    target: "_blank"
  },
  children: 'Click Me!!'
}

// Things to Know (Part-III)
/**
 * As discussed in Part-II, React requires a specific structure.
 * So instead of manually creating an object, we use React.createElement().
 * 
 * Also, to inject any JavaScript expression (like this React element) inside JSX,
 * we wrap it in curly braces `{}`.
 */
const reactElement2 = React.createElement(
  'a',  // First, specify the tag
  { href: 'https://google.com', target: '_blank' }, // Then, pass the attributes as an object
  'Click Me Now!!' // Lastly, provide the children (in this case, just text)
);

// Things to Know (Part-IV)
/**
 * Can we directly inject any evualted expression of JavaScript into JSX? ✅ Yes!
 * By wrapping any valid expression in `{}`, we can use it inside JSX.
 * 
 * For more examples, check App.jsx in this folder.
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp /> {/* ✅ This works because MyApp is a valid functional component */}
    
    {/* reactElement */} {/* ❌ This doesn't work — reactElement is just a plain object, not a valid React element */}
    
    {reactElement2} {/* ✅ This works! reactElement2 was created using React.createElement(), which React understands */}
  </StrictMode>,
)
