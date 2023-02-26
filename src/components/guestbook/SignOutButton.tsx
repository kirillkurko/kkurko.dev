import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  return (
    <button
      className='flex items-center justify-center px-4 py-3 mb-8 font-medium h-10 bg-neutral-700 text-neutral-100 rounded'
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
