import { app } from '@azure/functions';

export async function dump(request, context) {
  return {
    status: 200,
    jsonBody: {
      method: request.method,
      url: request.url,
      headers: request.headers,
      query: request.query,
      body: request.body
    }
  };
}

app.http('dump', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: dump
});
