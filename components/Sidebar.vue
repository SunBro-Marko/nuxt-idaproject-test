<template>
  <section>
    <h1>Каталог</h1>
    <ul>
      <li v-for="category of categories" :key="category.id">
        <a href="#" @click.prevent="openCategory(category)">{{category.name}}</a>
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
      this.$router.push('/catalog/' + category.id)
    }
  }
};
</script>

<style></style>
