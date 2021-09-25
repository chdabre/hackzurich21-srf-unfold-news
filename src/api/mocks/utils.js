export const randomValue = (items) => items[Math.round(Math.random() * (items.length - 1))];
export const randomInteger = (min, max) => min + Math.floor(Math.random() * (max - min));
export const randomDate = (minYear, maxYear) => new Date(
  randomInteger(minYear, maxYear),
  randomInteger(0, 11),
  randomInteger(0, 30),
);
