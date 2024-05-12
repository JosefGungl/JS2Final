<script>
import {computed, onMounted, onUnmounted, ref} from 'vue'
import { useGeolocation } from "@/useGeolocation.js";
import { Loader } from "@googlemaps/js-api-loader";
import googleMapsKey from "@/connections/_googleMapsConnection.js";

export default {
  name: "GoogleMap",
  setup() {
    const { coords } = useGeolocation();
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }))

    const loader = new Loader({ apiKey: googleMapsKey() })
    const mapDiv = ref(null)
    let map = ref(null)
    onMounted(async () => {
      await loader.load()
      map.value = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 18,
        mapTypeId: 'satellite'
      })
    })

    return { currPos, mapDiv }

  }
}


</script>

<template>


  <div ref="mapDiv" style="width: 100%; height: 45vh;"></div>

</template>

<style scoped>

</style>
