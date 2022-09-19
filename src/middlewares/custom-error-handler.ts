import Koa from 'koa';
import { Middleware, KoaMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'before' })
export default class CustomErrorHandler implements KoaMiddlewareInterface {
  use(ctx: Koa.Context, next: Koa.Next): Promise<void> {
    return next().then(() => {
      ctx.body = {
        code: 0,
        data: ctx.body,
      };
    }).catch((err) => {
      ctx.body = {
        code: err.httpCode || 500,
        msg: err.message || err,
      };
    });
  }
}
