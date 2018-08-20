<template>
  <div>
    <el-switch
      style="display: block"
      v-model="input"
      :width="parseInt(config.comSougnBaseAssemblySwitchWidth)"
      :active-icon-class="config.comSougnBaseAssemblySwitchActiveIconClass"
      :inactive-icon-class="config.comSougnBaseAssemblySwitchInactiveIconClass"
      :active-color="config.comSougnBaseAssemblySwitchActiveColor"
      :inactive-color="config.comSougnBaseAssemblySwitchInactiveColor"
      :active-text="config.comSougnBaseAssemblySwitchActiveText"
      :inactive-text="config.comSougnBaseAssemblySwitchInactiveText"
      :active-value="config.comSougnBaseAssemblySwitchActiveValue"
      :inactive-value="config.comSougnBaseAssemblySwitchInactiveValue">
    </el-switch>
  </div>

</template>

<script>
  export default {
    name: 'Switch',
    props:['configs','parentId'],
    data () {
      return {
        input:true
      }
    },
    mounted () {

    },
    mounted () {
      this.config = this.view(this.config)
    },
    methods: {
      view:function(newVal){
        let configsEl = newVal
        //数据绑定处理器
        //使用配置项配置值
        if(configsEl.comSougnBaseAssemblySwitchConfigOption){
          if(configsEl.comSougnBaseAssemblySwitchConfigOption == 'sql'){
            let sqlKey = configsEl.comSougnBaseAssemblySwitchConfigValue
            let datasObj = eval(configsEl.comSougnBaseAssemblySwitchParameter)
            let datasArr = []
            for(let i in datasObj){
              let param = {
                name:'',
                value:'',
                type:''
              }
              //获取数据名称
              if(datasObj[i].value){
                let value = this.getKeyValue(datasObj[i].value)
                if(value) {
                  param.value = value
                }else{
                  param.value = datasObj[i].defValue
                }
              }
              param.name = datasObj[i].name
              param.type = datasObj[i].type
              datasArr.push(param)
            }
            var params = new URLSearchParams()
            params.append('sqlKey', sqlKey)
            params.append('datas', datasArr)
            //执行远程sql
            this.$http({
              method: 'post',
              url: '/doSql',
              data:params
            }).then((response)=> {
              if(response.data.length != 0){
                this.input = response.data[0].value == 'true' ? true:false
              }
            })
          }
          else if(configsEl.comSougnBaseAssemblySwitchConfigOption == 'data'){
            let localDataName = configsEl.comSougnBaseAssemblySwitchConfigValue
            //执行本地数据源
            if(this.$store.state.data.data[localDataName] && !this.$store.state.data.data[localDataName].value instanceof Array)
            {
              if(this.$store.state.data.data[localDataName].value == 'true' || this.$store.state.data.data[localDataName].value == true){
                this.input = true
              }else {
                this.input = false
              }
            }else{
              this.$message({
                message: '无法接受数组的配置值',
                type: 'success'
              });
            }
          }
        }else {
          //使用默认配置值
          this.input = configsEl.comSougnBaseAssemblySwitchDefInputValue
        }
        console.log(this.input == true)
        console.log(this.input == false)
        //数据绑定处理器
        return configsEl
      }
    },
    watch:{
      input:function (newVal , oldVal){
        let data = {
          name:this.config.comSougnBaseAssemblySwitchOutputValue,
          value:newVal
        }
        this.$store.dispatch('dataChange', data)

        this.input = newVal
      },
      config:function (newVal , oldVal){
        this.config = this.view(newVal)
      },
      data:function (newVal , oldVal){
        this.view(this.config)
      }
    },
    computed: {
      config: {
        get:function () {
          let configsEl = {}
          for(let i in this.configs.configs){
            configsEl[this.configs.configs[i].id] = this.configs.configs[i].value
          }
          return configsEl;
        },
        set:(v)=>{
          this.config = v;
        }
      },
      data:function (){
        return this.$store.state.data.data
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
