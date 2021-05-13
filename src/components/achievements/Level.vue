<template>
  <div class="d-flex align-center">
    <div class="level d-flex justify-center align-center">
      {{ level }}
    </div>
    <v-progress-linear
      :value="progress"
      height="40"
      striped
      color="teal"
    ></v-progress-linear>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        level: 1,
        progress: 10,
      }
    },
  }
</script>

<style lang="scss" scoped>
$color-pack: false;
@import '~vuetify/src/styles/main.sass';

.level {
  min-width: 50px;
  height: 40px;
  border: 1px solid map-get($teal, base);
}
</style>