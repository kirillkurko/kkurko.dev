import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
}

// @ts-expect-error - prisma variable will always be defined here
export default prisma;
