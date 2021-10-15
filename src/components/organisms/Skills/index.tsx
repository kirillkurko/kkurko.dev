import { useState, useMemo } from 'react';
import {
  Wrapper,
  TextBlock,
  BombBlock,
  SkillsBlock,
  BombWrapper,
  Title,
  Description,
  SkillsWrapper,
} from './atoms';
import { useTranslation } from 'next-i18next';
import { BOMB, WINK } from '@constants/images';
import Circle from '@atoms/Circle';

function Skills(): JSX.Element {
  const [blown, setBlown] = useState(false);
  const { t } = useTranslation('common');

  const blowBomb = () => setBlown(true);

  const description = useMemo(() => {
    return blown
      ? t('skills.description-after')
      : t('skills.description-before');
  }, [t, blown]);

  const showBomb = !blown;

  return (
    <Wrapper id='skills'>
      <TextBlock>
        <Title>{t('skills.title')}</Title>
        <Description>{description}</Description>
      </TextBlock>
      {showBomb && (
        <BombBlock>
          <BombWrapper onClick={blowBomb}>
            <Circle src={BOMB} alt={'bomb'} circleSize={100} imageSize={500} />
          </BombWrapper>
        </BombBlock>
      )}
      <SkillsBlock>
        <SkillsWrapper>
          <Circle src={WINK} alt={'wink'} circleSize={100} imageSize={500} />
        </SkillsWrapper>
      </SkillsBlock>
    </Wrapper>
  );
}

export default Skills;
