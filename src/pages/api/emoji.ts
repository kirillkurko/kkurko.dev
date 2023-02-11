import { NextApiRequest, NextApiResponse } from 'next';
import invariant from 'tiny-invariant';
import { upvoteEmoji } from '@lib/models/emoji';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method;

  invariant(requestMethod === 'POST', 'Only POST requests are supported');

  const body = JSON.parse(req.body);
  const emoji = body.emoji;

  invariant(emoji, 'Emoji is required');

  const updatedEmoji = await upvoteEmoji(emoji);

  res.status(200).json({ success: true, emoji: updatedEmoji });
}
