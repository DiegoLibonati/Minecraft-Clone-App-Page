export const getLocalStorage = (key) => {
  return JSON.parse(window.localStorage.getItem(key));
};
