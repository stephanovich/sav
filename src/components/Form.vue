<template>
<div>
    <Nav/>
    <div class="bg-light mx-auto mt-3 py-3 borderR">
        <h2 class="center">Formulário de Contato</h2>
        <div class="w-85">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
                    <b-form-input
                    tabindex="8"
                    id="input-1"
                    v-model="form.name"
                    required
                    placeholder="Insira seu nome"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-2"
                    label="E-mail:"
                    label-for="input-2"
                    description="Não iremos compartilhar seu e-mail com ninguém."
                >
                    <b-form-input
                    tabindex="9"
                    id="input-2"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Insira seu e-mail"
                    ></b-form-input>
                </b-form-group>
                <b-form-textarea
                tabindex="10"
                    v-model="form.comentario"
                    placeholder="Seu comentário..."
                    rows="5"
                    max-rows="33"
                    id="input-group-3"
                    label="Comentário"
                    label-for="input-3"
                    ></b-form-textarea>
                <div class="margin-t10">
                    <b-button type="submit" variant="primary" tabindex="11">Enviar</b-button>
                    <b-button type="reset" variant="danger" class="margin-l05" tabindex="12">Limpar</b-button>
                </div>
            </b-form>
        </div>
    </div>
</div>
</template>
<script>
import Nav from './Nav.vue';

export default {
  name: 'Form',
  components:{
      Nav
  },
  data(){
      return{
          form: {
          email: '',
          name: '',
          comentario: ''
        },
          show: true
      }
  },
   methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style scoped>
</style>
