import React from 'react'
import { useDispatch } from 'react-redux';
import { addTicket } from '../../actions';
import classes from './ButtonAdd.module.scss';

export const ButtonAdd = () =>      {
    const dispatch = useDispatch();
    return (<div className={classes.buttonadd}>
    <button className={classes.add} type="button" onClick={() => dispatch(addTicket())}>
      Показать еще 5 билетов
    </button>
  </div>)
}


