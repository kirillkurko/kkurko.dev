import { Wrapper, BlobWrapper, TextBlock } from './atoms';
import { PageTitle } from '@components/atoms';
import { Paragraph } from '@components/atoms';
// import Image from 'next/image';

// const BLOB = '/assets/images/blob.svg';

// const WIDTH = 800;

function Hero() {
  return (
    <Wrapper>
      <TextBlock>
        <PageTitle style={{ marginTop: 0 }}>
          100% - Frontend Engineer.
        </PageTitle>
        <PageTitle>150% - Penguin.</PageTitle>
        <PageTitle>200% - CEO mentality.</PageTitle>
        <Paragraph>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Hello, I'm Kirill. I make single employees, teams and projects grow.
        </Paragraph>
        <Paragraph>
          I started my career with backend and then switched to frontend. I have
          a good understanding of design.
        </Paragraph>
        <Paragraph>
          I had a chance to work with many startups from small to large. Most of
          {/* eslint-disable-next-line react/no-unescaped-entities */} the time
          I'm working on React/React Native positions, acting as a team-lead.
        </Paragraph>
        <Paragraph>
          My main focus is to keep Track Factor as high as possible, making sure
          there are no bottlenecks in processes and among employees.
        </Paragraph>
      </TextBlock>
      {/*<BlobWrapper>*/}
      {/*  <Image*/}
      {/*    priority={true}*/}
      {/*    src={BLOB}*/}
      {/*    alt='abstract shape'*/}
      {/*    width={WIDTH}*/}
      {/*    height={WIDTH}*/}
      {/*  />*/}
      {/*</BlobWrapper>*/}
    </Wrapper>
  );
}

export default Hero;
