'use strick';

export default ({ email, id, name, phone, username, website }) => {
  return `
  <li class="user" data-item="${id}">
      <span>${username}</span>
      <span>${name}</span>
      <a href="mailto:${email}"> ${email}</a>
      <a href="tel:+${phone}">+${phone}</a>
      <a href="http://${website}">${website}</a>
  </li>`;
};
