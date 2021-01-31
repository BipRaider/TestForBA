'use strict';

export default () =>
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data => {
      if (!data.length) throw new Error('DB not responding');
      return data;
    })
    .catch(err => {
      throw err;
    });
