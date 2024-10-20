import { appRouter } from '@/lib/trpc/router';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
  });

export { handler as GET, handler as POST };
