##### Project Github Repo [Github Sign Up](https://github.com/saintaze/Signup-Form-JS).
##### Project Live Link [Live Sign Up](https://practical-bassi-b0f99e.netlify.app/)

# Answers

## WAI (Web Accessibility Initiative)
WAI is an initiative by W3C to make the web more accessible for disabled people. It is a resource and also an implementation guideline. It's broken down into 2 standards 
WACG and WAI-ARIA. 

### WCAG
WCAG is essentially a guideline, a roadmap, and a set of criteria for making the web more accessible. It's a kind of accessibility checklist and it also provides resources in helping to achieve that. 

### WAI-ARIA
ARIA makes sure that the user experiences are semantically rich and easily understood by assistive technologies. It can be used in various ways
-  It can make custom controls more accessible so that screen-readers can read out the intended purpose of that control. It's done by adding additional semantics to the element where no native semantics exist.

-  It can also be used to modify the role of a native element so screen-reader can understand for it is used for.

- It can also express relationships between elements of the page where there is no direct relationship in the markup. It gives visually impaired a clue on how components on the page are connected and interact.
 
 ARIA can be implemented by using 'role' and 'aria-' group of attributes. 
## Frontend code optimization (speed and performance)

The following are some of the front-end performance optimization techniques. 

1. **Lazy Loading** - Usually, when a web page is loaded, the browser requests all images whether they’re in the viewport or further down the page and out of sight. Lazy loading allows to only load the images which are visible and asynchronously load the rest on-demand as the user scrolls. This reduces the number of unnecessary requests and can increase speed. Lazy Loading can be implemented with `Intersection Observer API`.

2. **Responsive Images** - Sometimes we load very large images on small screens which are not required at all, but eats the bandwidth and takes time to download and then are resized on the front end. If in the end it had to be resized and made smaller why not download a small image from the get-go. That is where responsive images come in. Appropriately sizing large images for the device they’re viewed on reduces the page size of a website. This also makes better use of the viewport space. We can use `<picture>` element with  `srcset` and `sizes` attributes to download an appropriate image depending on the viewport width.
3. **Asset  Caching** - One good way to reduce page load times is to implement caching so that assets such as CSS and JS, and images aren’t downloaded again unless they change. One way to handle the caching is to tell the browser that  assets will _never_ change  This can be done through `.htaccess` file. If we want to change, we add a hash at the end of the asset name so for the browser, it looks like a new asset and it goes on to fetch. Every time we make a change, a new hash is generated marking it a new asset. Otherwise, the old asset is used.
4. **Compression** - Assets while being served from the server can be compressed tor reduce load times. GZIP and Brotli are two tools used for compression. 
5. **Slim Assets** - Sometimes we use third-party CSS or JS which largely goes unused but increases the initial load time. If someone wants to use just the grid then including an entire Bootstrap is overkill. Similarly, if someone wants to just use the DOM element selector then Jquery is an overkill. In both cases, one can use precise tools such as Skeleton CSS and Sizzle JS which give you exactly what you need and can increase the speed of the website. 
6. **Minification** - Files can also be minified before putting into production. All the white spaces, indentations, and returns add unnecessary bytes to the file size. Which when taken out can reduce the file size and increase load times. 
7. **Async/Defer** - When a JS file is loaded it stops the parsing of the HTML page and can make a user wait. By using `async` we tell the browser to load the file asynchronously to not block HTML parsing and with `defer` we tell the browser to defer the parsing of the JS file until HTML has been rendered. These can improve the overall user experience.

## React Component Cycle
 1.   **Initialization:**  This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
 -   `constructor()`
1.   **Mounting:**  A component mounts when it is created and first inserted into the DOM i.e when it is rendered for the first time. The methods that are available during this period are:
-   `componentWillMount()`
-   `render()`
-   `componentDidMount()`
2.   **Updating:**  Updating is the stage when the state of a component is updated and the application is repainted.
-   `componentWillReceiveProps()`
-   `shouldComponentUpdate()`
-   `componentWillUpdate()`
-   `render()`
-   `componentDidUpdate()`
3.  **Unmounting:**  As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.
- `componentWillUnmount()`
## React Hooks
_Hooks_ are functions that let us “_hook_ into” _React_ state and lifecycle features from function components. _Hooks_ don't work inside classes. I have used hooks in few react projects.  Some common hooks are as follows

- `useEffect` (to replace common lifecycle methods)
- `useMemo` (for optimization of components construction)
- `useCallback`(for optimization of function redefinition)
- `useState` (to replace state prop of class-based components)
- `useReducer` (for handling more complex multi-part state, like redux)
- `useContext` (help in passing props from parent to child without prop drilling)
- `useRef` (to grab a handle on DOM element)
- We can also create custom hooks which are reusable pieces of logic shared across multiple components and they can use others hooks inside of them.
## Redux, Reducers, Actions
I have worked with the native React `useReducer` hook which is very similar to redux. it allows you to define a state object and actions and dispatch for mutating the state. I have worked with redux in demo apps. 

## React Performance

Many things can be done to improve the performance of a React app. Some of the steps are highlighted below.

1) **shouldComponentUpdate()** - Whenever a state changes it will re-render the entire component tree. Sometimes the child components receive props that have not changed yet still they are rerendered. We can save that by using `shouldComponentUpdate()` which checks if the props have been changed to determine if a component needs to be updated with new props or not. 

2) **React.PureComponents** - Instead of doing a manual comparison of props to determine if a component needs to be updated, we can use `PureComponents`. They have the `shouldComponentUpdate` built to prevent unnecessary component updates.

3) **Lazy Loading** - Usually we bundle an entire app and serve it upfront but the user may not visit some parts of our application. For this, we can use lazy loading and code splitting.  It makes sure that infrequently used sections of our app are only loaded as an additional bundle on demand. It can increase the initial load time. 

4. **Compression** - Another way to make JS/React load faster is to enable GZIP or Brotli on a web server. Both Gzip and Brotli compression can drastically reduce the client's data usage thus improving render time.

5. **Immutable Data Structure** - Immutable data structure allows for consistency in the app state and removes all side effects. It means that we never mutate the actuate data itself we merely replace it with updated data. 

6.  **Fragment Wrapper** - `React.fragments` lets us group a list of children without adding an extra node. 

7. **Throttling and Debouncing Event** - Throttling means delaying function execution. So instead of executing the event handler/function immediately, we add few milliseconds of delay when an event is triggered. This can be used when implementing infinite scrolling, for example. Debouncing is a technique to prevent the event trigger from being fired too often. It can be used when a user is typing in the input box which then sends an AJAX request for suggested results.

8. **Avoid using Index as Key for map** - Using the key as the index can show your app incorrect data as it is being used to identify DOM elements. When you push or remove an item from the list if the key is the same as before, React assumes that the DOM element represents the same component. It's always advisable to use a unique property as a key.
9. **Memoize React Components** - Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. A memoized function is usually faster because if the function is called with the same values as the previous one then instead of executing function logic it would fetch the result from cache. We can use memoization by using the `useMemo` hook on a component definition.
10. **Memoizing Functions** - When we are using functional components and hooks, we often define functions inside of our functional components. We can also memoize them so they don't get redefined over and over every time a component updates. We do by using `useCallback` hook. When we wrap a function with this hook it gives us a memoized version and we can mention dependencies which can trigger redefinition of the function.
 
11. **Virtualize Long Lists**  - List virtualization is a technique to improve performance when rendering a long list of data. This technique only renders a small subset of rows at any given time and can dramatically reduce the time it takes to re-render the components, as well as the number of DOM nodes created.
