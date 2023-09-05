import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'PUT') {
    const product = await prisma.product.update({
      where: { id: Number(req.body.id) },
      data: req.body,
    });
    res.json(product);
  } else {
    res.status(405).end(); 
  }
}
