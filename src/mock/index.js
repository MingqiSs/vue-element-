 import Mock from 'mockjs'
 import {vuetable} from './BaseTable.js';
let data = vuetable
Mock.mock(vuetable[0].path, vuetable[0].data);
export default Mock;
  