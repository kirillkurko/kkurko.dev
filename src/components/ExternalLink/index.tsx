import React from 'react';
import { Link } from '@components/atoms';

interface Props {
  href: string;
  children: React.ReactNode;
}

const ExternalLink = ({ href, children }: Props) => {
  return (
    <Link target='_blank' rel='noopener noreferrer' href={href}>
      {children}
    </Link>
  );
};

export default ExternalLink;
