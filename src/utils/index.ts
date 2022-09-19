import { getType } from 'mufeng-tools';

/**
 * @param fields 字段数组
 * @param items 数据
 * @returns any[]
 */
export function mixinFieldAndItem(fields: string[], items: any[]): any[] {
  if (!fields.length || !items.length) return [];
  if (getType(items[0]) !== 'array' || !items[0].length) return [];
  const ret: any[] = [];
  items.forEach((item) => {
    const tempObj: Record<string, any> = {};
    item.forEach((i: string, index: number) => {
      tempObj[fields[index]] = i;
    });
    ret.push(tempObj);
  });
  return ret;
}

export function test() {

}
