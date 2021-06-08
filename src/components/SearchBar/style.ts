import styled from 'styled-components';

import Icon from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native';


export const Container = styled(LinearGradient)`
  width: 332px;
  margin-top: 100px;
  margin-bottom: 40px;
  border-radius: 20px;

  align-items: center;
`;

export const Bar = styled(TextInput)`
  width: 332px;
  height: 40px;
  
  border-radius: 20px;
  padding-left: 14px;
  background-color:  #F8F3F515;

  color: #FFFFFF;
`;