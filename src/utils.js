import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';

function capitalizeFirstLetter(value) {
  return value[0].toUpperCase() + value.slice(1);
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const humanizePointDueDate = (dueDate) => dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';

export {capitalizeFirstLetter, getRandomArrayElement, humanizePointDueDate};
