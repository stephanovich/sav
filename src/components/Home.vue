<template>
  <div >
     <header class="py-5 text-center mx-auto mt-1 backImg">
      <div class="container">
        <div class="row">
          <div class="p-5 mx-auto col-md-8 col-10 bgWi">
            <h3 class="display-3">Sistema de apoio ao visitante<br></h3>
            <p class="mb-4">Encontre tudo que precisa para sua viagem aqui, hoteis, pontos turisticos, praias, hospitais e muito mais.</p> <a class="btn btn-primary" href="#nav"  tabindex="0">COMEÇAR<br></a>
          </div>
        </div>
      </div>
    </header>
    <Nav/>
    <Carrosel/>
  </div>
</template>
<script>
import Nav from './Nav.vue';
import Carrosel from './Carrosel.vue'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  components:{
    Nav,
    Carrosel
  },
  data(){
    return{
      mensagem: "hospital"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
