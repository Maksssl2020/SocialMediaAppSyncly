export function setAuthenticationValueInLocalStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeValueFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}
