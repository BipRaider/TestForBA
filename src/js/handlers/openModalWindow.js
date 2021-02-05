'use strick';

import ModalWindow from '../components/ModalWindow';
import { list, main } from '../dom/refs';
import { findElement, getUserById } from '../helpers';
import closeModalWindow from './closeModalWindow';

export default db => {
  findElement(list).addEventListener('click', e => {
    if (e.target.parentNode.dataset.item) {
      const id = e.target.parentNode.dataset.item;

      getUserById(id, db)
        .then(data => {
          ModalWindow(data);

          closeModalWindow(findElement(main));
        })
        .catch(err => {
          throw err;
        });
    }
  });
};
