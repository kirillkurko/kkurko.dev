import { Paragraph } from '@components/typography';
import Image from 'next/image';

interface Props {
  username: string;
  message: string;
}

const GuestbookCard = ({ username, message }: Props) => {
  return (
    <li className='mb-4 border border-neutral-700 rounded-md py-4 px-6'>
      <div className='flex flex-row items-start'>
        <Image
          src={`https://avatar.vercel.sh/${username}`}
          alt={`${username} avatar image`}
          width={48}
          height={48}
          className='rounded-full mr-4 h-12 hidden sm:block'
        />
        <div className='flex flex-col'>
          <Paragraph className='!mb-2 font-primary text-base !leading-none'>
            {username}
          </Paragraph>
          <Paragraph primary={false} className='!my-0 font-primary text-base'>
            {message}
          </Paragraph>
        </div>
      </div>
    </li>
  );
};

export default GuestbookCard;
