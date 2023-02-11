import { PrismaClient } from '@prisma/client';

// global.d.ts
declare global {
  var prisma: PrismaClient; // This must be a `var` and not a `let / const`
}
