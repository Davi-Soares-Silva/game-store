import React from 'react';

import { Container, ButtonPlatform, ButtonImage } from './styles';

import imgPsLogo from '../../assets/images/ps-logo.png';
import imgXboxLogo from '../../assets/images/xbox-logo.png';
import imgNintendoLogo from '../../assets/images/nintendo-logo.png';
import imgPcLogo from '../../assets/images/pc-logo.png';

const PlatformMenu: React.FC = () => {
  return (
    <Container 
      horizontal={true}
      contentContainerStyle={{
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
      showsHorizontalScrollIndicator={false}
    >
      <ButtonPlatform>
        <ButtonImage source={imgPsLogo} />
      </ButtonPlatform>
      <ButtonPlatform>
        <ButtonImage source={imgXboxLogo} />
      </ButtonPlatform>
      <ButtonPlatform>
        <ButtonImage source={imgNintendoLogo} />
      </ButtonPlatform>
      <ButtonPlatform>
        <ButtonImage source={imgPcLogo} />
      </ButtonPlatform>
    </Container>
  );
};

export default PlatformMenu;
