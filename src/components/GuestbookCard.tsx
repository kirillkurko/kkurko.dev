import { Paragraph } from '@components/typography';

interface Props {
  username: string;
  message: string;
}

const GuestbookCard = ({ username, message }: Props) => {
  return (
    <li className='mb-4'>
      <Paragraph className='!my-0 font-primary text-base'>
        <span className='text-neutral-400'>{username}</span>: {message}
      </Paragraph>
    </li>
  );
};

export default GuestbookCard;
