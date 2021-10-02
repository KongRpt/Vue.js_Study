<template>
  <div>
    <!-- <transition-group name="list" tag="ul"> -->
      <ul>
        <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow"> <!-- propsdata 대신 store -->
          <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
              v-on:click="toggleComplete({todoItem, index})"></i>
          <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span> 
          <!-- todoItem.completed의 속성에 따라 (기본 값이 false로 선언) v-bind로 클래스를 선언 할지 안 할지 정할 수 있음 -->
          <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
            <i class="fas fa-trash-alt"></i>
          </span>
        </li> <!-- v-for사용하면 무조건 v-bind:key로 key 이름을 설정해줘야 함 -->
      </ul>
    <!-- </transition-group> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem', // 메서드 명 : 커밋 명 (Helper함수들은 인자를 선언 안 해도 넘겨지고 있음)
      toggleComplete: 'toggleOneItem'
    }),
    // removeTodo(todoItem, index) {
    //   this.$store.commit('removeOneItem', {todoItem, index}) // todoItem과 index를 따로 보내면 안 되고 객체화 시켜서 하나의 인자에 담아 보내야 함 (mutations의 특징은 인자를 하나만 받는다.)
    //   // store.js에 있는 mutaions를 동작시키기 위해 보냄
    // }, mapMutations의 25번 줄 removeTodo 는 27번 줄 removeTodo와 같음

    // toggleComplete(todoItem, index) {
    //   this.$store.commit('toggleOneItem', {todoItem, index})
    // } 26번 줄 toggleComplete는 33번 줄 toggleComplete와 동일
  
  },
  computed: {
    ...mapGetters(['storedTodoItems']) // 배열 리터럴 배열은 매핑한것과 변수명이 같을 때
    // ...mapGetters({
    //   todoItems: 'storedTodoItems'
    // }) // 객체 리터럴 객체는 매핑한것과 변수명이 다를 때
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }

  /* 리스트 아이템 트랜지션 효과 */
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>