<template>
  <div>
    <el-time-select
      :readonly="config.comSougnBaseAssemblyTimeSelectReadonly"
      :disabled="config.comSougnBaseAssemblyTimeSelectDisabled"
      :editable="config.comSougnBaseAssemblyTimeSelectEditable"
      :clearable="config.comSougnBaseAssemblyTimeSelectClearable"
      :size="config.comSougnBaseAssemblyTimeSelectSize"
      :placeholder="config.comSougnBaseAssemblyTimeSelectPlaceholder"
      :align="config.comSougnBaseAssemblyTimeSelectAlign"
      :range-separator="config.comSougnBaseAssemblyTimeSelectRangeSeparator"
      :default-value="config.comSougnBaseAssemblyTimeSelectDefaultValue"
      :prefix-icon="config.comSougnBaseAssemblyTimeSelectPrefixIcon"
      :clear-icon="config.comSougnBaseAssemblyTimeSelectClearIcon"
      :picker-options = "config.comSougnBaseAssemblyTimeSelectPickerOptions"
      v-model="output">
    </el-time-select>
  </div>

</template>

<script>
  export default {
    name: 'TimeSelect',
    props:['configs','parentId'],
    data () {
      return {
        output:''
      }
    },
  mounted () {
    this.config = this.view(this.config)
  },
  methods: {
    view:function(newVal){
      let configsEl = newVal
      return configsEl
    }
  },
  watch:{
    output:function (newVal , oldVal){
      let value = {};
      let data = {
        name:newVal,
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
          if(this.configs.configs[i].id == 'comSougnBaseAssemblyTimeSelectPickerOptions'){
            console.log(this.configs.configs[i].value)
            configsEl[this.configs.configs[i].id] = JSON.parse(this.configs.configs[i].value)
          }else{
            configsEl[this.configs.configs[i].id] = this.configs.configs[i].value
          }
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
