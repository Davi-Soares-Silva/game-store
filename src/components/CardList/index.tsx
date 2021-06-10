import React from 'react';
import { View, FlatList  } from 'react-native';
import { Banner, GameCard, InfoContainer, Price, Title, Platform } from './style';

interface GameTypes {
  id: string;
  name: string;
  platformIconUrl: string;
  price: number;
  imageUrl: string;
}

const Game = (props: GameTypes) =>  {
  const { name, platformIconUrl, price, imageUrl } = props;

  return (
    <GameCard>
      <Banner source={{
        uri: imageUrl
      }} />
      <InfoContainer>
        <Title>
          {name}
        </Title>
        <Platform source={{
          uri: platformIconUrl
        }}/>
        <Price>R$ {price.toString().replace('.', ',')}</Price>
      </InfoContainer>
    </GameCard>
  );
}

interface GameList {
  gameList: Array<GameTypes>
}

const GameList = ({ gameList }: GameList ) => {
  const renderItem = ({ item }: any) => (
    <Game name={item.name} price={item.price} platformIconUrl={item.platformIconUrl} imageUrl={item.imageUrl} id={item.id}/>
  )


  return (
    <FlatList
      data={gameList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

export default GameList;