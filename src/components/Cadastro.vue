<template>
  <div>
    <Nav />
    <div class="bg-light mx-auto mt-3 py-3 borderR center">
      <div class="w-50 auto b p">
        <b-form @submit="onSubmit" class="w-60">
          <h3 class="m-00">Cadastro</h3>

          <b-form-group id="input-group-1" label="Email:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Senha:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.senha"
              required
              placeholder="Senha"
              type="password"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" class="btn btn-dark btn-lg btn-block mt-3"
            >Salvar</b-button
          >
        </b-form>
        <div class="w-60">
          <router-link
            tag="button"
            class="btn btn-dark btn-lg btn-block mt-3"
            :to="{ name: 'login' }"
            >Fazer login</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "./Nav.vue";
export default {
  name: "Login",
  components: {
    Nav,
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
  data() {
    return {
      form: {
        email: "",
        senha: "",
      },
    };
  },
};
</script>
<style scoped>
.w-60 {
  width: 60%;
  margin: 0 auto;
}
</style>