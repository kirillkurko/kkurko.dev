import { useState } from 'react';
import Image from 'next/image';
import { TRAVIS_IMAGE, POKRAS_IMAGE, COME_BACK_IMAGE } from '@constants/images';
import { Wrapper, ImageWrapper, Text } from './atoms';

const images = [TRAVIS_IMAGE, POKRAS_IMAGE, COME_BACK_IMAGE];

function About() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const changeImage = () =>
    setActiveImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );

  return (
    <Wrapper id='about' onClick={changeImage}>
      <Text>Привет</Text>
      <ImageWrapper>
        <Image
          src={images[activeImageIndex]}
          alt='phone-hand'
          width={100}
          height={100}
          layout='fill'
          objectFit='contain'
          priority
        />
      </ImageWrapper>
    </Wrapper>
  );
}

export default About;
