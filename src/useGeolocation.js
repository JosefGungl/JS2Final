import {onUnmounted, onMounted, ref} from "vue";

export function useGeolocation() {
    const coords = ref({latitude: 42.934440, longitude: -88.851660})
    //latitude: 42.934440, longitude: -88.851660
    const isSupported = 'navigator' in window && 'geolocation' in navigator;

    let watcher = null
    onMounted(() => {
        if (isSupported) {
            watcher = navigator.geolocation.watchPosition(
                position => (coords.value = position.coords)
            )
        }
    })

    onUnmounted(() => {
        if (watcher) {
            navigator.geolocation.clearWatch(watcher)
        }
    })

    return {coords, isSupported}
}
