<template>
  <div class="container">
    <div>
      <nuxt-link
        exact
        no-prefetch
        active-class="active"
        class="nav-link"
        to="/catalog/1"
      >
        Перейти в каталог
      </nuxt-link>
      <h1>
        Тестовое задание для компании
        <a href="https://idaproject.com/">ida.project</a>
      </h1>
      <h2>Разработчик: Михаил Алёнин - sunbro.marko@yandex.ru</h2>
      <h2><a href="https://github.com/SunBro-Marko/nuxt-idaproject-test">Ссылка на GitHUB репозиторий</a></h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {  
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
a,
h1,
h2 {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  color: #59606D;
}

a {
  font-size: 32px;
  line-height: 41px;
}

h1 {
  margin-top: 20px;
  font-size: 32px;
  line-height: 41px;
}
h2 {
  font-size: 24px;
  line-height: 41px;
}
a.nav-link{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  outline: #ffffff;
  cursor: pointer;
  background: black;
  border-radius: 8px;
  height: 50px;
  width: auto;
  margin-bottom: 24px;

  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 21px;
  text-decoration: none;
}

.a.nav-link:hover {
  background: #59606d;
}
</style>
