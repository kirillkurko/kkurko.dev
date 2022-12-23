interface Props {
  text: string;
}

const Callout = ({ text }: Props) => {
  return (
    <div className='p-[1.5rem] rounded-2xl flex flex-row items-start bg-zinc-200 dark:bg-zinc-800'>
      <span className='text-[1.5rem] my-0 ml-0 mr-4'>💡</span>
      <blockquote className='font-secondary m-0 tracking-[1px] leading-6 opacity-60'>
        {text}
      </blockquote>
    </div>
  );
};

export default Callout;
