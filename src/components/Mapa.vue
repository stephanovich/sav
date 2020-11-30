<template>
<!-- <div>

  <h1>{{getTipo(tipo)}}</h1>
</div> -->
  <LMap
    :zoom="zoom"
    :center="getLocalAtual"
    :options="mapOptions"
    @update:center="centerUpdate"
    @update:zoom="zoomUpdate"
  >
    <LTileLayer :url="url" :attribution="attribution" />
    <div>
      <ListaMarcadores :marcadores="getTipo(tipo)" />
    </div>
  </LMap>
  
</template>
<script>
import { latLng, Icon } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";
import { mapActions, mapGetters } from "vuex";
import ListaMarcadores from "./ListaMarcadores.vue";

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
    ListaMarcadores
  },
  data() {
    return {
      zoom: 10,
      center: latLng(-22.9756619, -43.2303642),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 13,
      currentCenter: latLng(-22.9756619, -43.2303642),
      withPopup: latLng(-22.9756619, -43.2303642),
      mapOptions: {
        zoomSnap: 0.5
      }
    };
  },
  methods: {
    ...mapActions(["atualizarLocalAtual"]),
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    }
  },
  computed: mapGetters([
    "getLocalAtual",
    "getTipo"
  ])
};
</script>

