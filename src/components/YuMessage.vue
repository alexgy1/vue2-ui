<template>
  <div>
    <div v-for="lay in messageLayers" :key="lay.id">
      {{ lay.message }} {{ lay.id }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageLayers: [],
    };
  },
  mounted() {
    this.id = 0;
  },
  methods: {
    add(options = {}) {
      let layer = { ...options, id: ++this.id };
      this.messageLayers.push(layer);

      layer.timer = setTimeout(() => {
        this.remove(layer);
      }, options.duration || 2000);
    },
    remove(layer) {
      clearTimeout(layer.timer);
      this.messageLayers = this.messageLayers.filter(
        (lay) => lay.id !== layer.id
      );
    },
  },
};
</script>

<style></style>
