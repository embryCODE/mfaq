import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-cache');

  const healthcheck = {
    uptime: process.uptime(),
    responsetime: process.hrtime(),
    message: 'OK',
    timestamp: new Date(),
  };

  try {
    res.send(healthcheck);
  } catch (e: any) {
    console.error(e);
    healthcheck.message = e.message || 'Not OK';
    res.status(503).send(healthcheck);
  }
}
