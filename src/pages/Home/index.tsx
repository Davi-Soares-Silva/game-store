import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Wrapper, Container } from './style';
import imgLinearGradient from '../../assets/images/linear-gradient.png';
import PlatformMenu from '../../components/PlatformMenu';
import Slider from '../../components/Slider';
import SearchBar from '../../components/SearchBar';
import CardList from '../../components/CardList';

const api = axios.create({
  baseURL: 'http://192.168.0.195:3333/api'
});


const Home = () => {

  const [data, setData] = useState([]);

  useEffect( () => {
    api.get('/games').then((response) => {
      setData(response.data.payload);
    }).catch(error => console.log(error));
  }, []);

  return(
    <Wrapper>
      <Container source={imgLinearGradient}>
        <PlatformMenu />
        <Slider />
        <SearchBar />
        {
          data.length > 0 && (
            <CardList gameList={data}/>
          )
        }
      </Container>
    </Wrapper>
  )
}

export default Home;