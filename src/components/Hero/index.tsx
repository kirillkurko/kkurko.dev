import { Wrapper, BlobWrapper, Text, TextBlock, Title } from './atoms';
import Image from 'next/image';

const BLOB = '/assets/images/blob.svg';

const WIDTH = 800;

function Hero() {
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
          width={WIDTH}
          height={WIDTH}
        />
      </BlobWrapper>
    </Wrapper>
  );
}

export default Hero;
