import { Paragraph } from '@components/typography';

interface Props {
  emoji: string;
  counter: number;
  onClick: () => void;
}

const Emoji = ({ emoji, counter, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className='border border-neutral-700 select-none rounded-md aspect-square flex items-center justify-center flex-col cursor-pointer'
    >
      <Paragraph className='text-6xl mb-4'>{emoji}</Paragraph>
      <Paragraph className='text-xl font-bold'>{counter}</Paragraph>
    </div>
  );
};

export default Emoji;
