import { Paragraph } from '@components/typography';
import classnames from 'classnames';

interface Props {
  avatar: string;
  username: string;
  message: string[];
}

const AboutCard = ({ avatar, username, message }: Props) => {
  return (
    <li className='mb-4 border border-neutral-700 rounded-md'>
      <div className='p-4 flex flex-row'>
        <div
          className={classnames(
            'w-12 h-12 min-w-[3rem] mr-4 bg-gradient-to-r rounded-full',
            avatar,
          )}
        />
        <div>
          <Paragraph className='!mb-2 font-primary text-base font-bold !leading-none'>
            {username}
          </Paragraph>
          {message.map((item, index) => (
            <Paragraph
              key={index}
              primary={false}
              className='font-primary text-base last:mb-0'
            >
              {item}
            </Paragraph>
          ))}
        </div>
      </div>
    </li>
  );
};

export default AboutCard;
