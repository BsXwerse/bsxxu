import 'client-only';

import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../../../server/src/server/router';

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
});
