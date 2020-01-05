import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 48px;
`;

export const Info = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const Time = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
  color: #666;
`;
