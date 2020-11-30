<template>
 <!-- <div id="hospitais" class="d-flex justify-content-center">
    <div class="m-4">
      <h1>Hospitais</h1>
      <div class="mapa d-flex m-4">
        <Mapa tipo="hospitais" />
      </div>
    </div>
  </div> -->
  <div>
    <div>
      <Nav/>
      <p>{{lerMapa}}</p>
    </div>
    <div class="divMap bg-dark borderR">
        <div class="mapa">
        <Mapa :tipo="lerMapa" />
    </div>
    </div>
  </div>
</template>

<script>
import Nav from './Nav.vue';
import Mapa from './Mapa.vue';
export default {
  name: 'PageNav',
  data(){
    return { }
  },
  components:{
    Nav,
    Mapa
  },
  computed:{
    lerMapa: function(){
      let mapa = this.$route.params.mapa
      return mapa
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
