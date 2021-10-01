<template>
  <div id="app">
    <TodoHeader></TodoHeader>

    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메소드 명"></TodoInput> -->
    <!-- <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> -->
    <TodoInput></TodoInput>
    
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 데이터 속성"></TodoList> -->
    <!-- <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList> -->
    <TodoList></TodoList>
    
    <!-- <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter> -->
    <TodoFooter></TodoFooter>

    <!-- store.js를 사용하냐 안 하냐에 따라 코드가 단축 됨 -->
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  // methods: { // store에 mutations와 동일
    // addOneItem(todoItem) {
    //   const obj = {completed: false, item: todoItem};
    //   //localStorage.setItem(this.newTodoItem, obj); /* object타입으로 들어오면 localStorage에서 확인이 불가능 */
    //   localStorage.setItem(todoItem, JSON.stringify(obj)); /* JSOON.stringfy == 자바스크립트 객체를 String으로 변환해주는 API */
    //   this.todoItems.push(obj); 
    //   /* 컴포넌트를 쪼갰을 때 각 컴포넌트들이 변화를 하면 (input, list) 서로 영향을 못 준다. 따라서 실시간으로 동적인 화면 불가능
    //      그래서 서로 영향을 줄 수 있게 App.vue에서 처리를 하고 또 props, emit으로 데이터를 전달한다.
    //   */
    // }, /* store.js의 mutations로 이동 */

    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1); /* splice = index에서 뒤에 있는 인자의 개수 만큼 (1개) 지우겠다 라는 뜻 */
    // }, /* store.js의 mutations로 이동 */

    // toggleOneItem (todoItem, index) {
    //   // todoItem.completed = !todoItem.completed;
    //   this.todoItems[index].completed = !this.todoItems[index].completed; /* 39번째와 40번째는 같은 코드지만 아래가 더 좋은 코드 (why?) */
    //   // 로컬 스토리지의 데이터를 갱신
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // }, /* store.js의 mutations로 이동 */

    // clearAllItems() {
    //   this.todoItems = [];
    //   localStorage.clear();
    // } /* store.js의 mutations로 이동 */
  // },

  // created() {
  //   if (localStorage.length > 0) {
  //     for (let i = 0; i < localStorage.length; i++){
  //       if (localStorage.key(i) != 'loglevel:webpack-dev-server'){
  //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); /* 꺼내올 때 다시 JSON 형식으로 변환 */
  //         // this.todoItems.push(localStorage.key(i))
  //       }
  //     }
  //   }
  // },/* 인스턴스가 생성되자마자 불러오는 속성 (created) */
  /* store.js에 fetch로 리팩토링 */

  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    // 'TodoHeader': TodoHeader,
    // 'TodoInput': TodoInput,
    // 'TodoList': TodoList,
    // 'TodoFooter': TodoFooter
    // 아래와 같이 축약 가능
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}

</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}


</style>
