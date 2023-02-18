import { PageTitle, Paragraph } from '@components/typography';

const HomePage = () => {
  return (
    <section className='flex justify-center items-center overflow-hidden py-8 max-[1200px]:h-auto max-[1200px]:overflow-auto'>
      <div>
        <PageTitle>100% - Frontend Engineer.</PageTitle>
        <PageTitle>150% - Penguin.</PageTitle>
        <PageTitle>200% - CEO mentality.</PageTitle>
        <Paragraph className='opacity-60'>
          {`Hello, I'm Kirill. I make single employees, teams and projects grow.`}
        </Paragraph>
        <Paragraph className='opacity-60'>
          I started my career with backend and then switched to frontend. I have
          a good understanding of design.
        </Paragraph>
        <Paragraph className='opacity-60'>
          {`I had a chance to work with many startups from small to large. Most of the time I'm working on React/React Native positions, acting as a team-lead.`}
        </Paragraph>
        <Paragraph className='opacity-60'>
          My main focus is to keep Track Factor as high as possible, making sure
          there are no bottlenecks in processes and among employees.
        </Paragraph>
      </div>
    </section>
  );
};

export default HomePage;
