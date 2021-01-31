'use strick';

import { main } from '../dom/refs';
import { addElement } from '../helpers';

import table from '../templates/table';

export default () => addElement(main, table());
