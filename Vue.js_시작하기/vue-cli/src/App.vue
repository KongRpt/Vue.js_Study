<template>
  <div>
      <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 변수명"></app-header> -->
      <app-header v-bind:propsdata="str"
        v-on:renew="renewString"
      ></app-header>
  </div> 
</template>
<!-- 템플릿 루트는 하나만 있어야 함 즉 div를 여러개가 아닌 하나만 작성하고 안에 추가하는 형식으로 해야 함 -->
<script>

import AppHeader from './components/AppHeader.vue'

export default {
    // data: {
        
    // } 이렇게 data를 사용하면 안 됨

    data: function() {
        return {
            str: "Header!!"
        }
    },
    components: {
        'app-header': AppHeader
    },
    methods: {
        renewString: function() {
            this.str = 'renewHeader'
        }
    }
}
</script>

<style>

</style>