<template>
<div>
<Nav/>
    <div class="bg-light mx-auto mt-3 py-3 borderR center">
        <div class="w-50 auto b p">
            <form class="w-60"> 
                <h3 class="m-00">Login</h3>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control form-control-lg" />
                </div>

                <div class="form-group">
                    <label>Senha</label>
                    <input type="password" class="form-control form-control-lg" />
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block">Entrar</button>
            </form>
            <div class="w-60">
              <router-link tag="button" class="btn btn-dark btn-lg btn-block mt-3" :to="{name: 'cadastro'}">Cadastrar</router-link>
            </div>
        </div> 
    </div>
</div>

</template>
<script>
import Nav from './Nav.vue'
  export default {
    name: 'Login',
    components: {
      Nav
    },
  }
</script>
<style scoped>
.w-60{
  width: 60%;
  margin: 0 auto;
}
</style>