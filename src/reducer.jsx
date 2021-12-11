const initialState = {
  cheap: true,
  fast: false,
  check1: true,
  check2: true,
  check3: true,
  check4: true,
  check5: true,
  tickets: [],
  loading: true,
  error: false,
  stop: '',
  add: 5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUTTON__CHEAP':
      return { ...state, fast: false, cheap: true };
    case 'BUTTON__FAST':
      return { ...state, fast: true, cheap: false };
    case 'STOP':
      return {
        ...state,
        stop: true,
      };
    case 'ADD_TICKET':
      return {
        ...state,
        add: state.add + 5,
      };
    case 'ERROR':
      return {
        ...state,
        error: true,
        loading: false,
      };
    case 'CHECKED':
      return {
        ...state,
        check1: true,
      };
    case 'CHECK1':
      return {
        ...state,
        check1: action.payload,
        check2: action.payload,
        check3: action.payload,
        check4: action.payload,
        check5: action.payload,
      };

    case 'CHECK2':
      return {
        ...state,
        check2: action.payload,
        check1: false,
      };

    case 'CHECK3':
      return {
        ...state,
        check3: action.payload,
        check1: false,
      };
    case 'CHECK4':
      return {
        ...state,
        check4: action.payload,
        check1: false,
      };
    case 'CHECK5':
      return {
        ...state,
        check5: action.payload,
        check1: false,
      };
    // case 'CHECK1':
    //   return {
    //     ...state,
    //     check1: action.payload,
    //     check2: action.payload,
    //     check3: action.payload,
    //     check4: action.payload,
    //     check5: action.payload,
    //   };

    // case 'CHECK2':
    //   return {
    //     ...state,
    //     check2: action.payload,
    //     check1: false,
    //   };
    // case 'CHECK3':
    //   return {
    //     ...state,
    //     check3: action.payload,
    //     check1: false,
    //   };
    // case 'CHECK4':
    //   return {
    //     ...state,
    //     check4: action.payload,
    //     check1: false,
    //   };
    // case 'CHECK5':
    //   return {
    //     ...state,
    //     check5: action.payload,
    //     check1: false,
    //   };
    case 'SAVE_TICKETS':
      return {
        ...state,
        loading: false,
        tickets: [...state.tickets, ...action.ticket],
        stop: action.stop,
        error: false,
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false,
      };
    default:
      return state;
  }
};

export default reducer;
