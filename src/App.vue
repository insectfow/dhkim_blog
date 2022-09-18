<template>
  <div id="app">
    <header class="header">
      <div class="container flex-container">
        <h3 class="logo">
          <router-link to="/">
            Dh blog
          </router-link>
        </h3>
        <swich-button-vue @toggle="onToggleDarkMode" :darkmode="darkmode" />
      </div>
    </header>
    <router-view class="page" />
    <div class="popup-modal" v-show="isModal">
      {{isModalText}}
    </div>
    <alert-modal-vue v-show="isModal" />
  </div>
</template>
<script>
import AlertModalVue from './components/modules/AlertModal.vue';
import SwichButtonVue from './components/modules/SwichButton.vue';
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['isModal', 'isModalText'])
  },
  data() {
    return {
      darkmode: false
    }
  },
  components: {
    SwichButtonVue,
    AlertModalVue
  },
  mounted() {
    if(window && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add("darkmode");
      this.darkmode = true;
    } else {
      document.documentElement.classList.add("lightmode");
      this.darkmode = false;
    }
  },
  methods: {
    onToggleDarkMode() {
      if (window) {
        console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          if(document.documentElement.classList.contains('darkmode')) {
            document.documentElement.classList.remove("darkmode");
            document.documentElement.classList.add("lightmode");
            this.darkmode = false;
          } else {
            document.documentElement.classList.remove("lightmode");
            document.documentElement.classList.add("darkmode");
            this.darkmode = true;
          }
        } else {
          if(document.documentElement.classList.contains('lightmode')) {
            document.documentElement.classList.remove("lightmode");
            document.documentElement.classList.add("darkmode");
            this.darkmode = true;
          } else {
            document.documentElement.classList.remove("darkmode");
            document.documentElement.classList.add("lightmode");
            this.darkmode = false;
          }
        }
      }
    }
  } 
}
</script>