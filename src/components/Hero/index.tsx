import { Wrapper, BlobWrapper, Text, TextBlock, Title } from './atoms';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const BLOB = '/assets/images/blob.svg';

function Hero() {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Wrapper id='hero'>
      <TextBlock>
        <Title>100% - Frontend Engineer.</Title>
        <Title>150% - Penguin.</Title>
        <Title>200% - CEO mentality.</Title>
        <Text>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Hello, I'm Kirill. I make single employees, teams and projects grow.
        </Text>
        <Text>
          I started my career with backend and then switched to frontend. I have
          a good understanding of design.
        </Text>
        <Text>
          I had a chance to work with many startups from small to large. Most of
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          the time I'm working on React/React Native positions, acting as a
          team-lead.
        </Text>
        <Text>
          My main focus is keep Track Factor as high as possible, making sure
          there are no bottlenecks in processes and among employees.
        </Text>
      </TextBlock>
      <BlobWrapper>
        <Image
          priority={true}
          src={BLOB}
          alt='abstract shape'
          width={width / 2}
          height={width / 2}
        />
      </BlobWrapper>
    </Wrapper>
  );
}

export default Hero;
