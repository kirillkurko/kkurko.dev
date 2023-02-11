import { useState } from 'react';
import { Paragraph } from '@components/typography';

interface Props {
  emoji: string;
  counter: number;
}

const Emoji = ({ emoji, counter }: Props) => {
  const [count, setCount] = useState(counter);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div
      onClick={handleClick}
      className='border border-neutral-700 select-none rounded-md aspect-square flex items-center justify-center flex-col cursor-pointer'
    >
      <Paragraph className='text-6xl mb-4'>{emoji}</Paragraph>
      <Paragraph className='text-xl font-bold'>{count}</Paragraph>
    </div>
  );
};

export default Emoji;
