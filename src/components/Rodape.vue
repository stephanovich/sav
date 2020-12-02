<template>
  <div>
    <footer class="bg-light py-2 mx-auto mt-3 mb-1 borderR">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-6 p-3">
            <h5> <b>Emergência</b><br></h5>
            <ul class="list-unstyled">
              <li>Policia militar: 190<br></li>
              <li>Corpo de bombeiros: 193<br></li>
              <li>Delegacia da mulher: 180<br></li>
              <li>Serviço Público de Remoção de Doentes: 192<br></li>
            </ul>
          </div>
          <div class="col-lg-6 col-6 p-3">
            <h5> <b>Suporte</b><br></h5>
            <ul class="list-unstyled">
              <li><router-link tabindex="10" tag="a" to="/form" title="Link para o formulário de contato">Formulario de contato</router-link><br></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="mb-0 mt-2">© Copyright</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>

export default {
  name: 'Rodape',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
