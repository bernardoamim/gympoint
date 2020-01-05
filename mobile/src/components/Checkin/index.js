import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, Info, Time } from './styles';

export default function Checkin({ date, num }) {
  const dateFormatted = useMemo(() => {
    return formatDistance(parseISO(date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [date]);

  return (
    <Container>
      <Info>{`Check-in #${num}`}</Info>
      <Time>{dateFormatted}</Time>
    </Container>
  );
}

Checkin.propTypes = {
  date: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
};
