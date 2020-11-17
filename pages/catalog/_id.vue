<template>
  <div class="container">
    <div class="container">
      <div class="card-container">
        <ItemCard v-for="item in items" :key="item.id" :item="item"/>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  layout: 'market',  
  async asyncData({$axios,params}){
    const items = await $axios.$get(`http://front-test.idalite.com/api/product?category=${params.id}`)
    return {items}
  },
  data(){
    return{
      message:'Сообщение для компонента'
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.card-container{
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
}
</style>
