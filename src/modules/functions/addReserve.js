import { postReserve, getReserve } from "../events/reserve_api.js";

const addReserve = () => {
  const name = document.querySelector('#name');
  const start_date = document.querySelector('#start_date');
  const end_date = document.querySelector('#end_date');
  const form = document.querySelector('.reserveForm');
  const raw = JSON.stringify({
    item_id: "",
    username: name.value,
    date_start: start_date.value,
    date_end: end_date.value
  });
  postReserve(raw);
  form.reset();
  getReserve();
};

export default addReserve;