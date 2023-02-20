import { NextApiRequest, NextApiResponse } from 'next';
import invariant from 'tiny-invariant';
import { createEntry, getGuestbook } from '@lib/models/guestbook';
import { getSession } from 'next-auth/react';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method;

  if (requestMethod === 'GET') {
    const guestbook = await getGuestbook();

    const entries = guestbook.map((entry) => ({
      id: entry.id,
      username: entry.username,
      message: entry.message,
    }));

    return res.json(entries);
  }

  const session = await getSession({ req });

  if (!session) {
    return res.status(403).send('Unauthorized');
  }

  const email = session.user?.email;
  const username = session.user?.name;

  if (requestMethod === 'POST') {
    const body = JSON.parse(req.body);
    const message = body.message;

    invariant(message, 'Message is required');

    const guestbookEntry = await createEntry(email!, username!, message);

    res.status(200).json({ success: true, entry: guestbookEntry });
  }

  return res.send('Method not allowed');
}
