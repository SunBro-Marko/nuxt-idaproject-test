<template>
  <div class="container">
    <div class="sort-menu">
      <!-- <DropDown
      class="my-dropdown-toggle"
      :options="arrayOfObjects"
      :selected="object"
      v-on:updateOption="none"
      :placeholder="'Select an Item'"
      :closeOnOutsideClick="boolean"
    >
    </DropDown> -->
    </div>

    <div class="card-container">
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "market",

  async asyncData({ $axios, params }) {
    const items = await $axios.$get(
      `http://front-test.idalite.com/api/product?category=${params.id}`
    );
    return { items };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.card-container {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.sort-menu {
  display: inline-flex;
  justify-content: right;
}
</style>
