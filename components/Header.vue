<template>
  <section class="header-nav-container">
    <div class="header-nav">
      <div class="nav-title">
        <nuxt-link
          exact
          no-prefetch
          active-class="active"
          class="nav-link"
          to="/"
        >
          HOME.PAGE
        </nuxt-link>
      </div>
      <client-only>
        <div class="nav-basket-container">
          <div v-on:click="openBasket" class="nav-basket">
            <img class="nav-bascket-icon" src="~/assets/basket.svg" alt="" />
            <div v-if="isNotEmpty" class="nav-basket-counter">
              <span>{{ itemsCount }}</span>
            </div>
          </div>
        </div>
      </client-only>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapMutations("basket", ["openBasket"])
  },
  computed: {
    ...mapGetters("basket", ["isNotEmpty", "itemsCount"])
  }
};
</script>

<style scoped>
.header-nav-container {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 1440px) 1fr;
}
.header-nav {
  grid-column: 2;
  display: grid;
  grid-template-columns: 220px 1fr 132px;
}

.nav-title {
  grid-column: 1;
  position: relative;
}

.nav-title .nav-link {
  position: absolute;
  left: 44px;
  top: 18px;
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;

  color: #59606d;
  text-decoration: none;
}

.nav-basket-container {
  grid-column: 3;
  position: relative;
  display: flex;
}

.nav-basket {
  position: relative;
  display: flex;
  align-content: center;
  cursor: pointer;
}

.nav-basket-counter {
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;

  color: #ffffff;
  background: #59606d;
  width: 12px;
  height: 12px;
  border-radius: 50%;

  left: 17px;
  top: 16px;

  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 10px;
}
.nav-basket-counter span {
  padding-top: 0.5px;
}
</style>
