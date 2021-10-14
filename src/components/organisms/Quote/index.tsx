import { Side, Wrapper, Text } from './atoms';
import WordsGame from '@molecules/WordsGame';
import { useTranslation } from 'next-i18next';

function Quote(): JSX.Element {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Side primary={true}>
        <Text>{t('quote')}</Text>
      </Side>
      <Side>
        <WordsGame />
      </Side>
    </Wrapper>
  );
}

export default Quote;
