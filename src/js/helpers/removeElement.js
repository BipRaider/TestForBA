'use strick';

import { findElement } from '.';

export default (parent, child) =>
  findElement(parent).removeChild(findElement(child));
