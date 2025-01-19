import clsx from 'clsx';

interface Props {
  avatar: string;
  username: string;
  message: Array<string>;
}

function AboutCard({ avatar, username, message }: Props) {
  return (
    <li className='mb-4 border border-neutral-700 rounded-md ps-0'>
      <div className='p-4 flex flex-row my-0'>
        <div
          className={clsx(
            'w-12 h-12 min-w-[3rem] mr-4 hidden sm:block bg-gradient-to-r rounded-full',
            avatar,
          )}
        />
        <div className='prose prose-invert'>
          <p className='font-bold leading-none text-white'>{username}</p>
          {message.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </li>
  );
}

export default AboutCard;
