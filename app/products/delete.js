
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'DELETE') {
    const product = await prisma.product.delete({
      where: { id: Number(req.body.id) },
    });
    res.json(product);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
