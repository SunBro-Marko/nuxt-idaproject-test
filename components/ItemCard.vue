<template>
  <div class="item-card">
    <div class="item-card-img">
      <div class="item-rating">
        <div class="raiting-icon">
          <img src="~assets/raiting.icon.svg" alt="" />
          <div class="crop">
            <img
              class="img-filled"
              v-bind:style="{ '--raiting': filled[Number(item.rating)] }"
              src="~assets/raiting-filled.icon.svg"
              alt=""
            />
          </div>
        </div>
        {{ item.rating }}
      </div>
      <img
        class="item-image"
        :src="`http://front-test.idalite.com${item.photo}`"
        alt=""
      />
      <div class="card-addButton" @click="addItem(item)" href="#"><img v-bind:class="{itemInBasket:itemsInBasket.some(i=>i.id===item.id)}" src="~assets/shop.icon.png" alt=""/></div>
    </div>
    <h3 class="card-name">{{ item.name }}</h3>
    <h3 class="card-price">{{ item.price.toLocaleString("ru-RU") }} ₽</h3>

    <svg></svg>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  props: ["item"],
  data() {
    return {
      color: "red",
      filled: ["14px", "10px", "8px", "6px", "4px", "0px"]
    };
  },
  methods: {
    ...mapMutations("basket", ["addItem"])
  },  
  computed: {
    ...mapGetters('basket',{
      itemsInBasket: "items"
    })
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");

.itemInBasket{
  filter: saturate(20);
  transition: all 0.3s ease-in-out;
  transform: scale(1.2);
}

.item-card {
  width: 264px;
  height: 272px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin: 8px;
}
.item-card-img {
  padding: 18px 18px 0 18px;
  display: flex;
  justify-content: space-between;
}
.item-image {
  height: 180px;
}

.item-card-rating {
  max-width: 100%;
  display: flex;
}

.card-name {
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: flex-end;
  color: #59606d;
  margin: 16px 0 0 16px;
}

.card-price {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: flex-end;
  color: #1f1f1f;
  margin: 6px 0 0 16px;
}

.item-rating {
  max-height: 20px;
  width: 25px;
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 13px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color);
}

.raiting-icon {
  position: relative;
}
.raiting-icon img {
  position: absolute;
}
.crop {
  float: left;
  position: relative;
  width: 14px;
  height: 14px;
}
.crop img {
  margin: 0;
  position: absolute;
  clip: rect(var(--raiting) auto auto auto);
}
.card-addButton{
  cursor: pointer;
}
</style>
