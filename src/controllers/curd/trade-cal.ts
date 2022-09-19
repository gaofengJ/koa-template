// import {
//   JsonController,
//   Post,
//   BodyParam,
//   Delete,
//   Get,
//   QueryParam,
// } from 'routing-controllers';
// import CurdTradeCalService from '@/services/curd/trade-cal';
// import { dateFormat } from 'mufeng-tools';

// @JsonController('/curd/trade-cal')
// export default class CurdTradeCalController {
//   @Post('/create')
//   async create(
//     @BodyParam('calDate') calDate: string,
//     @BodyParam('isOpen') isOpen: number,
//     @BodyParam('preTradeDate') preTradeDate: string,
//   ): Promise<string> {
//     const res: string = await CurdTradeCalService.create({
//       calDate,
//       isOpen,
//       preTradeDate,
//     });
//     return res;
//   }

//   @Post('/bulk-create')
//   async bulkCreate(@BodyParam('year') year: string): Promise<number | null> {
//     const res: number | null = await CurdTradeCalService.bulkCreate(year);
//     return res;
//   }

//   @Get('/list')
//   async getList(
//     @QueryParam('startDate') startDate: string,
//     @QueryParam('endDate') endDate: string,
//   ): Promise<Record<string, any>> {
//     // eslint-disable-next-line no-param-reassign
//     startDate = dateFormat(new Date(startDate), 'yyyyMMdd');
//     // eslint-disable-next-line no-param-reassign
//     endDate = dateFormat(new Date(endDate), 'yyyyMMdd');
//     const res: string[] = await CurdTradeCalService.getList(startDate, endDate);
//     return {
//       list: res,
//     };
//   }

//   @Delete('/truncate-destroy')
//   async truncateDestroy(): Promise<string> {
//     const res: string = await CurdTradeCalService.truncateDestroy();
//     return res;
//   }

//   @Get('/get-is-open')
//   async getIsOpen(
//     @QueryParam('date', { required: true }) date: string,
//   ): Promise<boolean> {
//     // eslint-disable-next-line no-param-reassign
//     date = dateFormat(new Date(date), 'yyyyMMdd');
//     const res: boolean = await CurdTradeCalService.getIsOpen(date);
//     return res;
//   }

//   @Get('/get-prev-date')
//   async getPrevDate(
//     @QueryParam('date', { required: true }) date: string,
//   ): Promise<string> {
//     // eslint-disable-next-line no-param-reassign
//     date = dateFormat(new Date(date), 'yyyyMMdd');
//     const res: string = await CurdTradeCalService.getPrevDate(date);
//     return res;
//   }
// }
