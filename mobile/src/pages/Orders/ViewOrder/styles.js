import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Order = styled.View`
  margin: 20px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: auto;
`;

export const QuestionHeader = styled.View`
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

export const ItemTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #666;
`;

export const Time = styled.Text`
  color: #666;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
`;

export const ItemText = styled.Text`
  height: auto;
  font-size: 14px;
  align-self: flex-start;
  color: #666;
  line-height: 26px;
`;

export const AnswerHeader = styled.View`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;
