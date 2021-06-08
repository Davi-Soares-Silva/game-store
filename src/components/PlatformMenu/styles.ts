import styled from 'styled-components';
import { Image, ScrollView, TouchableOpacity } from 'react-native';

export const Container = styled(ScrollView)`
  margin-top: 14px;
  width: 100%;
  max-height: 100px;
  margin-right: 30px;
`;

export const ButtonPlatform = styled(TouchableOpacity)`
  width: 90px;
  height: 90px;

  margin-left: 32px;
  border-radius: 10px;

  justify-content: center;
  align-items: center;

  background-color: #F8F3F515;
`;

export const ButtonImage = styled(Image)`
  width: 60px;
  height: 60px;
`;