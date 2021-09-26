<template>
  <v-app>
    <splash :loading="!loaded"></splash>
    <v-app-bar app height="80" color="transparent" hide-on-scroll elevation="0">
      <img src="./assets/img/unfold-logo.svg" alt="logo">
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Splash from './views/Splash';

export default {
  name: 'App',
  components: {
    Splash,
  },
  computed: {
    ...mapState(['loaded']),
  },
};
</script>

<style lang="scss">
@import "styles/base";
</style>
