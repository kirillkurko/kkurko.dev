import { useMemo } from 'react';
import { Wrapper, Line, ImageWrapper } from './atoms';
import { useTranslation } from 'next-i18next';
import { ANGRY } from '@constants/images';
import Image from 'next/image';

const ROWS_SIZE = 11;

function WordsGame(): JSX.Element {
  const { t } = useTranslation('common');

  const lines = useMemo(() => {
    const rows = [];
    for (let row = 1; row <= ROWS_SIZE; ++row) {
      rows.push(<Line>{t(`words-game.${row}`)}</Line>);
    }
    return rows;
  }, [t]);

  return (
    <Wrapper>
      {lines}
      <ImageWrapper>
        <Image
          src={ANGRY}
          alt={'angry'}
          width={500}
          height={500}
          layout={'responsive'}
        />
      </ImageWrapper>
    </Wrapper>
  );
}

export default WordsGame;
