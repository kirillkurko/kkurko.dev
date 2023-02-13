import { NextApiRequest, NextApiResponse } from 'next';
import invariant from 'tiny-invariant';
import { trackView } from '@lib/models/blog';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method;

  invariant(requestMethod === 'POST', 'Only POST requests are supported');

  const slug = req.query.slug?.toString();

  invariant(slug, 'Slug is required');

  const updatedBlog = await trackView(slug);

  res.status(200).json({ success: true, blog: updatedBlog });
}
