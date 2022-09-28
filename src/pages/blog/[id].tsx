// @ts-nocheck
import { Fragment } from 'react';
import Head from 'next/head';
import { getDatabase, getPage, getBlocks } from '../../lib/notion';
import Link from 'next/link';
import { databaseId } from './index';
import styles from '@components/Text/styles.module.css';
import Text from '../../components/Text';
import { renderBlock } from '../../util/notion/render';
import { PageTitle } from '@components/atoms';
import { Wrapper, Article } from '@components/Blog/atoms';

interface Props {
  page: any;
  blocks: any;
}

const Post = ({ page, blocks }: Props) => {
  if (!page || !blocks) {
    return <div />;
  }

  return (
    <Wrapper>
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Article>
        <PageTitle>
          <Text data={page.properties.Name.title} />
        </PageTitle>
        <section>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
          <Link href='/blog'>
            <a className={styles.back}>Go home</a>
          </Link>
        </section>
      </Article>
    </Wrapper>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      }),
  );

  const blocksWithChildren = blocks.map((block) => {
    if (block.has_children && !block[block.type].children) {
      block[block.type].children = childBlocks.find(
        (x) => x.id === block.id,
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};