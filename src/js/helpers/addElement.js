'use strick';

import findElement from './findElement';

export default (elem = 'body', elements = '', when = 'beforeend') =>
  findElement(elem).insertAdjacentHTML(when, elements);
