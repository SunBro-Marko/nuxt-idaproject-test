<template>
  <div class="container">
    <div class="sort-menu">
      <h2>Сортировать по:</h2>
      <DropDown
        class="my-dropdown-toggle"
        :options="dropdown.variants"
        :selected="dropdown.selected"
        v-on:updateOption="OnSelect"
        :placeholder="'Select an Item'"
        :closeOnOutsideClick="true"
      >
      </DropDown>
    </div>

    <transition-group class="card-container" name="flip-list">
      <ItemCard v-for="item in SortedList" :key="item.id" :item="item" />
    </transition-group>
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
  },
  data() {
    return {
      dropdown: {
        selected: {
          name: "По цене",
          label: "цене",
          field: "price",
          direction: "asc"
        },
        variants: [
          { name: "По цене", label: "цене", field: "price", direction: "asc" },
          {
            name: "По популярности",
            label: "популярности",
            field: "rating",
            direction: "desc"
          }
        ]
      }
    };
  },
  computed: {
    SortedList: function() {
      let direction = this.dropdown.selected.field;
      return this.items.sort((a, b) =>
        this.dropdown.selected.direction === "asc"
          ? a[direction] - b[direction]
          : b[direction] - a[direction]
      );
    }
  },
  methods: {
    OnSelect(payload) {
      this.dropdown.selected = payload;
    }
  }
};
</script>

<style>
.flip-list-move {
  transition: all 1s;
}

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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 90px;
}

.sort-menu h2 {
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
}
</style>
