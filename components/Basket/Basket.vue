<template>
  <section>
    <transition name="overlay">
      <div v-if="isOpen" @click="closeBasket" class="overlay"></div
    ></transition>
    <transition name="basket-container">
      <div v-if="isOpen" class="basket-container">
        <div class="basket-header">
          <h1 class="basket-header-title">Корзина</h1>
          <button class="basket-button-close" @click="closeBasket">
            <img src="~assets/CloseButton.svg" alt="" />
          </button>
        </div>
        <div v-if="!isNotEmpty && !isOrdered" class="basket-empty">
          <p>Пока что вы ничего не добавили в корзину</p>
          <button @click="closeBasket" class="basket-button-black">
            Перейти к выбору
          </button>
        </div>
        <div class="basket-notEmpty" v-if="isNotEmpty">
          <h3>Товары в корзине</h3>
          <transition-group name="basket">
            <BasketCard v-for="item in items" :key="item._id" :item="item" />
          </transition-group>
          <BasketInputGroup />
        </div>
        <div v-if="isOrdered" class="order-success">
          <img src="~assets/success-hand.svg" alt="" />
          <h2>Заявка успешно отправлена</h2>
          <h3>Вскоре наш менеджер свяжется с Вами</h3>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapMutations("basket", ["deleteItem", "closeBasket"])
  },
  computed: {
    ...mapGetters("basket", ["items", "isOpen", "isNotEmpty", "isOrdered"])
  }
};
</script>

<style>
.my-class {
  overflow-y: hidden;
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

.basket-empty {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  max-width: 100%;
}

.basket-empty p {
  width: 100%;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
}

.basket-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}

.basket-button-close {
  background: none;
  cursor: pointer;
  /* Обводку делаем в цвет фона или прозрачной, но не выключаем для слабовидящих */
  outline: #ffffff;
}

.basket-button-black {
  display: block;
  color: #ffffff;
  outline: #ffffff;
  cursor: pointer;
  background: black;
  border-radius: 8px;
  height: 50px;
  width: 100%;
  margin-bottom: 24px;

  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
}
.basket-button-black:hover {
  background: #59606d;
}

.basket-header-title {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;
}
.order-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.order-success h2 {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
  margin-top: 24px;

  color: #000000;
}
.order-success h3 {
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;

  color: #59606d;
}

/*Animations*/

.basket-enter-active,
.basket-leave-active {
  transition: all 0.5s;
}
.basket-enter,
.basket-leave-to {
  opacity: 0;
  transform: translateX(-150px);
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
