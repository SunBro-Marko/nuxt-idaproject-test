<template>
  <section>
    <h1>Каталог</h1>
    <ul>
      <li v-for="category of categories" :key="category.id">
        <a href="#" @click.prevent="openCategory(category)">{{
          category.name
        }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.getters.categories;
    }
  },
  methods: {
    openCategory(category) {
      this.$router.push("/catalog/" + category.id);
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;
  margin-left: 44px;
  color: #1f1f1f;
}
ul {
  margin-left: 44px;
  list-style: none;
}
a {
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
</style>
