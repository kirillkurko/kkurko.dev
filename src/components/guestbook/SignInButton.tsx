import { signIn } from 'next-auth/react';
import GitHubIcon from '@components/guestbook/GitHubIcon';

const SignInButton = () => {
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

export default SignInButton;
