import { createClient } from '@vercel/kv';
import invariant from 'tiny-invariant';

const KV_URL = process.env.REDIS_REST_API_URL;
const KV_TOKEN = process.env.REDIS_REST_API_TOKEN;

invariant(KV_URL && KV_TOKEN, 'KV_URL and KV_TOKEN are required');

export const client = createClient({
  url: KV_URL,
  token: KV_TOKEN,
});
