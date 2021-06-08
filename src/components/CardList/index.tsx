import React from 'react';
import { View, FlatList  } from 'react-native';
import { Banner, GameCard, InfoContainer, Price, Title, Platform } from './style';

const data = [
  {
    key: '1',
    imageUrl: 'https://image.api.playstation.com/cdn/UP0002/CUSA07402_00/03ZtrPdjasIxzi8QrzOb2zCIHLMydFbh.png',
    title: 'Crash Bandicoot N-Sane Trilogy - PS4',
    platformUrl: 'https://i.ibb.co/6XV1c2N/ps-logo.png',
    price: 120.89
  },
  {
    key: '2',
    imageUrl: 'https://image.api.playstation.com/cdn/UP0002/CUSA07402_00/03ZtrPdjasIxzi8QrzOb2zCIHLMydFbh.png',
    title: 'Crash Bandicoot N-Sane Trilogy - PS4',
    platformUrl: 'https://i.ibb.co/6XV1c2N/ps-logo.png',
    price: 72.99
  },
  {
    key: '3',
    imageUrl: 'https://image.api.playstation.com/cdn/UP0002/CUSA07402_00/03ZtrPdjasIxzi8QrzOb2zCIHLMydFbh.png',
    title: 'Crash Bandicoot N-Sane Trilogy - PS4',
    platformUrl: 'https://i.ibb.co/6XV1c2N/ps-logo.png',
    price: 233.50
  },
  {
    key: '4',
    imageUrl: 'https://image.api.playstation.com/cdn/UP0002/CUSA07402_00/03ZtrPdjasIxzi8QrzOb2zCIHLMydFbh.png',
    title: 'Crash Bandicoot N-Sane Trilogy - PS4',
    platformUrl: 'https://i.ibb.co/6XV1c2N/ps-logo.png',
    price: 10.6
  },
  {
    key: '5',
    imageUrl: 'https://image.api.playstation.com/cdn/UP0002/CUSA07402_00/03ZtrPdjasIxzi8QrzOb2zCIHLMydFbh.png',
    title: 'Crash Bandicoot N-Sane Trilogy - PS4',
    platformUrl: 'https://i.ibb.co/6XV1c2N/ps-logo.png',
    price: 400.15
  },
];

interface GameTypes {
  title: string;
  platformUrl: string;
  price: number;
  imageUrl: string;
}

const Game = (props: GameTypes) =>  {
  const { title, platformUrl, price, imageUrl } = props;

  return (
    <GameCard>
      <Banner source={{
        uri: imageUrl
      }} />
      <InfoContainer>
        <Title>
          {title}
        </Title>
        <Platform source={{
          uri: platformUrl
        }}/>
        <Price>R$ {price.toString().replace('.', ',')}</Price>
      </InfoContainer>
    </GameCard>
  );
}

const GameList = () => {
  const renderItem = ({ item }: any) => (
    <Game title={item.title} price={item.price} platformUrl={item.platformUrl} imageUrl={item.imageUrl} />
  )


  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
    />
  );
}

export default GameList;