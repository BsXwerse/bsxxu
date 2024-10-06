import {
  type FastifyTRPCPluginOptions,
  fastifyTRPCPlugin,
} from '@trpc/server/adapters/fastify';
import fastify from 'fastify';
import pretty from 'pino-pretty';
import { registerHooks } from '../hooks';
import { createContext } from './context';
import { type AppRouter, appRouter } from './router';

export function createServer() {
  const stream = pretty({
    colorize: true,
    translateTime: 'HH:MM:ss Z',
    ignore: 'pid,hostname',
  });

  const server = fastify({
    maxParamLength: 5000,
    logger: {
      level: 'debug',
      stream: stream,
    },
  });

  server.register(registerHooks);

  server.register(fastifyTRPCPlugin, {
    prefix: '/api/trpc',
    trpcOptions: {
      router: appRouter,
      createContext,
      onError({ path, error }: any) {
        console.error(`Error in tRPC handler on path '${path}':`, error);
      },
    } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions'],
  });

  return server;
}
