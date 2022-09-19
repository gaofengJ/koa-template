import CurdTradeCalDao from '@/dao/trade-cal';

import { getTradeCal } from '@/api/tushare/index';
import { mixinFieldAndItem } from '@/utils';
import { log } from 'console';

export default class CurdTradeCalService {
  static async create(
    params: {
      calDate: string,
      isOpen: number,
      preTradeDate: string
    },
  ): Promise<string> {
    const res: string = await CurdTradeCalDao.create(params);
    return res;
  }

  static async bulkCreate(year: string): Promise<number | null> {
    const { code, data } = await getTradeCal(year);
    if (code) return null;
    let { fields } = data;
    const { items } = data;
    fields = ['exchange', 'calDate', 'isOpen', 'preTradeDate']; // tushare接口返回字段对不上，所以写死了
    const params = mixinFieldAndItem(fields, items);
    const res: number = await CurdTradeCalDao.bulkCreate(params);

    log(`导入日历：成功导入${year}年${res}条数据`);
    return res;
  }

  static async truncateDestroy(): Promise<string> {
    const res: number = await CurdTradeCalDao.truncateDestroy();
    const str = !res ? '清空日历：成功' : '清空日历：失败';
    log(str);
    return str;
  }

  static async getList(startDate: string, endDate: string): Promise<string[]> {
    const res: string[] = await CurdTradeCalDao.getList(startDate, endDate);
    return res;
  }

  static async getIsOpen(date: string): Promise<boolean> {
    const res: number = await CurdTradeCalDao.getIsOpen(date);
    return !!res;
  }

  static async getPrevDate(date: string): Promise<string> {
    const res: string = await CurdTradeCalDao.getPrevDate(date);
    return res;
  }
}
