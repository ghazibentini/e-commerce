import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany();
    res.json(products);
  } else {
    res.status(405).end(); 
  }
}
