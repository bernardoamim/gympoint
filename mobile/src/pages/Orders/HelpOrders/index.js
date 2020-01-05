import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO, formatDistance } from 'date-fns';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';
import api from '~/services/api';
import { DefaultBackground } from '~/components/Background';
import { signOut } from '~/store/modules/auth/actions';
import {
  Container,
  SubmitButton,
  HelpOrdersList,
  Order,
  Header,
  Status,
  StatusText,
  Time,
  OrderDetails,
  LoadMoreButton,
  LogoutButton,
  LogoutText,
} from './styles';

function HelpOrders({ isFocused, navigation }) {
  const dispatch = useDispatch();
  const { student } = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false);
  const [rawData, setRawData] = useState({});
  const [helpOrders, setHelpOrders] = useState([]);

  async function loadHelpOrders(page = 1) {
    try {
      setLoading(true);

      const response = await api.get(`students/${student.id}/help-orders`, {
        params: {
          page,
        },
      });

      setRawData(response.data);
      setHelpOrders([...helpOrders, ...response.data.helpOrders]);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      Alert.alert('Não foi possível encontar seus dados.');
    }
  }

  useEffect(() => {
    if (isFocused) {
      loadHelpOrders();
    }
  }, [isFocused]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <DefaultBackground>
      <Container>
        <SubmitButton onPress={() => navigation.navigate('NewOrder')}>
          Novo pedido de auxílio
        </SubmitButton>
        <HelpOrdersList
          data={helpOrders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item: order }) => (
            <Order
              data={order}
              onPress={() => navigation.navigate('ViewOrder', { order })}
            >
              <Header>
                <Status>
                  {order.answered_at ? (
                    <Icon name="check-circle" color="#42CB59" size={16} />
                  ) : (
                    <Icon name="check-circle" color="#999" size={16} />
                  )}

                  <StatusText answered={!!order.answered_at}>
                    {order.answered_at ? 'Respondido' : 'Sem resposta'}
                  </StatusText>
                </Status>
                <Time>
                  {formatDistance(parseISO(order.updatedAt), new Date(), {
                    locale: pt,
                    addSuffix: true,
                  })}
                </Time>
              </Header>
              <OrderDetails>{order.question}</OrderDetails>
            </Order>
          )}
          ListFooterComponent={
            <LoadMoreButton
              visible={rawData.total > rawData.page * rawData.perPage}
              loading={loading}
              onPress={() => loadHelpOrders(Number(rawData.page) + 1)}
            >
              Carregar mais
            </LoadMoreButton>
          }
        />
        <LogoutButton onPress={handleLogout}>
          <LogoutText>sair do sistema</LogoutText>
        </LogoutButton>
      </Container>
    </DefaultBackground>
  );
}

HelpOrders.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigationFocus(HelpOrders);
