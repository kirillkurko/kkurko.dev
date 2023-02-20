import React, { useState } from 'react';
import { useSWRConfig } from 'swr';

const GuestbookForm = () => {
  const { mutate } = useSWRConfig();
  const [isFetching, setIsFetching] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsFetching(true);

    const form = e.currentTarget;
    const input = form.elements.namedItem('entry') as HTMLInputElement;

    console.log(input.value, 'input.value');

    await fetch('/api/guestbook', {
      method: 'POST',
      body: JSON.stringify({
        message: input.value,
      }),
    });

    input.value = '';

    setIsFetching(false);
    mutate('/api/guestbook');
  }

  return (
    <form
      autoComplete='off'
      style={{ opacity: !isFetching ? 1 : 0.7 }}
      className='relative text-sm mb-4 flex items-center'
      onSubmit={onSubmit}
    >
      <input
        aria-label='Your message'
        placeholder='Your message...'
        disabled={isFetching}
        name='entry'
        type='text'
        required
        className='pl-4 pr-32 py-2 block font-primary text-base w-full focus:outline-none focus:border-white placeholder-neutral-400 border border-neutral-700 rounded-md bg-zinc-900 text-neutral-50'
      />
      <button
        className='flex items-center justify-center absolute right-1 px-2 py-1 font-medium h-8 bg-neutral-700 text-neutral-100 rounded w-16'
        disabled={isFetching}
        type='submit'
      >
        Send
      </button>
    </form>
  );
};

export default GuestbookForm;
