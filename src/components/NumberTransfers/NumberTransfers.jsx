import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { put1, put2, put3, put4, put5, all } from '../../actions';
import classes from './NumberTransfers.module.scss';

const NumberTransfers = () => {
  const check1 = useSelector((state) => state.check1);
  const check2 = useSelector((state) => state.check2);
  const check3 = useSelector((state) => state.check3);
  const check4 = useSelector((state) => state.check4);
  const check5 = useSelector((state) => state.check5);

  // const { check1, check2, check3, check4, check5 } = useSelector((state) => state);

  const dispatch = useDispatch();

  if (check2 && check3 && check4 && check5) {
    dispatch(all());
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
              onChange={(event) => dispatch(put1(event.target.checked))}
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
              onChange={(event) => dispatch(put2(event.target.checked))}
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
              onChange={(event) => dispatch(put3(event.target.checked))}
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
              onChange={(event) => dispatch(put4(event.target.checked))}
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
              onChange={(event) => dispatch(put5(event.target.checked))}
              checked={check5}
            />
            <label htmlFor="check5">3 пересадки</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NumberTransfers;
