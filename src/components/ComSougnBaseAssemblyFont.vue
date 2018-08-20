<template>
  <p v-bind:style="{ color: config.comSougnBaseAssemblyFontColor, fontSize: config.comSougnBaseAssemblyFontSize ,textAlign:config.comSougnBaseAssemblyTextAlign,fontWeight:config.comSougnBaseAssemblyFontWeight}">
    {{config.comSougnBaseAssemblyContent}}
  </p>
</template>

<script>
  export default {
    name: 'Font',
    props:['configs','parentId'],
    data () {
      return {
        inputName:'',
        dataArr:[]
      }
    },
    mounted () {

    },
    methods: {

    },
    computed: {
      config: function () {
        let configsEl = {}
        for(let i in this.configs.configs){
          configsEl[this.configs.configs[i].id] = this.configs.configs[i].value
        }
        if( configsEl.comSougnBaseAssemblyContent != '' && configsEl.comSougnBaseAssemblyContent.match(/({{\w+\.\w+}})|({{\w+}})/g)){
          this.dataArr = configsEl.comSougnBaseAssemblyContent.match(/({{\w+\.\w+}})|({{\w+}})/g)
        }
        for(let i in this.dataArr){
          let dataArrSplit = this.dataArr[i].substring(2,this.dataArr[i].length - 2).split('.')
          if(dataArrSplit.length == 1){
            let dataName = dataArrSplit[0]
            if(this.$store.state.data.data[dataName] == undefined){
              this.$message({
                message: '变量：{{'+dataName+'}}不存在',
                type: 'success'
              });
              continue ;
            }
            let value = this.$store.state.data.data[dataName].value
//            let obj = eval(value)
            if(value instanceof Array){
              this.$message({
                message: '无法对一个对象使用直接语法，请选择使用对象的哪个属性',
                type: 'success'
              });
              continue ;
            }
            if(value == '')
            {
              value = this.$store.state.data.data[dataName].defData
            }
            configsEl.comSougnBaseAssemblyContent = configsEl.comSougnBaseAssemblyContent.replace("{{"+dataArrSplit[0]+"}}",value)
          }else{//使用.语法
            let dataName = dataArrSplit[0]
            if(this.$store.state.data.data[dataName] == undefined){
              this.$message({
                message: '变量：{{'+dataName+'}}不存在',
                type: 'success'
              });
              continue ;
            }
            let value = this.$store.state.data.data[dataName].value
            let obj = eval(value)
            if(obj instanceof Array){
              for(let j in obj){
                value = ','+obj[j][dataArrSplit[1]]
              }
            }
            if(obj instanceof Object){
              console.log(1111111);
              value = obj[dataArrSplit[1]]
            }
            if(value == '')
            {
              value = this.$store.state.data.data[dataName].defData
            }
            configsEl.comSougnBaseAssemblyContent = configsEl.comSougnBaseAssemblyContent.replace("{{"+dataArrSplit[0]+"}}",value)
          }
        }
        return configsEl
      }
    },
    watch: {

    }
  }

  function getData(datas, data){
    return ''
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
