import Koa from 'koa';
import { Middleware, KoaMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'before' })
export default class CustomErrorHandler implements KoaMiddlewareInterface {
  async use(ctx: Koa.Context, next: Koa.Next): Promise<void> {
    try {
      await next();
      ctx.body = {
        code: 0,
        data: ctx.body,
      };
    } catch (err: any) {
      console.log('err');
      ctx.body = {
        code: err?.httpCode || 500,
        msg: err?.message || err,
      };
    }
  }
}
