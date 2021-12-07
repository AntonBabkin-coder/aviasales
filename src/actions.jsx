export const buttonCheap = () => ({ type: 'BUTTON__CHEAP' });
export const buttonFast = () => ({ type: 'BUTTON__FAST' });
export const all = () => ({ type: 'CHECKED' });
export const put1 = (payload) => ({ type: 'CHECK1', payload });
export const put2 = (payload) => ({ type: 'CHECK2', payload });
export const put3 = (payload) => ({ type: 'CHECK3', payload });
export const put4 = (payload) => ({ type: 'CHECK4', payload });
export const put5 = (payload) => ({ type: 'CHECK5', payload });
export const saveTickets = (ticket, stop) => ({ type: 'SAVE_TICKETS', ticket, stop });
export const loading = () => ({ type: 'LOADING' });
export const ticketStop = () => ({ type: 'STOP' });
export const error = () => ({ type: 'ERROR' });

export const getTickets = (request) => (dispatch) => {
  fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${request}`)
    .then((res) => res.json())
    .then((items) => {
      dispatch(saveTickets(items.tickets, items.stop));
      if (items.stop === false) {
        dispatch(getTickets(request));
      } else if (items.stop === true) {
        dispatch(ticketStop());
      }
    })
    .catch(() => dispatch(error()));
};

export const getId = () => (dispatch) => {
  fetch('https://front-test.beta.aviasales.ru/search')
    .then((res) => res.json())
    .then((id) => dispatch(getTickets(id.searchId)));
};