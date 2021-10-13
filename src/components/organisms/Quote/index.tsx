import { Side, Wrapper } from './atoms';
import WordsGame from '@molecules/WordsGame';

function Quote(): JSX.Element {
  return (
    <Wrapper>
      <Side primary={true} />
      <Side>
        <WordsGame />
      </Side>
    </Wrapper>
  );
}

export default Quote;
