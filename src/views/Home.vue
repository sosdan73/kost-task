<template>
  <div style="height:100%">
    <page-header>Главная</page-header>
    <v-row class="ht max-height">
      <v-col cols="4" class="text-center pr-0 vr">
        <h3 class="hb mt-1 pb-2">Настройки модели</h3>
        <v-list>
          <v-list-item-group>
            <v-list-item
              :key="item"
              v-for="item in modelPreferences"
            >
              <v-list-item-content>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
  </div>
</template>

<script>
  import pageHeader from '../components/layout/Header';

  export default {
    name: 'Home',
    components: {
      pageHeader,
    },
    data() {
      return {
        modelPreferences: ['Сделать круг', 'Сделать квадрат', 'Сделать бочку', 'lalala']
      }
    },
  }
</script>

<style lang="scss" scoped>
$color-pack: false;
@import '~vuetify/src/styles/main.sass';
$border: 1px solid map-get($teal, base);

.vr {
  border-right: $border;
}
.hb {
  border-bottom: $border;
}
.vl {
  border-left: $border;
}
.ht {
  border-top: $border;
}
.max-height {
  min-height: calc(100% - 80px);
}
</style>