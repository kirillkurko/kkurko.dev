import prisma from '@lib/prisma';
import { allBlogs } from '@contentlayer/generated';

export function getAllBlogPosts() {
  return allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export async function getBlogPostViews() {
  const views = await prisma.blog.findMany();

  return Object.fromEntries(views.map((view) => [view.slug, view.views]));
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
