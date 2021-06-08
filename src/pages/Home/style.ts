import { ImageBackground, Platform, ScrollView, View } from 'react-native';
import styled from 'styled-components';
import Constants from 'expo-constants';

const statusBarHeight = Platform.OS === 'android' ?
  Constants.statusBarHeight : 0;

export const Wrapper = styled(ScrollView)`
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};
`

export const Container = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;

  align-items: center;
`;

export const Main = styled(View)``;