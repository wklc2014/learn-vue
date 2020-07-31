/**
 * 请求后台接口方法
 * url 接口地址
 * params 接口参数
 * options axios 的配置参数
 */
import axios from 'axios';

export default function request(url, params = {}, options = {}) {

  const newParams = Object.assign({}, params, {

  });

  const axiosOptions = {
    url: `${url}`,
    timeout: 10000,
    ...options,
  }

  const { method = 'get' } = options;

  if (method.toLowerCase() === 'get') {
    axiosOptions.params = newParams;
  } else {
    axiosOptions.data = newParams;
  }

  return new Promise((resolve) => {
    axios(axiosOptions)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        let tips;
        try {
          tips = err.toString();
        } catch (e) {
          tips = `${url} 请求错误: ${err}`;
        }
        const resp = {
          stat: 'error',
          tips,
        }
        resolve(resp);
      });
  })
}
