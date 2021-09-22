import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { getMenus } from "./actions";
import { RestaurantCard } from './components/restaurantCard/RestaurantCard';
import './restaurantsList.css';

import { connect } from 'react-redux';

const RestaurantsList = (props) => {

  const {
    userInfo,
    loadMenus,
    loading
    
  } = props;

  const [load, setLoad] = useState(true);
  const [reload, setReload] = useState(false);
  const [count, setCount] = useState(0);
  const [menus, getMenus] = useState([]);

  useEffect(() => {
    getMenus(0,20);
  }, []);

/*  useEffect(() => {
    if (reload) {
      setMenus([]);
      getMenus(0,20).then();
    }
  }, [reload]);*/


  const Items = React.memo(() => <>
    {menus.map(menuItem =>
      <RestaurantCard restaurant={menuItem} key={menuItem.id} />
    )}
  </>, [menus]);

  return (
    <>
      <Header />
      <div>{`Hola ${userInfo ? userInfo.name : ''}`}</div>
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