<template>
  <div class="item-card">
    <div class="item-card-img">
      <img
        class="item-image"
        :src="`http://front-test.idalite.com${item.photo}`"
        alt=""
      />
    </div>
    <div class="card-info">
      <span>
        <h3 class="card-name">{{ item.name }}</h3>
        <h3 class="card-price">{{ item.price.toLocaleString("ru-RU") }} ₽</h3>
      </span>
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
    </div>
    <div class="card-delete-button">
      <button @click="deleteItem(item)">
        <img src="~assets/recycleBin.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["item"],
  data() {
    return {
      color: "red",
      filled: ["14px", "10px", "8px", "6px", "4px", "0px"]
    };
  },
  methods: {
    ...mapMutations("basket", ["addItem", "deleteItem"])
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");

.item-card {
  width: 100%;
  height: 120px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin: 8px;
  display: flex;
}
.item-card-img {
  padding: 18px 18px 0 18px;
}

.item-image {
  max-height: 90px;
  max-width: 100%;
}

.item-card-rating {
  width: 100%;
  display: flex;
}

.card-info {
  width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 0 16px 0;
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

.card-delete-button{
  display:flex;
  flex-direction: column;
  justify-content: center;
}

.card-delete-button button{
  background: none;
  cursor: pointer;
  outline: #ffffff;
}
</style>
