<template>
  <l-map :zoom="zoom" :center="getLocalAtual">
    <LTileLayer :url="url" :attribution="attribution" />
    <LMarker v-for="p in getTipo(tipo)" :key="p.nome" :lat-lng="p.cord">
      <LPopup>
        <div>
          {{'Local: ' + p.nome}}
        </div>
      </LPopup>
    </LMarker>
  </l-map>
  
</template>
<script>
import { latLng, Icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import { mapGetters } from "vuex";

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
    };
  },
  computed: mapGetters([
    "getLocalAtual",
    "getTipo"
  ])
};
</script>

