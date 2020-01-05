import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const FormInput = styled.TextInput.attrs({
  multiline: true,
  textAlignVertical: 'top',
})`
  color: #666;
  font-size: 16px;
  line-height: 19px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 20px 20px 0;
  height: 350px;
  padding: 20px;
`;

export const SubmitButton = styled(Button)`
  margin: 20px;
`;
