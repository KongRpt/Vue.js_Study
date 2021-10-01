<template>
  <header>
    <!-- <h1>TODO it!</h1> -->
    <h1>{{ this.$store.state.headerText }}</h1> <!-- store.js에서 state 값 사용 하는 법 (data와 유사) -->
  </header>
</template>

<style scoped>
  /* 해당 파일 안에서만 유요한 css = scoped */
  h1 {
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }
</style>