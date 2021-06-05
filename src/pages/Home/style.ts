import { ImageBackground, Platform, SafeAreaView, View } from 'react-native';
import styled from 'styled-components';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

const statusBarHeight = Platform.OS === 'android' ?
  Constants.statusBarHeight : 0;

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};
  justify-content: center;
  align-items: flex-start;
`

export const Container = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;

  align-items: center;
`;

export const Main = styled(View)``;