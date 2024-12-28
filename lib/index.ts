export const setLocalStorageToken = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

// const get token
export const getLocalStorageToken = (name: string) => {
  const token = localStorage.getItem(name);
  if (!token) return null;
  return token;
};

// Delete token
export const deleteLocalStorageToken = (name: string) => {
  localStorage.removeItem(name);
};
