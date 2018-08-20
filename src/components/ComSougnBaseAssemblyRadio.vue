<template>
  <div>
    <el-radio-group v-model="output" :size="config.comSougnBaseAssemblyRadioSize" :disabled="config.comSougnBaseAssemblyRadioDisabled" :text-color="config.comSougnBaseAssemblyRadioTextColor" :fill="config.comSougnBaseAssemblyRadioFill">
      <el-radio :label="el.label" :border="config.comSougnBaseAssemblyRadioBorder" :size="config.comSougnBaseAssemblyRadioSize" v-for="el in input" :key="el.label">{{el.value}}</el-radio>
    </el-radio-group>
  </div>

</template>

<script>
  export default {
    name: 'Radio',
    props:['configs','parentId'],
    data () {
      return {
        //输出值
        output:'',
        //配置值
        input:[],
        //选中值
        choseValue:[]
      }
    },
    mounted () {
      this.config = this.view(this.config)
    },
    methods: {
      view:function(newVal){
        let configsEl = newVal
        //数据绑定处理器
        //使用配置项配置值
        if(configsEl.comSougnBaseAssemblyRadioConfigOption){
          if(configsEl.comSougnBaseAssemblyRadioConfigOption == 'sql'){
            let sqlKey = configsEl.comSougnBaseAssemblyRadioConfigValue
            let datasObj = eval(configsEl.comSougnBaseAssemblyRadioParameter)
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
                this.input = response.data
              }
            })
          }
          else if(configsEl.comSougnBaseAssemblyRadioConfigOption == 'data'){
            let localDataName = configsEl.comSougnBaseAssemblyRadioConfigValue
            //执行本地数据源
            if(this.$store.state.data.data[localDataName] && this.$store.state.data.data[localDataName].value instanceof Array)
            {
              this.input = this.$store.state.data.data[localDataName].value
            }else{
              this.$message({
                message: '无法接受除了数组以外的配置值',
                type: 'success'
              });
            }
          }

        }else{
          this.input = []
        }

        //使用默认配置值
        if(this.input.length == 0) {
          this.input = eval(configsEl.comSougnBaseAssemblyRadioDefInputValue)
        }
        //数据绑定处理器
        return configsEl
      }
    },
    watch:{
      output:function (newVal , oldVal){
        let value = {};
        for(let i in this.input){
          if(this.input[i].label == newVal){
            value = this.input[i]
          }
        }
        let data = {
          name:this.config.comSougnBaseAssemblyRadioOutputValue,
          value:value
        }
        this.$store.dispatch('dataChange', data)
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
