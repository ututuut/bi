export default {
  state: {
    data: {

    }
  },
  mutations: {
    DATA_ADD(state , data){
      //添加数据
      state.data[data.name] = data;
    },
    DATA_DEL(state , dataName){
      for(let i in state.data){
        if(dataName == i){
          delete state.data[i];
        }
      }
    },
    DATA_CHANGE(state ,data){
      for(let i in state.data){
        if(data.name == i){
          state.data[i].value = data.value;
          //强制触发深度监听
          state.data = Object.assign({},state.data)
        }
      }
    }
  },
  actions:{
    dataChange(state,data){
      state.commit('DATA_CHANGE',data)
    }
  },
  getters:{

  }
}
