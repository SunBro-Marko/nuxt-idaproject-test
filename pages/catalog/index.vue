<template>
  <div class="container">
    <div class="alert">
      <h1>Каталог не выбран</h1>
      <h2>Воспользуйтейсь боковым меню для выбора каталога</h2>
    </div>
  </div>
</template>

<script>
export default {
  layout: "market",
  middleware: ['initCatalog']
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
</style>
