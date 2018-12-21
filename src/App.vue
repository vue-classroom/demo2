<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item['.key']}} - {{item['.value']}}
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

import {db} from './firebase';

export default {
  name: 'app',
  firebase: {
    items:  db.ref('todos')
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
