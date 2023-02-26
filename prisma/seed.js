const { PrismaClient } = require('@prisma/client');
const { emojis, guestbook } = require('./data.js');

const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.emoji.deleteMany();
    console.log('Deleted records in Emoji table');

    await prisma.$queryRaw`ALTER TABLE Emoji AUTO_INCREMENT = 1`;
    console.log('Reset Emoji auto increment to 1');

    await prisma.emoji.createMany({
      data: emojis,
    });
    console.log('Added Emoji data');

    await prisma.guestbook.deleteMany();
    console.log('Deleted records in Guestbook table');

    await prisma.$queryRaw`ALTER TABLE Guestbook AUTO_INCREMENT = 1`;
    console.log('Reset Guestbook auto increment to 1');

    await prisma.guestbook.createMany({
      data: guestbook,
    });
    console.log('Added Guestbook data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
