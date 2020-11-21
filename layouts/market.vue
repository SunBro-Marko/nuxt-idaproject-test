<template>
  <div class="App">
    <Basket v-if="isOpen"/>    
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

export default {
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
</style>
