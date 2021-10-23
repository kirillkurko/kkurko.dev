import { Wrapper } from './atoms';
// @ts-ignore
import SocialButtonsContainer from 'react-social-media-buttons';

const links = [
  'https://github.com/KirillKurko',
  'https://www.instagram.com/aqwergqwec/?hl=ru',
  'https://www.linkedin.com/in/kirillkurko/',
];

type Props = {
  hidden: boolean;
};

function SocialButtons({ hidden }: Props) {
  return (
    <Wrapper hidden={hidden}>
      <SocialButtonsContainer
        links={links}
        buttonStyle={{
          margin: '0 20px 20px 20px',
          backgroundColor: '#121212',
          borderRadius: '50%',
        }}
        iconStyle={{ color: '#ffffff' }}
        openNewTab={true}
      />
    </Wrapper>
  );
}

export default SocialButtons;
