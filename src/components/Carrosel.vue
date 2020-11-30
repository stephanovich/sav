<template>
  <div >
    <div class="bg-light mx-auto mt-3 py-3 borderR">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="">Pontos de interesse</h3>
          </div>
        </div>
        <div>
            <b-carousel
                id="carousel"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <b-carousel-slide caption="Museu do MAC - RJ">
                    <template #img>
                    <img class="d-block img-fluid w-100"
                    src="../assets/style/image/brazil-1736706_1920.jpg"
                    alt="Foto Museu do MAC em niterói - RJ" title="Foto Museu do MAC em niterói - RJ">
                    </template>
                </b-carousel-slide>

                <b-carousel-slide caption="Lapa - RJ">
                    <template #img>
                    <img class="d-block img-fluid w-100"
                    src="../assets/style/image/rio-de-janeiro-272052_1920.jpg"
                    alt="Foto de um ponto da lapa - RJ" title="Foto de um ponto da lapa - RJ">
                    </template>
                </b-carousel-slide>

                <b-carousel-slide caption="Pão de açucar - RJ">
                    <template #img>
                    <img class="d-block img-fluid w-100"
                    src="../assets/style/image/sugarloaf-mountain-1679285_1920.jpg"
                    alt="Foto do pão de açucar - RJ" title="Foto do pão de açucar - RJ">
                    </template>
                </b-carousel-slide>
            </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Carrosel',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
</style>
