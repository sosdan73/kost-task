<template>
  <v-app>
    <navbar />

    <v-main class="mt-4">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import navbar from './components/Navbar'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    navbar,
  }
};
</script>

<style lang="scss">
  a {
    color: inherit;
    text-decoration: none;
  }
</style>