# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

=>The main differences lie in their flexibility (selector types), return types, and performance

**Flexibility:**
getElementById and getElementsByClassName are limited to selecting by ID or class name, respectively.
querySelector and querySelectorAll offer superior flexibility, allowing the use of any complex CSS selector, including attribute selectors, pseudo-classes, and combinations of IDs, classes, and tags.

**Return Value:**
getElementById and querySelector return a single element (or null/undefined if not found).
getElementsByClassName returns an HTMLCollection of all matching elements, while querySelectorAll returns a NodeList.

**Live vs. Static Collections:**
getElementsByClassName returns a live collection, meaning that if elements are added to or removed from the DOM after the initial call, the collection variable will automatically reflect these changes.
querySelectorAll returns a static NodeList, which is a snapshot of the DOM at the moment the method was called, and will not update dynamically with subsequent DOM changes. This static nature is often preferred as it prevents unexpected behavior during iterations or later use.

**Performance:**
getElementById is extremely efficient because browsers optimize for ID lookups.
The getElementsBy* methods are generally faster than their querySelector* counterparts for simple selections, especially on very large DOMs, as they are optimized for specific search types.
In most modern applications, the performance differences are negligible unless you are dealing with extremely large documents or calling the functions repeatedly within a performance-critical loop (like in an infinite scroll event handler).

# How do you create and insert a new element into the DOM?

=>

1. Create the new element using the document.createElement() method, specifying the tag name (e.g., "p", "div", "span").

2. Add content or attributes to the new element. You can use properties like textContent or innerHTML, or methods like setAttribute().

3. Find the existing parent element where you want to insert the new element. You can use methods such as document.getElementById() or document.querySelector().

4. Insert the new element into the parent element using an insertion method:
   a. appendChild(newElement): Inserts the new element as the last child of the parent element.

   b. append(newElement): A more modern method that can append multiple elements and text nodes.

   c. insertBefore(newNode, referenceNode): Inserts the newNode before a specified referenceNode that is already a child of the parent.

# What is Event Bubbling? And how does it work?

=>

Event Bubbling is when an event (like a click) starts at the most specific element and then "bubbles up" to its parents.

**The 3-Step Process**
The Trigger: You click a child element (like a button).

The Local Action: The button’s own click code runs first.

The Bubble: The click event then automatically moves to the parent container, then the grandparent, and so on, triggering any click code they might have.

**Why it matters:**
Convenience: You can put one listener on a container to catch events from all its children (Event Delegation).

Control: If you want it to stop, you just use event.stopPropagation().

# What is Event Delegation in JavaScript? Why is it useful?

=> Event Delegation is a technique where you put one event listener on a parent element to manage all of its children.

It works because of Event Bubbling: when you click a child, the click "bubbles up" to the parent, where your listener is waiting to catch it.

**Why is it useful?**
Memory Efficient: Instead of adding 100 listeners to 100 buttons, you add one listener to their container.

Handles New Items: If you add a new button to the page later using JavaScript, it will automatically work. You don't have to "re-attach" any code to the new button.

**How it looks in one sentence:**
Instead of giving every guest at a party their own trash can, you put one big trash can by the door; whenever anyone has trash, they bring it to the one central spot.

# What is the difference between preventDefault() and stopPropagation() methods?

=> The core difference is that event.preventDefault() stops the browser's default action for an event, while event.stopPropagation() stops the event from moving further up or down the DOM tree.
