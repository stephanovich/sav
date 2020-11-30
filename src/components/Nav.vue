<template>
  <div class="styck">
    <nav id="nav">
      <b-navbar toggleable="lg" type="light" variant="light" class="navBar border0R fontEdit mb-3" >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item  tabindex="1" :to="{name : 'home'}" exact exact-active-class="active">Home</b-nav-item>
            <b-nav-item  tabindex="2" :to="{name : 'pagenav', params : {mapa: 'hospitais'}}" exact exact-active-class="active">Hospital</b-nav-item>
            <b-nav-item  tabindex="3" :to="{name : 'pagenav', params : {mapa: 'delegacias'}}" exact exact-active-class="active">Delegacia</b-nav-item>
            <b-nav-item  tabindex="4" :to="{name : 'pagenav', params : {mapa: 'praia'}}" exact exact-active-class="active">Praia</b-nav-item>
            <b-nav-item  tabindex="5" :to="{name : 'pagenav', params : {mapa: 'restaurantes'}}" exact exact-active-class="active">Restaurantes</b-nav-item>
            <b-nav-item  tabindex="6" :to="{name : 'pagenav', params : {mapa: 'hospedagens'}}" exact exact-active-class="active">Hospedagens</b-nav-item>
            <b-nav-item  tabindex="7" :to="{name : 'pagenav', params : {mapa: 'pontos turisticos'}}" exact exact-active-class="active">Pontos Turísticos</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </nav>
  </div>
</template>
<script>

export default {
  name: 'Nav',

  data(){
    return{
    }
  }
}
</script>

<style scoped>
</style>
