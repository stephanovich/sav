<template>
  <div class="styck">
    <nav id="nav">
      <b-navbar toggleable="lg" type="dark" variant="dark" class="navBar border0R" >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name : 'home'}" exact exact-active-class="active">Home</b-nav-item>
            <b-nav-item :to="{name : 'pagenav', params : {mapa: 'hospitais'}}" exact exact-active-class="active">Hospital</b-nav-item>
            <b-nav-item :to="{name : 'pagenav', params : {mapa: 'delegacias'}}" exact exact-active-class="active">Delegacia</b-nav-item>
            <b-nav-item :to="{name : 'pagenav', params : {mapa: 'praia'}}" exact exact-active-class="active">Praia</b-nav-item>
            <b-nav-item :to="{name : 'pagenav', params : {mapa: 'restaurantes'}}" exact exact-active-class="active">Restaurantes</b-nav-item>
            <b-nav-item :to="{name : 'pagenav', params : {mapa: 'hospedagens'}}" exact exact-active-class="active">Hospedagens</b-nav-item>
            <b-nav-item :to="{name : 'pagenav', params : {mapa: 'pontos turisticos'}}" exact exact-active-class="active">Pontos Turísticos</b-nav-item>
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
      mensagem: "hospital"
    }
  }
}
</script>

<style scoped>
</style>
