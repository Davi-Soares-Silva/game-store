import { View, Text, Image } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  margin-top: 40px;
  width: 332px;
  height: 300px;
  border-top-right-radius: 20px;
  background-color: #F8F3F515;
  position: relative;
`;

export const SliderTitle = styled(Text)`
  color: white;
  font-size: 40px;
  transform: rotate(-270deg);
  margin-left: 30px;
  position: absolute;
  right: -75px;
  bottom: 40%;
`;

export const SliderImage = styled(Image)`
  width: 300px;
  height: 332px;
  
  position: absolute;
  top: 40px;
  left: -30px;
`;