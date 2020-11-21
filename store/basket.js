export const state = () => ({
  items: [],
  isOpen: false,
  isOrdered: false,
  customer: {
    name: "",
    email: "",
    phone: ""
  }
});

export const mutations = {
  openBasket(state) {
    document.body.classList.add("my-class");
    state.isOpen = true;
  },
  closeBasket(state) {
    document.body.classList.remove("my-class");
    state.isOpen = false;
    if(state.isOrdered===true){
      state.isOrdered=false
    }
  },

  addItem(state, newItem) {
    const item = JSON.parse(JSON.stringify(newItem)); //глубокая копия объекта без lodash
    item._id = state.items.length ? state.items.length + 1 : 1;
    state.items.push(item);
  },
  deleteItem(state, deleteItem) {
    state.items = state.items.filter(item => item._id !== deleteItem._id);
  },
  checkoutSuccess(state){
    state.items = [];
    state.isOrdered = true;
  }
};

export const actions = {
  async checkout({ commit, state }, oderinfo) {
    try {
      //По идее мы должны были бы передать запрос на сервер, поэтому сам метод должен быть асинхронный
      //При наличии соответствующего API, мы бы послали заказ на сервер, и дождались ответа что всё ок! (ну ли не ок!)
      //но т.к. нет api то тут мы просто вызовем мутации
      commit('checkoutSuccess')
      console.log('Заказ был сделан')
    } catch (e) {
      console.log(e);
    }
  }
};

export const getters = {
  items: s => s.items,
  itemsCount: state => {
    return state.items.length;
  },
  isOpen: s => s.isOpen,
  isNotEmpty: state => {
    return state.items.length !== 0 ? true : false;
  },
  isOrdered: s => s.isOrdered,
  customer: s => s.customer
};
