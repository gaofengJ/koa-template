import axios, { AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';

const client = axios.create({
  // 配置
});

// 当请求失败后，自动重新请求，只有3次失败后才真正失败
axiosRetry(client, { retries: 3 });

export async function request(url: string, config?: AxiosRequestConfig) {
  const response = await client.request({ url, ...config });
  const result = response.data;
  // 业务
  return result;
}

export default client;
