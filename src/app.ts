import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';
import CustomErrorHandler from '@/middlewares/custom-error-handler';

export default createKoaServer({
  routePrefix: '/api',
  cors: true,
  defaultErrorHandler: false,
  controllers: [`${__dirname}/controllers/**/*.ts`],
  middlewares: [CustomErrorHandler],
});
