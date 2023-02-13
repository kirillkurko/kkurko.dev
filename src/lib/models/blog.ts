import prisma from '@lib/prisma';

export const getAllBlogs = async () => {
  const blog = await prisma.blog.findMany();

  return blog;
};

export const trackView = async (slug: string) => {
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
};
