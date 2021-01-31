'use strick';

import { addElement, findElement, sortUser } from '../helpers';
import { UsersList } from '../components';
import { headerUser, list } from '../dom/refs';
import headerList from '../templates/headerList';

const eventHeader = db =>
  findElement(headerUser).addEventListener('click', e => sortDB(e, db));

const sortDB = (e, db) => {
  const newDB = db
    .then(data => sortUser(data, e.target.id))
    .catch(err => {
      throw err;
    });
  newElem(newDB);
};

const newElem = newDB => {
  findElement(list).innerHTML = '';
  addElement(list, headerList());
  UsersList(newDB);
  eventHeader(newDB);
};

export default db => eventHeader(db);
