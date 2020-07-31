import request from './request.js';

export async function getUser(params) {
    return await request('/api/user.json', params, { method: 'get' });
}
