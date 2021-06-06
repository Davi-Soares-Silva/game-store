import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors';

import { Bar, Container } from "./style";

const SearchBar = () => {
  return (
    <Container 
      colors={['#8C7D8200', '#e95b5b10']}
      start={[0, 1]} end={[1, 0]}
    >
      <Bar placeholder="Digite o nome do jogo."/>
      <Icon 
        name="search" 
        size={25} 
        color={colors.white}
        style={{
          position: 'absolute',
          top: '15%',
          right: 10,
        }}
      />
    </Container>
  )
}

export default SearchBar;