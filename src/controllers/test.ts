import TestService from '@/services/test';
import {
  JsonController,
  Get,
  Post,
  Put,
  Delete,
  Param,
  BodyParam,
  QueryParam,
} from 'routing-controllers';

@JsonController('/test')
export default class TestController {
  @Get()
  getList(@QueryParam('online') online?: string) {
    console.log(online);
    return [1, 2, 3].map((i: number) => ({
      id: i,
      online: i % 2 === 0,
    }));
  }

  @Get('/:id')
  getTest(@Param('id') testId: string) {
    const str = TestService.getTest(testId);
    return `测试-查询id为${str}的用户`;
  }

  @Post('/create')
  createTest(
    @BodyParam('name', { required: true }) name: string,
    @BodyParam('desc', { required: true }) desc: string,
  ) {
    return `测试-创建用户，名称：${name}，描述：${desc}`;
  }

  @Put('/update')
  updateTest(
    @BodyParam('name', { required: true }) name: string,
    @BodyParam('desc', { required: true }) desc: string,
  ) {
    return `测试-更新用户，名称：${name}，描述：${desc}`;
  }

  @Delete('/delete/:id')
  deleteTest(@Param('id') testId: string) {
    return `测试-删除id为${testId}的用户`;
  }
}
