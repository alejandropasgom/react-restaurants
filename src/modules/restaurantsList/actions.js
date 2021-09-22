import { Config } from "../../config/Config";

export const MENU_REQUEST = 'MENU_REQUEST';
export const MENU_RESPONSE = 'MENU_RESPONSE';

export const getMenus = (start, count) => {
    return dispatch => {
        dispatch({
          type: MENU_REQUEST
        });

        return fetch(Config.backendBaseUrl + '/menus')
        .then(response  => response.json()).then(menus => {
            dispatch({
                type: MENU_RESPONSE,
                menus
            });
        });
    }
}