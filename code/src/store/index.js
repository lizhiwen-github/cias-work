import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userObj:{
      name:'',
      tel:'',
      email:''
    }
    
  },
  mutations: {
    getstate(state,datass){
      state.userObj = datass;
      // console.log(state.userObj,datass);
    }
  },
  actions: {
  },
  modules: {
  }
})
