'use strick';

import './scss/main.scss';
import './js/app';

import App from './js/app';
import db from './js/db/getUsers';

new App(db);
