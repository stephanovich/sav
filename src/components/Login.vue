<template>
<div>
<Nav/>
    <div class="bg-light mx-auto mt-3 py-3 borderR center">
        <div class="w-50 auto b p">
            <form>
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

</style>