import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { buttonVariants } from '../../actions';
import { ButtonAdd } from '../ButtonAdd/ButtonAdd';
import classes from './Variants.module.scss';
import { TicketCard } from '../Ticket/Ticket';

export const ChangeVariants = React.memo(() => {
  const { cheap, fast, error, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  const classesCheap = cn(classes.cheap, { [classes.default]: cheap && [classes.default] });
  const classesFast = cn(classes.fast, { [classes.default]: fast && [classes.default] });

  return (
    <div className={classes.block__wrapper}>
      <div className={classes.block}>
        <button className={classesCheap} type="button" onClick={() => dispatch({ type: buttonVariants.BUTTON__CHEAP })}>
          САМЫЙ ДЕШЕВЫЙ
        </button>
        <button className={classesFast} type="button" onClick={() => dispatch({ type: buttonVariants.BUTTON__FAST })}>
          САМЫЙ БЫСТРЫЙ
        </button>
      </div>
      <TicketCard />
      {!error && !loading ? <ButtonAdd /> : null}
    </div>
  );
});
