/* 일반적인 vuex의 구조 src/store/store.js */

import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp.js'
// import * as getters from './getters' /* 모듈화 */
// import * as mutations from './mutaions' /* 모듈화 */

Vue.use(Vuex); /* use == 뷰 플러그인 사용 글로벌 func 선언을 해줘서 this.$store 라고 사용 가능*/

// const storage = {
//     fetch() {
//         const arr = [];
//         if (localStorage.length > 0) {
//             for (let i = 0; i < localStorage.length; i++){
//                 if (localStorage.key(i) != 'loglevel:webpack-dev-server'){
//                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); /* 꺼내올 때 다시 JSON 형식으로 변환 */
//                     // this.todoItems.push(localStorage.key(i))
//                 }
//             }
//         }
//         return arr;
//         /* 인스턴스가 생성되자마자 불러오는 속성 (created) */
//     }, /* fetch: function() {} 과 같음 즉 메서드 */
// }

export const store = new Vuex.Store({
    // state: {
    //     headerText: "TODO it!",
    //     todoItems: storage.fetch()
    // },
    // getters,
    // mutations

    modules: {
        todoApp /* 모듈화 */
    }
}); /* store라는 변수는 다른 파일에서 사용 가능 */