/**
 * Created by echo on 2017/1/3.
 */
import * as service from "../services/app";

export default {

    namespace: 'app',

    state: {
        number: '', //克拉号
        time:'', //系统时间
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
            return { ...state, name: payload.name, time: payload.time };
        },
        queryFailed(state, { payload }){
            return { ...state, error: payload, errorModalVisible: true };
        },
    },

}
