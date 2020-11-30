<template>
  <l-map
    :zoom="zoom"
    :center="getLocalAtual"
    @update:center="updateCenter"
    @update:zoom="updateZoom"
  >
    <LTileLayer :url="url" :attribution="attribution" />
    <LMarker v-for="marcador in getTipo(tipo)" :key="marcador.nome" :lat-lng="marcador.coordenada">
      <LPopup>
        <div>
          {{marcador.nome}}
        </div>
      </LPopup>
    </LMarker>
  </l-map>
  
</template>
<script>
import { latLng, Icon } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";
import { mapGetters } from "vuex";
import { LMarker, LPopup } from "vue2-leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  name: "Mapa",
  props: ['tipo'],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 10,
      center: latLng(-22.9756619, -43.2303642),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 10,
      currentCenter: latLng(-22.9756619, -43.2303642),
    };
  },
  methods: {
    updateZoom(zoom) {
      this.currentZoom = zoom;
    },
    updateCenter(center) {
      this.currentCenter = center;
    }
  },
  computed: mapGetters([
    "getLocalAtual",
    "getTipo"
  ])
};
</script>

