import React, { AnchorHTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

interface LinkProps {
  children: ReactNode;
}

export const PageTitle = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={classnames(
        'font-primary text-[2.4rem] mb-3 font-bold text-neutral-50',
        className,
      )}
    >
      {children}
    </h1>
  );
};

export const Paragraph = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={classnames(
        'mb-4 font-secondary text-neutral-50 leading-relaxed tracking-[1px]',
        className,
      )}
    >
      {children}
    </p>
  );
};

export const SectionTitle = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={classnames(
        'font-primary text-[1.8rem] mb-[20px] pb-[20px] font-bold text-neutral-50 border-b border-neutral-50',
        className,
      )}
    >
      {children}
    </h2>
  );
};

export const ArticleTitle = ({ children, className }: TypographyProps) => {
  return (
    <h3
      className={classnames(
        'font-primary text-[1.4rem] mb-[20px] font-bold mb-[10px] text-neutral-50',
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const LinkText = ({ children }: LinkProps) => {
  return (
    <Paragraph className='transition-colors ease-out duration-150 mt-4 mb-0 mx-0 !text-neutral-500 hover:!text-neutral-700'>
      {children}
    </Paragraph>
  );
};
