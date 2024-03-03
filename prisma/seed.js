const { PrismaClient } = require('@prisma/client');
const { emojis } = require('./data.js');

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
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
