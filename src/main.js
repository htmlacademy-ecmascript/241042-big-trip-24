import TripInfo from './view/trip-info-view';
import FilterView from './view/filter-view';
import EventsListPresenter from './presenter/events-list-presenter';
import { render, RenderPosition } from './render';
import PointsModel from './model/points-model';

const tripHeaderElement = document.querySelector('.page-header');
const tripTripMainElement = tripHeaderElement.querySelector('.trip-main');
const tripFiltersElement = tripHeaderElement.querySelector('.trip-controls__filters');
const tripMainElement = document.querySelector('.page-main');
const tripEventsElement = tripMainElement.querySelector('.trip-events');

const pointsModel = new PointsModel();
const eventsListPresenter = new EventsListPresenter({container: tripEventsElement, pointsModel});

render(new TripInfo(), tripTripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripFiltersElement);
eventsListPresenter.init();
