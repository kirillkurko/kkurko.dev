import React, { ReactNode } from 'react';
import { LinkText } from '@components/typography';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <a target='_blank' rel='noopener noreferrer' href={href}>
      <LinkText>{children}</LinkText>
    </a>
  );
};

export default ExternalLink;
