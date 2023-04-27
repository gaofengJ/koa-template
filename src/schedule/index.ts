import schedule from 'node-schedule';

// 定义规则
const rule = new schedule.RecurrenceRule();

rule.dayOfWeek = [1, 2, 3, 4, 5]; // 每周一到周五执行
rule.hour = 19;
rule.minute = 20;
rule.second = 0;

/**
 * 导入每日数据
 */
const dailyImport = () => {
  console.log('定时任务-导入每日数据启动');
  schedule.scheduleJob(rule, async () => {
    console.log(`定时任务-导入每日数据开始，导入日期：${new Date()}`);
  });
};

export default () => {
  dailyImport();
};
