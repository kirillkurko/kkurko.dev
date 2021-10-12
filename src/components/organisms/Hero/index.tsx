import Circle from '@atoms/Circle';
import { Wrapper, Container, Side, Title, Bold } from './atoms';
import { useTranslation } from 'next-i18next';
import Typing from 'react-typing-animation';

function Hero(): JSX.Element {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Container>
        <Side size={45}>
          <Circle
            src={'/assets/images/laptop-Hero.png'}
            alt={'laptopHero'}
            priority={true}
            circleSize={100}
            imageSize={500}
          />
        </Side>
        <Side size={55} maxContent={true}>
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
