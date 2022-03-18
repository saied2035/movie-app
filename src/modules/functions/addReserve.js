import { postReserve, getReserve } from "../events/reserve_api.js";

const addReserve = (event) => {
  const name = document.querySelector('#name');
  const start_date = document.querySelector('#start_date');
  const end_date = document.querySelector('#end_date');
  const form = document.querySelector('#reserveForm');
  // const movie = event.target.closest('.movie-item');
  // const idContainer = movie.querySelector('.hidden-id');
  // const id = idContainer.innerText;

  // console.log(id);
  const raw = JSON.stringify({
    item_id: '1',
    username: name.value,
    date_start: start_date.value,
    date_end: end_date.value
  });
  postReserve(raw);
  form.reset();
  getReserve();
};

export default addReserve;