import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { buttonCheap, buttonFast } from '../../actions';

import classes from './Variants.module.scss';
import Ticket from '../Ticket/Ticket';

const ChangeVariants = () => {
  const cheap = useSelector((state) => state.cheap);

  const fast = useSelector((state) => state.fast);
  const dispatch = useDispatch();
  let buttonClassCheap = '';
  let buttonClassFast = '';
  if (cheap === true) {
    buttonClassCheap = classes.default;
  }
  if (fast === true) {
    buttonClassFast = classes.default;
  }

  return (
    <div className={classes.block__wrapper}>
      <div className={classes.block}>
        <button
          className={[classes.cheap, buttonClassCheap].join(' ')}
          type="button"
          onClick={() => dispatch(buttonCheap())}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
        <button
          className={[classes.fast, buttonClassFast].join(' ')}
          type="button"
          onClick={() => dispatch(buttonFast())}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
      </div>
      <Ticket />
    </div>
  );
};

export default ChangeVariants;
