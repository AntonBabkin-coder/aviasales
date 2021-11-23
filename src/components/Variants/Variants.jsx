import React from 'react';
import classes from './Variants.module.scss';
import Ticket from '../Ticket/Ticket';
// import '../../fonts/OpenSans-Semibold.ttf';

const ChangeVariants = () => (
  <div className={classes.block__wrapper}>
    <div className={classes.block}>
      <button className={classes.cheap} type="button">
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className={classes.fast} type="button">
        САМЫЙ БЫСТРЫЙ
      </button>
    </div>
    <Ticket />
  </div>
);

export default ChangeVariants;
