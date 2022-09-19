// import TTradeCal from '@/models/t.trade-cal';
// import { Op } from 'sequelize';

// export default class CurdTradeCalDao {
//   static async create(
//     params: {
//       calDate: string,
//       isOpen: number,
//       preTradeDate: string,
//     },
//   ): Promise<string> {
//     const tradeCal = await TTradeCal.create(params);
//     return tradeCal.get('id') as string; // 返回id
//   }

//   static async bulkCreate(
//     params: { calDate: string, isOpen: number, preTradeDate: string }[],
//   ): Promise<number> {
//     const res = await TTradeCal.bulkCreate(params);
//     return (res || []).length;
//   }

//   static async truncateDestroy(): Promise<number> {
//     const res: number = await TTradeCal.destroy({
//       truncate: true,
//     });
//     return res;
//   }

//   static async getList(startDate: string, endDate: string): Promise<string[]> {
//     const list: Record<string, string>[] = await TTradeCal.findAll({
//       attributes: ['calDate'],
//       raw: true,
//       where: {
//         calDate: {
//           [Op.gte]: startDate,
//           [Op.lte]: endDate,
//         },
//         isOpen: {
//           [Op.eq]: 1,
//         },
//       },
//     });
//     return list.map((item: Record<string, string>) => (item.calDate));
//   }

//   static async getIsOpen(date: string): Promise<number> {
//     const tradeCal = await TTradeCal.findOne({
//       attributes: ['isOpen'],
//       where: {
//         calDate: {
//           [Op.eq]: date,
//         },
//       },
//     });
//     return tradeCal?.get('isOpen') as number;
//   }

//   static async getPrevDate(date: string): Promise<string> {
//     const tradeCal = await TTradeCal.findOne({
//       attributes: ['preTradeDate'],
//       where: {
//         calDate: {
//           [Op.eq]: date,
//         },
//       },
//     });
//     return tradeCal?.get('preTradeDate') as string;
//   }

//   static async getTradeDateByRange(
//     startDate: string,
//     endDate: string,
//   ): Promise<string[]> {
//     const dateList = await TTradeCal.findAll({
//       attributes: ['calDate'],
//       raw: true,
//       where: {
//         calDate: {
//           [Op.gte]: startDate,
//           [Op.lte]: endDate,
//         },
//         isOpen: {
//           [Op.eq]: 1,
//         },
//       },
//       order: [
//         ['calDate', 'DESC'],
//       ],
//     });
//     return dateList.map((i: Record<string, string>) => (i.calDate));
//   }

//   static async getTradeDateByNum(
//     date: string,
//     num?: number,
//   ): Promise<string[]> {
//     const dateList = await TTradeCal.findAll({
//       attributes: ['calDate'],
//       raw: true,
//       where: {
//         calDate: {
//           [Op.lt]: date,
//         },
//         isOpen: {
//           [Op.eq]: 1,
//         },
//       },
//       limit: num,
//       order: [
//         ['calDate', 'DESC'],
//       ],
//     });
//     return dateList.map((i: Record<string, string>) => (i.calDate));
//   }
// }
