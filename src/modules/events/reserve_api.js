const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6IS1WqwHJvP8CAVA1Fp2/';

export const postReserve = async (raw, id) => {
  await fetch(
    `${API}reservations?item_id=${id}`,
    {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset= UTF-8',
      },
      body: raw,
      redirect: 'follow',
    },
  );
};

export const getReserve = async (id) => {
  const response = await fetch(
    `${API}reservations?item_id=${id}`,
    {
      method: 'GET',
      redirect: 'follow',
    },
  );
  const loadReserves = await response.json();
  const loadReserveSpace = document.querySelector('#loadReserveSpace');
  loadReserveSpace.innerHTML = '';
  loadReserves.forEach((item) => {
    loadReserveSpace.innerHTML += `<li>${item.date_start}- ${item.date_end} by ${item.username} </li>`;
  });
  return loadReserves;
};