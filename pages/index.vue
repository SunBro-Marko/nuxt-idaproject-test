<template>
  <div class="container">
    <div>
        <h1>Страница с базовой информацией о приложении и ссылками</h1>
        <nuxt-link
      exact
      no-prefetch
      active-class="active"
      class="nav-link"
      to="/catalog/1"
    >
      Перейти в каталог
    </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
a{
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;  
  text-decoration: none;
  color:red;
}
</style>
