<template>
  <div>
    <v-app-bar
      app
      color="teal"
      dark
    >
      <v-item-group>
        <v-container>
          <v-row>
            <v-col
              v-for="tab in [{ name: 'Главная', link: '/'}, { name: 'Обучение', link: '/education'}, { name: 'Достижения', link: '/achievements'}]"
              :key="tab.name"
              cols="4"
              class="text-center"
            >
              <router-link class="dark--text" :to="tab.link">{{ tab.name }}</router-link>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-app-bar>
  </div>
</template>