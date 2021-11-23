import React from 'react';
import S7 from './S7Logo.svg';
import classes from './Ticket.module.scss';

const TicketCard = () => (
  <div className={classes.block}>
    <div className={classes.header}>
      <div className={classes.price}>13 400 P</div>
      <div className="airline">
        <img src={S7} alt="airline" />
      </div>
    </div>
    <div className={classes.flight}>
      <div className={classes.description}>
        <div className={classes}>VOW - HKT</div>
        <div className="way">В ПУТИ</div>
        <div className="transfer">2 ПЕРЕСАДКИ</div>
      </div>
      <div className={classes.time}>
        <div className="time__direction">10:45 – 08:00</div>
        <div className={classes.time__way}>21ч 15м</div>
        <div className="city__transfer">HKG, JNB</div>
      </div>
    </div>
    <div className={classes.flight}>
      <div className={classes.description}>
        <div className="direction">VOW - HKT</div>
        <div className="way">В ПУТИ</div>
        <div className="transfer">2 ПЕРЕСАДКИ</div>
      </div>
      <div className={classes.time}>
        <div className="time__direction">10:45 – 08:00</div>
        <div className={classes.time__way}>21ч 15м</div>
        <div className="city__transfer">HKG, JNB</div>
      </div>
    </div>
  </div>
);

export default TicketCard;
