'use strick';

import { addElement } from '../helpers';
import { users } from '../dom/refs';
import userModel from '../templates/userModel';

export default user => addElement(users, userModel(user));
