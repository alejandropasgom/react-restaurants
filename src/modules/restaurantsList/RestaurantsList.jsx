import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { getMenus } from "./actions";
import { RestaurantCard } from './components/restaurantCard/RestaurantCard';
import './restaurantsList.css';

import { connect } from 'react-redux';

const RestaurantsList = (props) => {

  const {
    userInfo,
    menus,
    loading

  } = props;

  const [load, setLoad] = useState(true);
  const [reload, setReload] = useState(false);
  const [count, setCount] = useState(0);


  const Items = React.memo(() => <>
    {menus.item.map(menuItem =>
      <RestaurantCard restaurant={menuItem} key={menuItem.id} />
    )}
  </>, [menus]);

  return (
    <>
      <Header />
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>Add count</button>
      </div>
      <button onClick={() => setReload(true)}>Reload</button>
      <div className="restaurants">
        {load &&
          <div className="loading">Cargando</div>
        }
        {!load && <Items />}
      </div>
    </>
  );
}

export default connect(
  store => ({
    loading: store.restaurantsList.loading,
    menus: store.restaurantsList.menus
  }),
  dispatch => ({
    loadMenus: (start,count) => dispatch(getMenus(start,count))
  })
)(RestaurantsList);