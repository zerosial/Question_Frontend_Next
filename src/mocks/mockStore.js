// disclosureStore.js
let disclosureItems = [];

export const getDisclosureItems = () => disclosureItems;

export const addDisclosureItem = (item) => {
  const arrLength = disclosureItems.length;
  disclosureItems.push({ key: arrLength + 1, ...item });
};

export const deleteDisclosureItem = (key) => {
  disclosureItems = disclosureItems.filter((item) => item.key !== Number(key));
};

export const clearDisclosureItems = () => {
  disclosureItems = [];
};

let user = null;

export const getUser = () => user;

export const setUser = (item) => {
  user = item;
};

export const deleteUser = () => {
  user = null;
};
