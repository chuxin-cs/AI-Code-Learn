import request from '../request';
import { baseUrl } from '@tocc/config';
export const loginByUsername = (username, password) => {
  return request.post({
    url: `${baseUrl}/blade-auth/oauth/token`,
    params: {
      tenantId: '',
      username,
      password,
      grant_type: 'password',
      login_type: 'tenant',
      scope: 'all',
      type: 'account',
    },
  });
};
