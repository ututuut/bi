<template>
  <div>
    <el-time-picker
      :readonly="config.comSougnBaseAssemblyTimePickerReadonly"
      :disabled="config.comSougnBaseAssemblyTimePickerDisabled"
      :editable="config.comSougnBaseAssemblyTimePickerEditable"
      :clearable="config.comSougnBaseAssemblyTimePickerClearable"
      :size="config.comSougnBaseAssemblyTimePickerSize"
      :placeholder="config.comSougnBaseAssemblyTimePickerPlaceholder"
      :start-placeholder="config.comSougnBaseAssemblyTimePickerStartPlaceholder"
      :end-placeholder="config.comSougnBaseAssemblyTimePickerEndPlaceholder"
      :align="config.comSougnBaseAssemblyTimePickerAlign"
      :range-separator="config.comSougnBaseAssemblyTimePickerRangeSeparator"
      :default-value="config.comSougnBaseAssemblyTimePickerDefaultValue"
      :prefix-icon="config.comSougnBaseAssemblyTimePickerPrefixIcon"
      :clear-icon="config.comSougnBaseAssemblyTimePickerClearIcon"
      is-range
      v-model="output"
      >
    </el-time-picker>
  </div>

</template>

<script>
  export default {
    name: 'TimePicker',
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
