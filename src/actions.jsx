export const allChecked = () => ({ type: 'CHECKED' });
export const buttonVariants = {
  BUTTON__CHEAP: 'BUTTON__CHEAP',
  BUTTON__FAST: 'BUTTON__FAST',
};

export const check = {
  CHECK1: 'CHECK1',
  CHECK2: 'CHECK2',
  CHECK3: 'CHECK3',
  CHECK4: 'CHECK4',
  CHECK5: 'CHECK5',
};

export const saveTickets = (ticket, stop) => ({ type: 'SAVE_TICKETS', ticket, stop });
export const loadingIndicator = () => ({ type: 'LOADING' });
export const ticketStop = () => ({ type: 'STOP' });
export const error = () => ({ type: 'ERROR' });
export const addTicket = () => ({ type: 'ADD_TICKET' });

export const getTickets = (request) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API}/tickets?searchId=${request}`)
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

export const getIdSession = () => (dispatch) => {
  fetch(`${process.env.REACT_APP_API}/search`)
    .then((res) => res.json())
    .then((id) => dispatch(getTickets(id.searchId)));
};
