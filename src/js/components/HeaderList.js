'use strick';

import { addElement } from '../helpers';
import { list, users } from '../dom/refs';
import headerList from '../templates/headerList';

export default () => addElement(users, headerList(), 'afterbegin');
