const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.report.findMany().then(r => console.log("OK", r.length)).catch(console.error);
