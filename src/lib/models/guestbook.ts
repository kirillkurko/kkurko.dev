import prisma from '@lib/prisma';

export const getGuestbook = async () => {
  const guestbook = await prisma.guestbook.findMany({
    orderBy: {
      created_at: 'desc',
    },
    select: {
      id: true,
      email: true,
      username: true,
      message: true,
      created_at: true,
    },
  });

  return guestbook;
};

export const createEntry = async (
  email: string,
  username: string,
  message: string,
) => {
  const entry = await prisma.guestbook.create({
    data: {
      email: email,
      username,
      message,
      created_at: new Date(),
    },
  });

  return {
    id: entry.id,
    email: entry.email,
    username: entry.username,
    message: entry.message,
    createdAt: entry.created_at,
  };
};
