import { log } from 'console';
import scheduler from '@/schedule';
import app from '@/app';

const port = process.env.PORT || '3000';

scheduler();

app.listen(port, () => {
  log(`项目启动成功，端口号：${port}`);
});
