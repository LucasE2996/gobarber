import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 46px;
  background-color: #fff;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${props => (props.dark ? '#666' : '#fff')};
`;
