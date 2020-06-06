// A convenient wrapper for [node].querySelector
export const q = (selector, parent) => {
  const ctx = parent || document;
  return ctx.querySelector(selector);
}


// A convenient wrapper for [node].querySelectorAll
export const qA = (selector, parent) => {
  const ctx = parent || document;
  return ctx.querySelectorAll(selector);
}