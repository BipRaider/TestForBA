'use strick';

export default (id, db) => {
  return db
    .then(data => data.find(user => user.id === Number(id)))
    .catch(err => {
      throw err;
    });
};
