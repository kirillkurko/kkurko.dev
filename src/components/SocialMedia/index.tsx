// @ts-ignore
import SocialMediaButtons from 'react-social-media-buttons';
import links from '@constants/links';
import { Wrapper } from './atoms';

const SocialMedia = () => {
  const buttonStyle = {
    backgroundColor: '#121212',
    borderRadius: '50%',
  };

  const iconStyle = { color: '#ffffff' };

  const urls = links.map((item) => item.href);

  return (
    <Wrapper>
      <SocialMediaButtons
        links={urls}
        buttonStyle={buttonStyle}
        iconStyle={iconStyle}
        openNewTab={true}
      />
    </Wrapper>
  );
};

export default SocialMedia;
