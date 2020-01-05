import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import api from '~/services/api';
import { DefaultBackground } from '~/components/Background';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function NewOrder({ navigation }) {
  const { student } = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false);
  const [helpOrder, setHelpOrder] = useState('');

  async function handleSubmit() {
    setLoading(true);
    try {
      await api.post(`students/${student.id}/help-orders`, {
        question: helpOrder,
      });

      setLoading(false);
    } catch (err) {
      if (err.response && err.response.data) {
        setLoading(false);
        Alert.alert(err.response.data.error);
      }
    }

    navigation.navigate('HelpOrders');
  }

  return (
    <DefaultBackground>
      <Container>
        <Form>
          <FormInput
            autoCorrect={false}
            multiline
            textAlignVertical="top"
            autoCapitalize="sentences"
            placeholder="Inclua seu pedido de auxílio"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={helpOrder}
            onChangeText={setHelpOrder}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Enviar pedido
          </SubmitButton>
        </Form>
      </Container>
    </DefaultBackground>
  );
}

NewOrder.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
