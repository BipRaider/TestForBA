'use strick';

export default ({
  email,
  id,
  name,
  phone,
  username,
  website,
  company,
  address,
}) => {
  return `
  <div id="wrapper">
    <div class="modal" data-item="${id}">
        <button class="btn" type="submit" data-type="btn" ></button>

        <h3 class="modal-nick">${username}</h3>

        <div class="modal-info">
            <p class="modal-name">Name:<span>${name}</span></p>
            <a href="mailto:${email}" class="modal-info__email "><span> ${email}</span></a>
            <a href="tel:+${phone}" class="modal-info__phone"><span> +${phone}</span></a>
            <a href="http://${website}" class="modal-info__website"><span> ${website}</span></a>
        </div>
        <div class="modal-address ">
            <h3 class="modal-name" > Address</h3>
            <p>Street:<span>${address.street}</span> </p>
            <p>Suite:<span>${address.suite}</span></p>
            <p>City:<span>${address.city}</span></p>
            <p>Zipcode:<span>${address.zipcode}</span></p>
        </div>

        <div class="modal-company">
            <h3 class="modal-name" > Company </h3>
            <p>Name:<span>${company.name}</span></p>
            <p>BS:<span>${company.bs}</span></p>
            <p>CatchPhrase:<span>${company.catchPhrase}</span></p>
        </div>
    </div>

  </div>`;
};
