import type { APIRoute } from 'astro';
import { buildIcs } from '../lib/ics.mjs';
import { loadDeadlines } from '../lib/content';

export const prerender = true;

export const GET: APIRoute = () => {
  const body = buildIcs(loadDeadlines());
  return new Response(body, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="laat-niks-liggen.ics"',
    },
  });
};
