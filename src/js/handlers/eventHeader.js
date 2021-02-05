'use strick';

import { findElement, sortUser } from '../helpers';
import { UsersList } from '../components';
import { headerUser, list, users } from '../dom/refs';

const eventHeader = db =>
  findElement(headerUser).addEventListener('click', e => sortDB(e, db));

const sortDB = (e, db) => {
  console.dir(e.target.id);
  const newDB = db
    .then(data => sortUser(data, e.target.id))
    .catch(err => {
      throw err;
    });

  newElem(newDB);
};

const newElem = newDB => {
  findElement(list).innerHTML = '';

  UsersList(newDB);
};

export default db => eventHeader(db);
