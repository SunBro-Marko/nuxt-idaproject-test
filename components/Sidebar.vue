<template>
  <section>
    <h1 class="category-title">Каталог</h1>
    <ul class="category-nav">
      <li v-for="category of categories" :key="category.id">
        <NuxtLink
          class="category-link"
          active-class="active"
          v-bind:to="`/catalog/${category.id}`"
          >{{ category.name }}</NuxtLink
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    activeCategory() {}
  },
  methods: {
    openCategory(category) {
      this.$router.push("/catalog/" + category.id);
    }
  }
};
</script>

<style scoped>
.category-title {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;
  margin-left: 44px;
  color: #1f1f1f;
}
.category-nav {
  margin-top: 24px;
  margin-left: 44px;
  list-style: none;
}

.category-link {
  margin-top: 16px;
  text-decoration: none;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: flex-end;
  color: #59606d;
}

.category-link.active {
  text-decoration-line: underline;
  color: #1f1f1f;
}
</style>
