import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch } from 'react-redux';
import Img from './img/Logo.svg';
import { ChangeVariants } from './components/Variants/Variants';
import { NumberTransfers } from './components/NumberTransfers/NumberTransfers';
import { loadingIndicator, getIdSession } from './actions';

export const App = React.memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIdSession());
    dispatch(loadingIndicator());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="img">
        <img src={Img} alt="plane" />
      </div>
      <div className="main">
        <NumberTransfers />
        <ChangeVariants />
      </div>
    </div>
  );
});
