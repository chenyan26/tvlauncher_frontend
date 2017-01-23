/**
 * Created by echo on 2017/1/3.
 */
import * as service from "../services/app";

export default {

    namespace: 'app',

    state: {
        // number: '', //克拉号
        // date: '',
        // time:'', //系统时间
        // weather: '',
        number: "800005",
        date: "2016/08/26 八月初二 星期五（教师节）",
        weather: "阴 20度",
        time: "17:23",
        errorModalVisible: false,
        error: ""
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (pathname === '/') {
                    dispatch({
                        type: 'query',
                    });
                }
            });
        },
    },

    effects: {

        *query({ payload }, { call, put }) {
            const { response, err } = yield call(service.query, payload);
            if(err || !response){
                yield put({type:'queryFailed',payload:err.message});
                return;
            }
            if(response.code == 0) {
                yield put({
                    type: 'querySuccess',
                    payload: response.data,
                });
            }else{
                let msg = "";
                /**
                 * 根据code判断错误类型并提示
                 */
                if (response.code == 40012) {
                    msg = "ERR_DATABASE";
                }
                yield put({type:'queryFailed', payload:msg});
            }
        },
    },

    reducers: {

        hideErrorModal(state) {
            return { ...state, errorModalVisible: false };
        },

        querySuccess(state, { payload }) {
            return { ...state,
                number: payload.number,
                time: payload.time,
                date: payload.date,
                weather: payload.weather };
        },
        queryFailed(state, { payload }){
            return { ...state, error: payload, errorModalVisible: true };
        },
    },

}
