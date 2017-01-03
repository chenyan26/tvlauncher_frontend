/**
 * Created by echo on 2017/1/3.
 */
import request from '../utils/request';
import qs from 'qs';

// import { url, strFromArr } from './util';

export async function query() {
    return request('/admin/getApp');
}
