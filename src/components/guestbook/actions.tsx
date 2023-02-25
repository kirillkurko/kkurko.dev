import { GitHubIcon } from '@components/icons';
import { signIn, signOut } from 'next-auth/react';

export const SignOut = () => {
  return (
    <button
      className='flex items-center justify-center px-4 py-3 mb-8 font-medium h-10 bg-neutral-700 text-neutral-100 rounded'
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
};

export const SignIn = () => {
  return (
    <button
      className='flex bg-black text-neutral-200 px-4 py-3 rounded-md font-semibold text-sm mb-8 hover:text-white transition-all border border-gray-800'
      onClick={() => signIn('github')}
    >
      <GitHubIcon />
      <div className='ml-3'>Sign in with GitHub</div>
    </button>
  );
};
