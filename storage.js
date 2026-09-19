/* 
   Online Car Dealership — storage.js
   Wraps all LocalStorage read/write logic (favorites, theme).
    */

const STORAGE_KEYS = {
  FAVORITES: "onlinecardealership_favorites",
  THEME: "onlinecardealership_theme",
  COMPARE: "onlinecardealership_compare",
};

/** Get the array of favorited car IDs from LocalStorage. */
function getFavorites() {
  const raw = localStorage.getItem(STORAGE_KEYS.FAVORITES);
  return raw ? JSON.parse(raw) : [];
}

/** Save the array of favorited car IDs to LocalStorage. */
function saveFavorites(favoritesArray) {
  localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favoritesArray));
}

/** Toggle a car ID in favorites. Returns true if now favorited, false if removed. */
function toggleFavorite(carId) {
  const favorites = getFavorites();
  const index = favorites.indexOf(carId);
  let isNowFavorite;

  if (index === -1) {
    favorites.push(carId);
    isNowFavorite = true;
  } else {
    favorites.splice(index, 1);
    isNowFavorite = false;
  }

  saveFavorites(favorites);
  updateFavoritesBadge();
  return isNowFavorite;
}

/** Check whether a given car ID is currently favorited. */
function isFavorite(carId) {
  return getFavorites().includes(carId);
}

/** Update the small numeric badge on the navbar heart icon, if present. */
function updateFavoritesBadge() {
  const badge = document.getElementById("favorites-count-badge");
  if (!badge) return;
  const count = getFavorites().length;
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

/** Get the array of car IDs selected for comparison. */
function getCompareList() {
  const raw = localStorage.getItem(STORAGE_KEYS.COMPARE);
  return raw ? JSON.parse(raw) : [];
}

/** Save the array of car IDs selected for comparison. */
function saveCompareList(list) {
  localStorage.setItem(STORAGE_KEYS.COMPARE, JSON.stringify(list));
}

/** Add a car to the compare list (max 3 cars). Returns a status string. */
function addToCompare(carId) {
  const list = getCompareList();
  if (list.includes(carId)) return "exists";
  if (list.length >= 3) return "full";
  list.push(carId);
  saveCompareList(list);
  updateCompareBadge();
  return "added";
}

/** Remove a car from the compare list. */
function removeFromCompare(carId) {
  const list = getCompareList().filter((id) => id !== carId);
  saveCompareList(list);
  updateCompareBadge();
}

/** Update the small numeric badge on the navbar compare icon, if present. */
function updateCompareBadge() {
  const badge = document.getElementById("compare-count-badge");
  if (!badge) return;
  const count = getCompareList().length;
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

/** Get the saved theme ("light" or "dark"), defaulting to "light". */
function getSavedTheme() {
  return localStorage.getItem(STORAGE_KEYS.THEME) || "light";
}

/** Persist the current theme choice. */
function saveTheme(theme) {
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
}
