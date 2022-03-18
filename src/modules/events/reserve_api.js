import { reserveCount } from "../functions/addReserve.js";
export const postReserve = async (raw , id) => {
    await fetch(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6IS1WqwHJvP8CAVA1Fp2/reservations?item_id=${id}`,
      {
        method: 'post',
        headers: {
          'Content-type': 'application/json; charset= UTF-8',
        },
        body: raw,
        redirect: 'follow',
      },
    );
    console.log(id);
  };

export const getReserve = async (id) => {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6IS1WqwHJvP8CAVA1Fp2/reservations?item_id=${id}`,
      {
          method: 'GET',
          redirect: 'follow',
        },
    )
    const loadReserves = await response.json();
    console.log(loadReserves);
    const loadReserveSpace = document.querySelector('#loadReserveSpace');
    loadReserveSpace.innerHTML = '';
    loadReserves.forEach((item) => {
    loadReserveSpace.innerHTML += `<li>${item.date_start}- ${item.date_end} by ${item.username} </li>`;
    });
    reserveCount(loadReserves);
}