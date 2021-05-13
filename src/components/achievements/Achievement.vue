<template>
  <div>
    <v-card
      class="pa-2"
      outlined
      tile
    >
      <h5 class="text-h5">{{ data.name }}</h5>
      <span class="text-subtitle-1 grey--text text--darken-2">{{ data.description }}</span>
      <span
        class="float-right mr-5"
        :class="{'teal--text': data.ready}"
      >
        {{ data.done }}/{{ data.needed }}
      </span>
    </v-card>
  </div>
</template>

<script>
  export default {
    props:['data']
  }
</script>

<style lang="scss" scoped>

</style>