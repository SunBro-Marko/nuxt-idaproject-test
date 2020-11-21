<template>
  <div class="input-group">
    <ValidationProvider class="basket-input" name="Имя" rules="required" v-slot="{ errors }">
      <input
        name="name"
        placeholder="Введите своё имя"
        value="name"
        v-model="name"
        type="name"
      />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>

    <ValidationProvider class="basket-input" name="Телефон" rules="required" v-slot="{ errors }">
      <input
        name="phone"
        placeholder="+7(999) 999-99-99"
        v-mask="'+7(###) ###-##-##'"
        v-model="phone"
        type="tel"
        autocomplete="on"
      />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
    <ValidationProvider class="basket-input" name="Адрес" rules="required" v-slot="{ errors }">
      <input
        name="adress"
        placeholder="Введите адрес доставки"
        v-model="adress"
        type="text"
      />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>

    <button class="basket-button-black">Отправить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      adress: ""
    };
  }
};
</script>

<style>
.input-group {
  display: grid;
  row-gap: 24px;
}

.input-group input {
  display: block;
  height: 50px;
  max-height: 50px;
  width: 100%;
  background: #f8f8f8;
  border-radius: 8px;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;

  padding-left: 15px;

}
/* трюк для обхода перекрашивания поля автокомплита*/
.input-group input:-webkit-autofill{
  box-shadow: 0 0 0 30px #f8f8f8 inset !important;
}

.basket-input{
  position: relative;
}

.basket-input span{
  position: absolute;
  bottom: -18px;
  left: 16px;
  font-family: PT Sans;
  font-size: 14px;
  color: red;
}


</style>
