'use strick';

import { wrapper } from '../dom/refs';
import { findElement } from '../helpers';

export default tag => {
  const modal = findElement(wrapper);
  modal.addEventListener('click', e => {
    const target = e.target;
    if (target.id === 'wrapper' || target.className === 'btn')
      tag.removeChild(modal);
  });
};
