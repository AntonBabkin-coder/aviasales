import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import Img from './img/Logo.svg';
import Variants from './components/Variants/Variants';
import CheckboxBlock from './components/NumberTransfers/NumberTransfers';
import { all, loading, getId } from './actions';

const App = () => {
  const dispatch = useDispatch();

  const stopTicket = useSelector((state) => state.stop);

  console.log(stopTicket);

    /* eslint-disable */
  useEffect(() => {
    dispatch(getId());
    // dispatch(buttonCheap());
    dispatch(all());
    dispatch(loading());
  }, []);
  /* eslint-enable */

  return (
    <div className="App">
      <div className="img">
        <img src={Img} alt="plane" />
      </div>
      <div className="main">
        <CheckboxBlock />
        <Variants />
      </div>
    </div>
  );
};

export default App;
