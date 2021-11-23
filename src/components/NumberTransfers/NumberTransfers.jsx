import React from 'react';
import classes from './NumberTransfers.module.scss';

const NumberTransfers = () => (
  <div className={classes.block}>
    <div className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
    <div className="checkbox">
      <ul>
        <li>
          <input id="check1" type="checkbox" name="check" value="check1" />
          <label htmlFor="check1">Все</label>
        </li>
        <li>
          <input id="check2" type="checkbox" name="check" value="check2" />
          <label htmlFor="check2">Без пересадок</label>
        </li>
        <li>
          <input id="check3" type="checkbox" name="check" value="check3" />
          <label htmlFor="check3">1 пересадка</label>
        </li>
        <li>
          <input id="check4" type="checkbox" name="check" value="check4" />
          <label htmlFor="check4">2 пересадки</label>
        </li>
        <li>
          <input id="check5" type="checkbox" name="check" value="check5" />
          <label htmlFor="check5">3 пересадки</label>
        </li>
      </ul>
    </div>
  </div>
);

export default NumberTransfers;
