import { ReactNode } from 'react';
import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface CustomLinkProps {
  href?: string;
  children?: ReactNode;
}

const CustomLink = ({ href, children, ...props }: CustomLinkProps) => {
  if (href?.startsWith('/')) {
    return (
      <Link {...props} href={href}>
        {children}
      </Link>
    );
  }

  if (href?.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

function RoundedImage(props: ImageProps) {
  return <Image alt={props.alt} className='rounded-lg' {...props} />;
}

interface CalloutProps {
  emoji: string;
  children?: ReactNode;
}

function Callout({ emoji, children }: CalloutProps) {
  return (
    <div className='flex bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 my-8'>
      <div className='flex items-center w-4 mr-4'>{emoji}</div>
      <div className='w-full callout'>{children}</div>
    </div>
  );
}

interface ProsConsProps {
  title: string;
  pros: string[];
}

function ProsCard({ title, pros }: ProsConsProps) {
  return (
    <div className='border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full'>
      <span>{`You might use ${title} if...`}</span>
      <div className='mt-4'>
        {pros.map((pro) => (
          <div key={pro} className='flex font-medium items-baseline mb-2'>
            <div className='h-4 w-4 mr-2'>
              <svg className='h-4 w-4 text-emerald-500' viewBox='0 0 24 24'>
                <g
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
                  <path d='M22 4L12 14.01l-3-3' />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ConsCardProps {
  title: string;
  cons: string[];
}

function ConsCard({ title, cons }: ConsCardProps) {
  return (
    <div className='border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-6 w-full'>
      <span>{`You might not use ${title} if...`}</span>
      <div className='mt-4'>
        {cons.map((con) => (
          <div key={con} className='flex font-medium items-baseline mb-2'>
            <div className='h-4 w-4 mr-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-4 w-4 text-red-500'
              >
                <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className='prose prose-quoteless prose-neutral dark:prose-invert'>
      <Component components={{ ...components }} />
    </article>
  );
}
