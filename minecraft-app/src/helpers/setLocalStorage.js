export const setLocalStorage = (key, value) => {
  return window.localStorage.setItem(key, JSON.stringify(value));
};
