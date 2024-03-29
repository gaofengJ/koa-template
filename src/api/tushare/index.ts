import Axios, { AxiosRequestConfig } from 'axios';

const client = Axios.create({
  method: 'post',
  url: '/',
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
  transformRequest: [
    (body) => JSON.stringify(
      Object.assign(body, {
        // token,
      }),
    ),
  ],
  transformResponse: [
    (response) => (JSON.parse(response)),
  ],
});

const request = async (config: AxiosRequestConfig) => {
  const { data } = await client.request(config);
  // 业务

  // 这里request会返回一个对象 { status: 200, statusText: 'OK', headers: {}, config: {}, request, data: {} }
  return { // 不直接返回data是为了过滤request_id
    code: data.code,
    msg: !data.code ? 'success' : data.msg,
    data: data.data,
  };
};

export const getData = (year: string): Promise<Base.TypeRes> => request({
  data: {
    api_name: 'date',
    params: {
      start_date: `${year}0101`,
      end_date: `${year}1231`,
    },
  },
});
