import Circle from '@atoms/Circle';
import { Wrapper, Container, Title, Bold, Side } from './atoms';
import { useTranslation } from 'next-i18next';
import Typing from 'react-typing-animation';
import { LAPTOP_HERO } from '@constants/images';

function Hero() {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Container>
        <Side size={36}>
          <Circle
            src={LAPTOP_HERO}
            alt={'laptopHero'}
            priority={true}
            circleSize={100}
            imageSize={500}
          />
        </Side>
        <Side size={44}>
          <Typing>
            <Title>
              {t('hero.hey')}
              <br /> <Bold>{t('hero.frontend')}</Bold>
              <br /> {t('hero.with')} <Bold>{t('hero.backend')}</Bold>
              <br /> {t('hero.and')} <Bold>{t('hero.skills')}</Bold>
            </Title>
          </Typing>
        </Side>
      </Container>
    </Wrapper>
  );
}

export default Hero;
