import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  try {
    const reports = await prisma.report.findMany();
    console.log("Reports:", reports);
  } catch (e) {
    console.error("Prisma error:", e);
  }
}
main();
