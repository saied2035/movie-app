import { postReserve, getReserve } from '../events/reserve_api.js';

export const reserveCount = (items) => {
  const reserveCountDisplay = document.querySelector('#reserveCount');
  reserveCountDisplay.innerText = `(${items.length})`;
};

const addReserve = () => {
  const name = document.querySelector('#name');
  const startDate = document.querySelector('#start_date');
  const endDate = document.querySelector('#end_date');
  const form = document.querySelector('#reserveForm');
  const specificId = document.querySelector('#movieSpace > .hidden_id').innerText;
  const raw = JSON.stringify({
    item_id: specificId,
    username: name.value,
    date_start: startDate.value,
    date_end: endDate.value,
  });

  form.reset();
  postReserve(raw, specificId).then(() => {
    getReserve(specificId).then((loadReserves) => reserveCount(loadReserves));
  });
};

export default addReserve;