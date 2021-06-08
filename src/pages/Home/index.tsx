import React from 'react';

import { Wrapper, Container } from './style';
import imgLinearGradient from '../../assets/images/linear-gradient.png';
import PlatformMenu from '../../components/PlatformMenu';
import Slider from '../../components/Slider';
import SearchBar from '../../components/SearchBar';
import CardList from '../../components/CardList';


const Home = () => {
  return(
    <Wrapper>
      <Container source={imgLinearGradient}>
        <PlatformMenu />
        <Slider />
        <SearchBar />
        <CardList />
      </Container>
    </Wrapper>
  )
}

export default Home;