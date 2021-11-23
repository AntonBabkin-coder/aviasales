import React from 'react';
import './App.scss';
import Img from './img/Logo.svg';
import Variants from './components/Variants/Variants';

import CheckboxBlock from './components/NumberTransfers/NumberTransfers';

const App = () => (
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

export default App;
