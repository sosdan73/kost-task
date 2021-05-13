<template>
  <v-app>
    <navbar />
    <v-main class="mt-4">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import navbar from './components/layout/Navbar'

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
    color: inherit !important;
    text-decoration: none !important;
  }
  p {
    margin-bottom: 0;
  }
</style>