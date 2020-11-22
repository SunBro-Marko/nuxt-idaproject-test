<template>
  <div class="App">
    <client-only>
      <transition name="overlay">
        <div v-if="isOpen" @click="closeBasket" class="overlay"></div
      ></transition>
      <transition name="basket-container">
        <Basket v-if="isOpen" />
      </transition>
    </client-only>
    <Header class="header" />
    <transition name="component-fade" mode="out-in">
      <Nuxt class="content" />
    </transition>
    <Sidebar class="sidebar" />
    <Footer class="footer" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations("basket", ["closeBasket"])
  },
  computed: {
    ...mapGetters("basket", ["isOpen"])
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

.App {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 220px minmax(auto, 1220px) 1fr;
  grid-template-rows: 66px 1fr auto;
  grid-template-areas:
    "header header header header"
    ". sidebar content ."
    "footer footer footer footer";
  background: #ffffff;
}
.header {
  grid-area: header;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;
}

.content {
  grid-area: content;
}

.sidebar {
  grid-area: sidebar;
}

.footer {
  grid-area: footer;
  background-color: rgb(219, 214, 167);
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  min-width: 100vw;
  min-height: 100vh;
  background: #ffffff;
  opacity: 0.8;
  z-index: 98;
}

.basket-container {
  top: 0;
  position: absolute;
  right: 0;
  min-height: 100vh;
  width: 460px;
  max-width: 460px;
  background: #ffffff;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0px 0px 8px;
  z-index: 99;
  box-sizing: border-box;
  padding: 48px;
  max-height: 360px;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
}

/* Animation */
.component-fade-enter-active,
.component-fade-leave-active {
  transition: all 0.7s;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: all 1s;
}
.overlay-enter,
.overlay-leave-to {
  opacity: 0;
}

.basket-container-enter-active,
.basket-container-leave-active {
  transition: all 0.5s;
}
.basket-container-enter,
.basket-container-leave-to {
  opacity: 0;
  transform: translateX(350px);  
}
</style>
