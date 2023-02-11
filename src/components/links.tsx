import React, { ReactNode, AnchorHTMLAttributes } from 'react';
import { Paragraph } from '@components/typography';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

export const Link = ({ children, ...props }: LinkProps) => {
  return (
    <a className='cursor-pointer' {...props}>
      <Paragraph className='transition-colors ease-out duration-150 mt-4 mb-0 mx-0 !text-neutral-500 hover:!text-neutral-700'>
        {children}
      </Paragraph>
    </a>
  );
};

const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <Link target='_blank' rel='noopener noreferrer' href={href}>
      {children}
    </Link>
  );
};

export default ExternalLink;
