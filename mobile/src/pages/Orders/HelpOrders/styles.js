import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const SubmitButton = styled(Button)`
  margin: 20px;
`;

export const HelpOrdersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
`;

export const Order = styled(RectButton)`
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 150px;
`;

export const Header = styled.View`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StatusText = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.answered ? '#42CB59' : '#999')};
`;

export const Time = styled.Text`
  color: #666;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
`;

export const OrderDetails = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 14px;
  align-self: flex-start;
  color: #666;
  line-height: 26px;
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
