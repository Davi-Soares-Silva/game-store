import { Image, Text, View } from 'react-native';
import styled from 'styled-components';
import colors from '../../styles/colors';

export const GameCard = styled(View)`
  width: 308px;
  height: 200px;
  margin-bottom: 40px;
  flex-direction: row;
  background-color: ${colors.transparent};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
`;

export const Banner = styled(Image)`
  height: 100%;
  width: 45%;
`;

export const InfoContainer = styled(View)`
  height: 100%;
  width: 55%;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.white};

  padding: 16px;
`;

export const Platform = styled(Image)`
  width: 20px;
  height: 20px;

  position: absolute;
  bottom: 16px;
  left: 16px;
`;

export const Price = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.white};
  
  position: absolute;
  right: 16px;
  bottom: 16px;
`;
