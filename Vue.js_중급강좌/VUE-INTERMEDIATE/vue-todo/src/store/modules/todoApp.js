const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++){
                if (localStorage.key(i) != 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); /* 꺼내올 때 다시 JSON 형식으로 변환 */
                    // this.todoItems.push(localStorage.key(i))
                }
            }
        }
        return arr;
        /* 인스턴스가 생성되자마자 불러오는 속성 (created) */
    }, /* fetch: function() {} 과 같음 즉 메서드 */
}

const state = {
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
};

const mutations = {
    addOneItem(state, todoItem) {
        const obj = {completed: false, item: todoItem};
        //localStorage.setItem(this.newTodoItem, obj); /* object타입으로 들어오면 localStorage에서 확인이 불가능 */
        localStorage.setItem(todoItem, JSON.stringify(obj)); /* JSOON.stringfy == 자바스크립트 객체를 String으로 변환해주는 API */
        state.todoItems.push(obj); 
        /* 컴포넌트를 쪼갰을 때 각 컴포넌트들이 변화를 하면 (input, list) 서로 영향을 못 준다. 따라서 실시간으로 동적인 화면 불가능
           그래서 서로 영향을 줄 수 있게 App.vue에서 처리를 하고 또 props, emit으로 데이터를 전달한다.
        */
    },
    removeOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1); /* splice = index에서 뒤에 있는 인자의 개수 만큼 (1개) 지우겠다 라는 뜻 */
    },
    toggleOneItem(state, payload) {
        // todoItem.completed = !todoItem.completed;
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed; /* 39번째와 40번째는 같은 코드지만 아래가 더 좋은 코드 (why?) */
        // 로컬 스토리지의 데이터를 갱신
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state)  {
        state.todoItems = [];
        localStorage.clear();
    }
}

export default {
    state,
    getters,
    mutations
}
    
