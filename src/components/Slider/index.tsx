import React from 'react';
import {
  Container,
  SliderImage,
  SliderTitle
} from './style';

import imgViking from '../../assets/images/viking.png';

const Slider = () => {
  return (
    <Container>
      <SliderTitle>
        RAGNAROK
      </SliderTitle>
      <SliderImage source={imgViking} />
    </Container>
  )
}

export default Slider;