'use strick';

import { Users, UsersList, ModalWindow, HeaderList } from './components';
import eventHeader from './handlers/eventHeader';
import openModalWindow from './handlers/openModalWindow';

export default class App {
  constructor(db) {
    this.DB = db();

    this.page();
    this.event();
  }

  event = () => {
    eventHeader(this.DB);
    openModalWindow(this.DB);
  };

  page = () => {
    Users();
    HeaderList();
    UsersList(this.DB);
  };
}
