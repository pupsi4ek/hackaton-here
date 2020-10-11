<template>
  <div id="map">
    <div id="mapContainer" style="height:500px;width:100%" ref="hereMap"></div>
  </div>
</template>

<script>
export default {
  name: "HereMap",
  props: ['center', 'pointList'],
  data() {
    return {
      platform: null,
      apikey: "VPMeXhKfZ_R4DwoQujmGTPFLFoR2991A23QeCQUO8sY"
    };
  },
  async mounted() {
    const platform = new window.H.service.Platform({
      apikey: this.apikey
    });
    this.platform = platform;
    this.initializeHereMap();
  },
  methods: {
    initializeHereMap() { // rendering map
      const mapContainer = this.$refs.hereMap;
      const H = window.H;
      // Obtain the default map types from the platform object
      let maptypes = this.platform.createDefaultLayers();
      // Instantiate (and display) a map object:
      let map = new H.Map(mapContainer, maptypes.vector.normal.map, {
        zoom: 14,
        center: this.center,
        // pixelRatio: window.devicePixelRatio || 1
      });

      addEventListener("resize", () => map.getViewPort().resize());

      // add behavior control
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // add UI
      H.ui.UI.createDefault(map, maptypes);

      // End rendering the initial map
      let LocationOfMarker = this.center;

      // Create a marker icon from an image URL:
      let icon = new H.map.Icon("https://www.flaticon.com/svg/static/icons/svg/25/25613.svg", { size: { w: 20, h: 20 } });

      // Create a marker using the previously instantiated icon:
      let marker = new H.map.Marker(LocationOfMarker, { icon: icon });

      // Add the marker to the map:
      map.addObject(marker);

      for (let i in this.pointList){
        let LocationOfMarker = this.pointList[i];
        let marker = new H.map.Marker(LocationOfMarker, { icon: icon });
        map.addObject(marker);
      }
    }
  }
};
</script>
