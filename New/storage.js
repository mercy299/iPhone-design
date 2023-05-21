function getFromStorage(key) {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return value;
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function removeFromStorage(key) {
  localStorage.removeItem(key);
}

function clearStorage() {
  localStorage.clear();
}
