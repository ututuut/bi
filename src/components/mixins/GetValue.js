export default configMixin = {
  computed: {

  },
  methods:{
    //对组件配置数据属性 进行全部的绑定
    getKeyValue:function (key){
      let keysArr = key.split('.')
      if(keysArr.length == 1)
      {
        return this.$store.state.data.data[keysArr[0]].value
      }else{
        let datas = this.$store.state.data.data[keysArr[0]].value
        let resData = ''
        if(datas instanceof  Array){
          for(let i in datas){
            resData = datas[keysArr[1]] + ','
          }
          return resData
        }else{
          return datas[keysArr[1]]
        }
      }
    }
  }
}
