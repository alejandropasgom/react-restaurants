import {
  MENU_REQUEST,
  MENU_RESPONSE
} from './actions';

const initialState = {
  menus: null,
  loading: false,
  error: null
};

const restaurantsList = (state = initialState, action) => {
  switch (action.type) {
    case MENU_REQUEST:
      return {
        ...state,
        loading : true
      };
    case MENU_RESPONSE:
      return {
          ...state,
          loading : false,
          menus : action.menus
        };
    default:
      return state;
  }
};

export default restaurantsList;