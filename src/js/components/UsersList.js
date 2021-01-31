'use strick';

import { addElement } from '../helpers';
import { list } from '../dom/refs';
import item from '../templates/item';

export default db =>
  db
    .then(data => {
      data.map(user => {
        addElement(list, item(user));
      });
    })
    .catch(err => {
      throw err;
    });
