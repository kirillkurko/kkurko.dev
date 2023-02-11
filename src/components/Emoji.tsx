import { useState } from 'react';

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
      <p className='text-6xl mb-4'>{emoji}</p>
      <p className='text-xl font-bold'>{count}</p>
    </div>
  );
};

export default Emoji;
