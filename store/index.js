export const state = () => ({
    categories: []
  })
  
  export const mutations = {
    setCategories(state, categories) {
      state.categories = categories
    }
  }
  
  export const actions = {
    async nuxtServerInit({commit}) {
      const categories = await this.$axios.$get('http://front-test.idalite.com/api/product-category')  
        commit('setCategories', categories)
    },
  }
  
  export const getters = {
    categories: s => s.categories
  }
  