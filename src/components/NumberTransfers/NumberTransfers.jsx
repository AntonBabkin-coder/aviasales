import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { check, allChecked } from '../../actions';
import classes from './NumberTransfers.module.scss';

export const NumberTransfers = React.memo(() => {
  const { check1, check2, check3, check4, check5 } = useSelector((state) => state);

  const dispatch = useDispatch();

  if (!check1 && check2 && check3 && check4 && check5) {
    dispatch(allChecked());
  }

  return (
    <div className={classes.block}>
      <div className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className="checkbox">
        <ul>
          <li>
            <input
              id="check1"
              type="checkbox"
              name="check"
              value="check1"
              onChange={(event) => dispatch({ type: check.CHECK1, payload: event.target.checked })}
              checked={check1}
            />
            <label htmlFor="check1">Все</label>
          </li>
          <li>
            <input
              id="check2"
              type="checkbox"
              name="check"
              value="ckeck2"
              onChange={(event) => dispatch({ type: check.CHECK2, payload: event.target.checked })}
              checked={check2}
            />
            <label htmlFor="check2">Без пересадок</label>
          </li>
          <li>
            <input
              id="check3"
              type="checkbox"
              name="check"
              value="check3"
              onChange={(event) => dispatch({ type: check.CHECK3, payload: event.target.checked })}
              checked={check3}
            />
            <label htmlFor="check3">1 пересадка</label>
          </li>
          <li>
            <input
              id="check4"
              type="checkbox"
              name="check"
              value="check4"
              onChange={(event) => dispatch({ type: check.CHECK4, payload: event.target.checked })}
              checked={check4}
            />
            <label htmlFor="check4">2 пересадки</label>
          </li>
          <li>
            <input
              id="check5"
              type="checkbox"
              name="check"
              value="check5"
              onChange={(event) => dispatch({ type: check.CHECK5, payload: event.target.checked })}
              checked={check5}
            />
            <label htmlFor="check5">3 пересадки</label>
          </li>
        </ul>
      </div>
    </div>
  );
});
