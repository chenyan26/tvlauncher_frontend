/**
 * Created by echo on 2017/1/3.
 */

'use strict';

var qs = require('qs');

const app = {
    number: "800005",
    date: "2016/08/26 八月初二 星期五（教师节）",
    weather: "阴 20度",
    time: "17:23"
};

module.exports = {
    'GET /admin/getApp': function (req, res) {
        res.json({
            code: 0,
            data: app
        });
    },
};
