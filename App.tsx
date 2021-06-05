import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Home from './src/pages/Home';
import colors from './src/styles/colors';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.backgroundLight} />
      <Home />
    </>
  );
}
