import { Wrapper } from './atoms';
// @ts-ignore
import SocialButtonsContainer from 'react-social-media-buttons';

const links = [
  'https://github.com/KirillKurko',
  'https://www.instagram.com/aqwergqwec/?hl=ru',
  'https://www.linkedin.com/in/kirillkurko/',
];

function SocialButtons() {
  return (
    <Wrapper>
      <SocialButtonsContainer
        links={links}
        buttonStyle={{
          margin: '0 20px 20px 20px',
          backgroundColor: '#1F1F1F',
          borderRadius: '50%',
        }}
        iconStyle={{ color: '#ffffff' }}
        openNewTab={true}
      />
    </Wrapper>
  );
}

export default SocialButtons;
