import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const SubmitButton = styled(Button)`
  margin: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
`;

export const LoadMoreButton = styled(Button)`
  display: ${props => (props.visible ? 'flex' : 'none')};
`;

export const LogoutButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const LogoutText = styled.Text`
  color: #4d85ee;
  font-weight: bold;
  font-size: 14px;
`;
