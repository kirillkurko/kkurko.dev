import Head from 'next/head';
import { getGuestbook } from '@lib/models/guestbook';
import { InferGetStaticPropsType } from 'next';
import { PageTitle, Paragraph, SectionTitle } from '@components/typography';
import GuestbookCard from '@components/GuestbookCard';
import GuestbookForm from '@components/GuestbookForm';
import { SignIn, SignOut } from '@components/guestbook/actions';
import fetcher from '@lib/fetcher';
import useSWR from 'swr';
import React from 'react';
import { useSession } from 'next-auth/react';

type Response = InferGetStaticPropsType<typeof getStaticProps>;
type GuestbookResponse = Response['guestbook'];

const Guestbook = ({ guestbook }: Response) => {
  const { data: session } = useSession();
  const { data: entries } = useSWR<GuestbookResponse>(
    '/api/guestbook',
    fetcher,
    {
      fallbackData: guestbook,
    },
  );

  return (
    <div>
      <Head>
        <title>Guestbook | Kirill Kurko</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='my-8 inline-block'>
        <header className='mb-8'>
          <PageTitle>Guestbook</PageTitle>
          <Paragraph primary={false}>
            {`Welcome to my guestbook! Here you can offer suggestions for improvement, share experiences, or simply leave a friendly message.`}
          </Paragraph>
        </header>
        {!session ? (
          <SignIn />
        ) : (
          <>
            <GuestbookForm />
            <SignOut />
          </>
        )}
        <SectionTitle>Recent Messages</SectionTitle>
        <ul className='list-none m-0 p-0'>
          {entries?.map(({ id, username, message }) => (
            <GuestbookCard key={id} username={username} message={message} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const guestbook = await getGuestbook();

  const entries = guestbook.map((entry) => ({
    id: entry.id,
    username: entry.username,
    message: entry.message,
  }));

  return {
    props: {
      guestbook: entries,
    },
    revalidate: 60,
  };
}

export default Guestbook;
