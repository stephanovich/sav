<template>
  <div>
    <div>
      <Nav/>
    </div>
    <div class="divMap bg-light borderR">
      <div class="center cap">
        <h2>{{lerMapa}}</h2>
        <div class="mapa">
          <Mapa :tipo="lerMapa" />
        </div>
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
