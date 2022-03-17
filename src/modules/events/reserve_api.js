export const postReserve = async (raw) => {
    await fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6IS1WqwHJvP8CAVA1Fp2/reservations/',
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

export const getReserve = async () => {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6IS1WqwHJvP8CAVA1Fp2/reservations/',
      {
          method: 'GET',
          redirect: 'follow',
        },
    )
    const loadReserves = await response.json();
    const loadReserveSpace = document.querySelector('#loadReserveSpace');
    loadReserveSpace.innerHTML = '';
    loadReserves.result.forEach((event) => {
    loadReserveSpace.innerHTML += `${event.date_start}- ${event.date_end} by ${event.username}`;
    });
}