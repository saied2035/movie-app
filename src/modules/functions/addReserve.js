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
  // const non_specific_id = document.querySelector('#movieSpace > ');
  const specific_id = document.querySelector('#movieSpace > .hidden_id').innerText;
  console.log(specific_id);
  const raw = JSON.stringify({
    item_id: specific_id,
    username: name.value,
    date_start: start_date.value,
    date_end: end_date.value
  });

  form.reset();
  postReserve(raw, specific_id);
  getReserve(specific_id);
};

export default addReserve;