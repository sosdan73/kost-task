<template>
  <div>
    <page-header>Достижения</page-header>
    <v-card class="mx-8">
      <v-card-title>
        <v-row align="center">
          <v-col cols="4" class="text-center">
            <h4 class="text-h4">Nickname</h4>
          </v-col>
          <v-col cols="8">
            <level/>
          </v-col>
        </v-row>
      </v-card-title>
      <v-divider class="mx-2"></v-divider>
      <v-row justify="space-around" class="my-3">
        <v-col
          v-for="a in achievements"
          :key="a.name"
          cols="11"
        >
          <achievement :data="a" />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import pageHeader from '../components/layout/Header';
import level from '../components/achievements/Level';
import achievement from '../components/achievements/Achievement';

  export default {
    name: 'Achievements',
    components: {
      pageHeader,
      level,
      achievement
    },
    data() {
      return {
        achievements: [
          {
            name: 'Сделать главную страницу',
            description: 'Накодить чет-там про главную страницу ай донт ноу блин',
            done: 1,
            needed: 1,
            ready: true
          },
          {
            name: 'Сделать страницу образования',
            description: 'Наполнить страницу с образованием контентом',
            done: 0,
            needed: 1,
            ready: false
          }
        ]
      }
    },
    computed: {

    }
  }
</script>
