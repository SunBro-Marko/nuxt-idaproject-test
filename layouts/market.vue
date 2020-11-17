<template>
  <div class="App">
    <Header class="header" />
    <Nuxt class="content" />
    <Sidebar  class="sidebar" />
    <Footer class="footer" />
  </div>
</template>

<script>

</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

.App {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 220px minmax(auto, 1220px) 1fr;
  grid-template-rows: 66px 1fr auto;
  grid-template-areas:
    "header header header header"
    ". sidebar content ."
    "footer footer footer footer";
  background: #e5e5e5;
}
.header {
  grid-area: header;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;
}

.content {
  grid-area: content;
}

.sidebar {
  grid-area: sidebar;
  background-color: grey;
}

.footer {
  grid-area: footer;
  background-color: rgb(219, 214, 167);
}
</style>
