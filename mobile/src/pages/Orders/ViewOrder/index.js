import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { DefaultBackground } from '~/components/Background';
import {
  Container,
  Order,
  QuestionHeader,
  ItemTitle,
  Time,
  ItemText,
  AnswerHeader,
} from './styles';

export default function ViewOrder({ navigation }) {
  const order = navigation.getParam('order');

  return (
    <DefaultBackground>
      <Container>
        <Order>
          <QuestionHeader>
            <ItemTitle>PERGUNTA</ItemTitle>
            <Time>
              {formatDistance(parseISO(order.createdAt), new Date(), {
                locale: pt,
                addSuffix: true,
              })}
            </Time>
          </QuestionHeader>
          <ItemText>{order.question}</ItemText>
          <AnswerHeader>
            <ItemTitle>RESPOSTA</ItemTitle>
            {order.answered_at && (
              <Time>
                {formatDistance(parseISO(order.createdAt), new Date(), {
                  locale: pt,
                  addSuffix: true,
                })}
              </Time>
            )}
          </AnswerHeader>
          {order.answered_at && <ItemText>{order.answer}</ItemText>}
        </Order>
      </Container>
    </DefaultBackground>
  );
}

ViewOrder.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
