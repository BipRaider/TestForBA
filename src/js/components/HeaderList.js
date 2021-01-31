'use strick';

import { addElement } from '../helpers';
import { list } from '../dom/refs';
import headerList from '../templates/headerList';

export default () => addElement(list, headerList());
