import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import api from '~/services/api';
import { DefaultBackground } from '~/components/Background';
import Checkin from '~/components/Checkin';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  SubmitButton,
  List,
  LoadMoreButton,
  LogoutButton,
  LogoutText,
} from './styles';

export default function Checkins() {
  const dispatch = useDispatch();
  const [rawData, setRawData] = useState({});
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(false);
  const { student } = useSelector(state => state.auth);

  async function loadCheckins(page = 1) {
    try {
      setLoading(true);

      const response = await api.get(`students/${student.id}/checkins`, {
        params: {
          page,
        },
      });

      setRawData(response.data);

      if (response.data.checkins.length) {
        const formattedCheckins = await response.data.checkins.map(
          (checkin, idx) => ({
            ...checkin,
            num: String(response.data.total - idx - checkins.length),
          })
        );
        setCheckins([...checkins, ...formattedCheckins]);
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      Alert.alert('Não foi possível encontar seus dados.');
    }
  }

  useEffect(() => {
    loadCheckins();
  }, []);

  async function handleAddCheckin() {
    try {
      setLoading(true);
      await api.post(`students/${student.id}/checkins`);

      setLoading(false);
      loadCheckins();
    } catch (err) {
      if (err.response && err.response.data) {
        setLoading(false);
        Alert.alert(err.response.data.error);
      }
    }
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <DefaultBackground>
      <Container>
        <SubmitButton loading={loading} onPress={handleAddCheckin}>
          Novo check-in
        </SubmitButton>
        <List
          data={checkins}
          refreshing={loading}
          keyExtractor={item => String(item.num)}
          renderItem={({ item }) => (
            <Checkin date={item.createdAt} num={item.num} />
          )}
          ListFooterComponent={
            <LoadMoreButton
              visible={rawData.total > rawData.page * rawData.perPage}
              loading={loading}
              onPress={() => loadCheckins(Number(rawData.page) + 1)}
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
