export const q = (selector, parent) => {
  if(parent){
    return parent.querySelector(selector);
  }else {
    return document.querySelector(selector);
  }
}

export const qA = (selector, parent) => {
  if (parent) {
    return parent.querySelectorAll(selector);
  } else {
    return document.querySelectorAll(selector);
  }
}