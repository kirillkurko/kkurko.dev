import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

interface ParagraphProps extends TypographyProps {
  primary?: boolean;
}

interface LinkProps {
  children: ReactNode;
}

export const PageTitle = ({ children, className }: TypographyProps) => {
  return (
    <h1 className={clsx('font-bold leading-[1.05] mb-0', className)}>
      {children}
    </h1>
  );
};

export const Paragraph = ({
  children,
  primary = true,
  className,
}: ParagraphProps) => {
  return (
    <p
      className={clsx(
        'mb-4 font-secondary leading-relaxed tracking-[1px] text-lg font-medium',
        primary ? 'text-white' : 'text-[#d1d5db]',
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
      className={clsx(
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
      className={clsx(
        'font-primary text-[1.4rem] font-bold mb-2.5 text-neutral-50',
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const LinkText = ({ children }: LinkProps) => {
  return (
    <Paragraph className='transition-colors ease-out duration-150 mt-4 !mb-0 mx-0 underline underline-offset-4 !text-neutral-400 hover:!text-neutral-700'>
      {children}
    </Paragraph>
  );
};
