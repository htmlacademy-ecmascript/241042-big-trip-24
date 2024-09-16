import { capitalizeFirstLetter } from '../../utils';

function createEventItemTemplate(type, className) {
  return(`
    <div class="event__type-item">
      <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${className}>
      <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitalizeFirstLetter(type)}</label>
    </div>
  `);
}

function createDestinationItemTemplate(city) {
  return(`
     <option value="${city}"></option>
  `);
}

function createOfferItemTemplate(type, title, price, className) {
  return(`
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-1" type="checkbox" name="event-offer-${type}" ${className}}>
      <label class="event__offer-label" for="event-offer-${type}-1">
        <span class="event__offer-title">${capitalizeFirstLetter(title)}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
      </label>
    </div>
  `);
}

export {createEventItemTemplate, createDestinationItemTemplate, createOfferItemTemplate};
