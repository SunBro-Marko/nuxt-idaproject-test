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
  },

  addItem(state, newItem) {
    const item = JSON.parse(JSON.stringify(newItem)) //глубокая копия объекта без lodash
    item._id=state.items.length ? state.items.length+1:1
    state.items.push(item);
  },
  deleteItem(state, deleteItem) {
    state.items = state.items.filter(item => item._id !== deleteItem._id);
  }
};

export const actions = {};

export const getters = {
  items: s => s.items,
  itemsCount: (state) => {return state.items.length},
  isOpen: s => s.isOpen,
  isNotEmpty: (state) => {return state.items.length!==0 ? true : false},
  isOrdered: s => s.isOrdered,
  customer: s => s.customer
};
