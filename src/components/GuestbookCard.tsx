import { Paragraph } from '@components/typography';

interface Props {
  username: string;
  message: string;
}

const GuestbookCard = ({ username, message }: Props) => {
  return (
    <li className='mb-4 border border-neutral-700 rounded-md'>
      <div className='py-4 px-6'>
        <div className='flex flex-row'>
          <Paragraph className='!my-0 font-primary text-base mr-2'>
            {username}
          </Paragraph>
        </div>
        <Paragraph primary={false} className='!my-0 font-primary text-base'>
          {message}
        </Paragraph>
      </div>
    </li>
  );
};

export default GuestbookCard;
