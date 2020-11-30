<template>
  <div>
    <LMarker v-for="marcador in marcadores" :key="marcador.nome" :lat-lng="marcador.coordenada">
      <LPopup>
        <div>
          <strong>{{marcador.nome}}</strong>
          <br />
          {{marcador.endereco}}
        </div>
      </LPopup>
    </LMarker>
  </div>
</template>
<script>
import { LMarker, LPopup } from "vue2-leaflet";

export default {
  name: "ListaMarcadores",
  props: ["marcadores"],
  components: {
    LMarker,
    LPopup
  }
};
</script>