'use strick';

export default (data, value) =>
  data.sort((a, b) =>
    a[value].toLowerCase().localeCompare(b[value].toLowerCase()),
  );
