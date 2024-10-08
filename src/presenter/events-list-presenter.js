import EventsListView from '../view/events-list-view';
import SortView from '../view/sort-view';
import EditPointView from '../view/edit-point-view';
import NewPointView from '../view/new-point-view';
import PointView from '../view/point-view';
import { render } from '../render';

export default class EventsListPresenter {
  eventsListComponent = new EventsListView();

  constructor({container}) {
    this.eventsListContainer = container;
  }

  init() {
    render(this.eventsListComponent, this.eventsListContainer);
    render(new SortView(), this.eventsListComponent.getElement());
    render(new EditPointView(), this.eventsListComponent.getElement());
    render(new NewPointView(), this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.eventsListComponent.getElement());
    }
  }
}
