// pages/api/register.ts

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, classType } = req.body;

    if (!name || !email || !classType) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    try {
      const saved = await prisma.registration.create({
        data: { name, email, classType },
      });

      return res.status(200).json({ message: 'Registered', entry: saved });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Database error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
