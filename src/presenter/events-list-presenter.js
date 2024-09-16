import EventsListView from '../view/events-list-view';
import SortView from '../view/sort-view';
import EditPointView from '../view/edit-point-view';
import PointView from '../view/point-view';
import { render } from '../render';

export default class EventsListPresenter {
  eventsListComponent = new EventsListView();

  constructor({container, pointsModel}) {
    this.eventsListContainer = container;
    this.pointsModel = pointsModel;
  }

  init() {
    this.eventsListPoints = [...this.pointsModel.getPoints()];

    render(this.eventsListComponent, this.eventsListContainer);
    render(new SortView(), this.eventsListComponent.getElement());
    render(new EditPointView({
      point: this.eventsListPoints[0],
      allDestination: this.pointsModel.getDestinations(),
      allOffers: this.pointsModel.getOffersByType(this.eventsListPoints[0].type),
      pointDestination: this.pointsModel.getDestinationsById(this.eventsListPoints[0].destination),
    }), this.eventsListComponent.getElement());

    for (let i = 1; i < this.eventsListPoints.length; i++) {
      render(new PointView({
        point: this.eventsListPoints[i],
        offers: [...this.pointsModel.getOffersById(this.eventsListPoints[i].type, this.eventsListPoints[i].offers)],
        destination: this.pointsModel.getDestinationsById(this.eventsListPoints[i].destination)
      }), this.eventsListComponent.getElement());
    }
  }
}
