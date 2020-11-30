<template>
  <div id="app">
    <div id="alinhamento">
      <router-view />
      <Rodape/>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Rodape from './components/Rodape.vue'
export default {
  name: 'App',
  components:{
    Rodape
  },
}
</script>

<style>
ul{
  margin: 0;
  padding: 0;
}
li{
  margin: 0;
  padding: 0;
}
</style>
