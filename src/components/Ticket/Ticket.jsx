import React from 'react';
import { useSelector } from 'react-redux';
import format from 'date-fns/format';
import uuid from 'react-uuid';
import { Spin, Alert } from 'antd';
import 'antd/dist/antd.css';
import classes from './Ticket.module.scss';

const TicketCard = () => {
  const tickets = useSelector((state) => state.tickets);
  const load = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const fast = useSelector((state) => state.fast);
  const cheap = useSelector((state) => state.cheap);
  const check1 = useSelector((state) => state.check1);
  const check2 = useSelector((state) => state.check2);
  const check3 = useSelector((state) => state.check3);
  const check4 = useSelector((state) => state.check4);
  const check5 = useSelector((state) => state.check5);

  let filters = [];

  if (!check1 && !check2 && !check3 && !check4 && !check5) {
    return 'Рейсов, подходящих под заданные фильтры, не найдено';
  }

  if (check1) {
    const allTransfers = tickets.filter((item) => item);
    filters = [...filters, ...allTransfers];
  }

  if (check2) {
    const notTransfers = tickets.filter((item) => item.segments[0].stops.length === 0);
    filters = [...filters, ...notTransfers];
  }

  if (check3) {
    const oneTransfers = tickets.filter((item) => item.segments[0].stops.length === 1);
    filters = [...filters, ...oneTransfers];
  }

  if (check4) {
    const twoTransfers = tickets.filter((item) => item.segments[0].stops.length === 2);
    filters = [...filters, ...twoTransfers];
  }

  if (check5) {
    const threeTransfers = tickets.filter((item) => item.segments[0].stops.length === 3);
    filters = [...filters, ...threeTransfers];
  }

  if (cheap) {
    tickets.sort((one, last) => one.price - last.price);
  }

  if (fast) {
    tickets.sort((one, last) => one.segments[0].duration - last.segments[0].duration);
  }

  const Spiner = () => (
    <div className={classes.example}>
      <Spin />
    </div>
  );

  if (load && !error) {
    return <Spiner />;
  }

  const ErrorIndicator = () => <Alert message="ОШИБКА СЕРВЕРА" description="ОБНОВИТЕ СТРАНИЦУ" type="error" showIcon />;

  if (error === true && !load) {
    return <ErrorIndicator />;
  }

  return filters.slice(0, 10).map((item) => (
    <div key={uuid()} className={classes.block}>
      <div className={classes.header}>
        <div className={classes.price}>{`${String(item.price).slice(0, 2)} ${String(item.price).slice(-3)} Р`}</div>
        <div className="airline">
          <img src={`https://pics.avs.io/99/36/${item.carrier}.png`} alt="airline" />
        </div>
      </div>
      <div className={classes.flight}>
        <div className={classes.description}>
          <div className={classes.direction}>{`${item.segments[0].origin}-${item.segments[0].destination}`}</div>
          <div className={classes.way}>В ПУТИ</div>
          <div className={classes.transfer}>
            {(item.segments[0].stops.length === 1 && '1 ПЕРЕСАДКА') ||
              (item.segments[0].stops.length === 2 && '2 ПЕРЕСАДКИ') ||
              (item.segments[0].stops.length === 3 && '3 ПЕРЕСАДКИ') ||
              (item.segments[0].stops.length === 0 && 'ПРЯМОЙ РЕЙС')}
          </div>
        </div>
        <div className={classes.time}>
          <div className={classes.time__direction}>
            {format(new Date(item.segments[0].date), 'kk:mm')}-
            {format(new Date(new Date(item.segments[0].date).getTime() + item.segments[0].duration * 60000), 'kk:mm')}
          </div>
          <div className={classes.time__way}>{`${Math.floor(item.segments[0].duration / 60)}ч ${
            String(item.segments[0].duration % 60) < 10
              ? String(item.segments[0].duration % 60).padStart(2, '0')
              : item.segments[0].duration % 60
          }м`}</div>
          <div className={classes.city__transfer}>{item.segments[0].stops.map((city) => city).join(' ')}</div>
        </div>
      </div>
      <div className={classes.flight}>
        <div className={classes.description}>
          <div className={classes.direction}>{`${item.segments[1].origin}-${item.segments[1].destination}`}</div>
          <div className={classes.way}>В ПУТИ</div>
          <div className={classes.transfer}>
            {(item.segments[1].stops.length === 1 && '1 ПЕРЕСАДКА') ||
              (item.segments[1].stops.length === 2 && '2 ПЕРЕСАДКИ') ||
              (item.segments[1].stops.length === 3 && '3 ПЕРЕСАДКИ') ||
              (item.segments[1].stops.length === 0 && 'ПРЯМОЙ РЕЙС')}
          </div>
        </div>
        <div className={classes.time}>
          <div className={classes.time__direction}>
            {format(new Date(item.segments[1].date), 'kk:mm')}-
            {format(new Date(new Date(item.segments[1].date).getTime() + item.segments[1].duration * 60000), 'kk:mm')}
          </div>
          <div className={classes.time__way}>{`${Math.floor(item.segments[1].duration / 60)}ч ${
            String(item.segments[1].duration % 60) < 10
              ? String(item.segments[1].duration % 60).padStart(2, '0')
              : item.segments[1].duration % 60
          }м`}</div>
          <div className={classes.city__transfer}>{item.segments[1].stops.map((city) => city).join(' ')}</div>
        </div>
      </div>
    </div>
  ));
};

export default TicketCard;
