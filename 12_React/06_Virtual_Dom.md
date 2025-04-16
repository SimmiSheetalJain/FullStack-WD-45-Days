# Virtual DOM
Though Virtual DOM is no longer the main approach in the latest React versions, having a strong foundation in React means we should still understand what Virtual DOM is.

Recall this createRoot()
```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
* createRoot() creates a virtual DOM structure.

* This structure is compared with the real browser DOM.

* Only the parts that have changed are updated in the actual browser DOM.