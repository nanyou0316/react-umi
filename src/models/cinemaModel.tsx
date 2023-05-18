import { request } from 'umi';

export default {
  // namespace:'xxx'   命名空间不写默认是文件名
  state: {
    list: [],
  },
  effects: {
    *getList(action: any, { call, put }: any): any {
      // let result = yield call(() => getListReq(action.payload.cityId));
      let result = yield call(getListReq,action.payload.cityId);
      yield put({ type: 'getCinemaListReducers', result });
    },
  },
  reducers: {
    clearList(prevState: any){
      return {
        ...prevState,
        list: [],
      };
    },
    getCinemaListReducers(prevState: any, action: any) {
      const { result } = action;
      return {
        ...prevState,
        list: result,
      };
    },
  },
};

async function getListReq(id: string) {
  let res = await request(
    'https://m.maizuo.com/gateway?cityId=' + id + '&ticketFlag=1&k=6513565',
    {
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273"}',
        'X-Host': 'mall.film-ticket.cinema.list',
      },
    },
  );
  return res.data.cinemas;
}
