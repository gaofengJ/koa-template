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
  @Get('/')
  getAll(@QueryParam('enable') enable: string) {
    return `测试-查询所有用户，状态：${enable || '在线'}`;
  }

  @Get('/:id')
  getTest(@Param('id') testId: string) {
    return `测试-查询id为${testId}的用户`;
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
