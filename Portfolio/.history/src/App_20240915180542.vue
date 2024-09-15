<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <div id="header">
      <HeaderView />
    </div>
    <div id="body">
      <router-view /> <!-- Ce contenu changera selon la page -->
    </div>
    <div id="footer">
      <FooterView /> <!-- Footer présent sur toutes les pages -->
    </div>
  </div>
</template>

<script>
import HeaderView from './views/HeaderView.vue'
import FooterView from './views/FooterView.vue'
import AcceueilView from './views/AccueilView.vue'
import CréationsView from './views/CréationsView.vue'
import ContactView from './views/ContactView.vue'


export default {
  name: 'App',
  components: {
    HeaderView,
    AcceueilView,
    CréationsView,
    ContactView,
    FooterView
  }
}
</script>
