<template>
<div>
  <div id="nav">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand  title="Link para a tela inicial"  tabindex="1" :to="{name : 'home'}" exact exact-active-class="active">Home</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
              <b-nav-item title="Link para ver hospitais"  tabindex="2" :to="{name : 'pagenav', params : {mapa: 'hospitais'}}" exact exact-active-class="active">Hospital</b-nav-item>
              <b-nav-item title="Link para delegacias"  tabindex="3" :to="{name : 'pagenav', params : {mapa: 'delegacias'}}" exact exact-active-class="active">Delegacia</b-nav-item>
              <b-nav-item title="Link para ver praias"  tabindex="4" :to="{name : 'pagenav', params : {mapa: 'praia'}}" exact exact-active-class="active">Praia</b-nav-item>
              <b-nav-item title="Link para ver restaurantes"  tabindex="5" :to="{name : 'pagenav', params : {mapa: 'restaurantes'}}" exact exact-active-class="active">Restaurantes</b-nav-item>
              <b-nav-item title="Link para ver locais para se hospedar" tabindex="6" :to="{name : 'pagenav', params : {mapa: 'hospedagens'}}" exact exact-active-class="active">Hospedagens</b-nav-item>
              <b-nav-item title="Link para ver pontos turísticos" tabindex="7" :to="{name : 'pagenav', params : {mapa: 'pontos turisticos'}}" exact exact-active-class="active">Pontos Turísticos</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" tabindex="8">Search</b-button>
          </b-nav-form>
            <b-nav-item title="Link para tela de login" tabindex="9" :to="{name: 'login'}">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
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
