import prisma from '@lib/prisma';
import { allBlogs } from '@contentlayer/generated';

export async function getAllBlogPosts() {
  const views = await prisma.blog.findMany();

  const sortedBlogs = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return sortedBlogs.map((blog) => ({
    slug: blog.slug,
    title: blog.title,
    publishedAt: blog.publishedAt,
    views: views.find((view) => view.slug === blog.slug)?.views || 0,
  }));
}

export async function trackView(slug: string) {
  const blog = await prisma.blog.findUnique({
    where: {
      slug,
    },
  });

  if (blog) {
    await prisma.blog.update({
      where: {
        slug,
      },
      data: {
        views: blog.views + 1,
      },
    });
  } else {
    await prisma.blog.create({
      data: {
        slug,
        views: 1,
      },
    });
  }
}
