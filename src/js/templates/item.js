'use strick';

export default ({ email, id, name, phone, username, website }) => {
  return `
  <li class="user" data-item="${id}">
      <span data-label="Nickname:">${username}</span>
      <span data-label="Full Name:">${name}</span>
      <a href="mailto:${email}" data-label="Email:"> ${email}</a>
      <a href="tel:+${phone}" data-label="Phone:">+${phone}</a>
      <a href="http://${website}" data-label="Website:" >${website}</a>
  </li>`;
};
