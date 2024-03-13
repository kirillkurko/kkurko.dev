import { PageTitle, Paragraph } from '@components/typography';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'kkurko.dev',
  description: 'Frontend Developer and Penguin 🐧',
};

function Page() {
  return (
    <section className='flex justify-center items-center overflow-hidden py-8 max-[1200px]:h-auto max-[1200px]:overflow-auto'>
      <div>
        <PageTitle>100% - Frontend Engineer.</PageTitle>
        <PageTitle>150% - Penguin.</PageTitle>
        <PageTitle>200% - CEO mentality.</PageTitle>
        <Paragraph primary={false}>
          {`Hello, I'm Kirill. I make single employees, teams and projects grow.`}
        </Paragraph>
        <Paragraph primary={false}>
          I started my career with backend and then switched to frontend. I have
          a good understanding of design.
        </Paragraph>
        <Paragraph primary={false}>
          {`I had a chance to work with many startups from small to large. Most of the time I'm working on React/React Native positions, acting as a team-lead.`}
        </Paragraph>
        <Paragraph primary={false}>
          My main focus is to keep Track Factor as high as possible, making sure
          there are no bottlenecks in processes and among employees.
        </Paragraph>
      </div>
    </section>
  );
}

export default Page;
