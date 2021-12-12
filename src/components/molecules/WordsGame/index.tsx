import { useState, useMemo } from 'react';
import { Wrapper, Line, ImageWrapper } from './atoms';
import { useTranslation } from 'next-i18next';
import { ANGRY } from '@constants/images';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ROWS_SIZE = 11;

enum AnimationType {
  RIGHT = 'right',
  LEFT = 'left',
}

const rightToLeft = {
  rotate: 360,
  x: '-52vw',
  y: ['-30vh', '-50vh', '-30vh'],
};

const leftToRight = {
  x: 0,
  y: ['-30vh', '-10vh', '-30vh'],
};

const variants = {
  left: leftToRight,
  right: rightToLeft,
};

function WordsGame() {
  const { t } = useTranslation('common');
  const [animationType, setAnimationType] = useState<AnimationType | undefined>(
    undefined,
  );

  const toggleAnimationType = () =>
    setAnimationType((prevState) =>
      prevState === undefined
        ? AnimationType.RIGHT
        : prevState === AnimationType.RIGHT
        ? AnimationType.LEFT
        : AnimationType.RIGHT,
    );

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
      <motion.div
        variants={variants}
        transition={{ duration: 1 }}
        animate={animationType}
      >
        <ImageWrapper>
          <Image
            src={ANGRY}
            alt={'angry'}
            width={500}
            height={500}
            layout={'responsive'}
            onClick={toggleAnimationType}
          />
        </ImageWrapper>
      </motion.div>
    </Wrapper>
  );
}

export default WordsGame;
