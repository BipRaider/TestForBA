'use strick';

import { addElement } from '../helpers';
import { main } from '../dom/refs';
import userModel from '../templates/userModel';

export default user => addElement(main, userModel(user));
