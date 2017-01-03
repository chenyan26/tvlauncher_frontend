/**
 * Created by echo on 2017/1/3.
 */

'use strict';

var qs = require('qs');

const app = {
    number: "800005",
    time: "2017/01/03 13:34:09"
};

module.exports = {
    'GET /admin/getApp': function (req, res) {
        res.json({
            code: 0,
            data: app
        });
    },
};
