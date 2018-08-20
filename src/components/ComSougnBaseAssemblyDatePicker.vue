<template>
  <div>
    <el-date-picker
      :readonly="config.comSougnBaseAssemblyDatePickerReadonly"
      :disabled="config.comSougnBaseAssemblyDatePickerDisabled"
      :editable="config.comSougnBaseAssemblyDatePickerEditable"
      :clearable="config.comSougnBaseAssemblyDatePickerClearable"
      :size="config.comSougnBaseAssemblyDatePickerSize"
      :placeholder="config.comSougnBaseAssemblyDatePickerPlaceholder"
      :start-placeholder="config.comSougnBaseAssemblyDatePickerStartPlaceholder"
      :end-placeholder="config.comSougnBaseAssemblyDatePickerEndPlaceholder"
      :type="config.comSougnBaseAssemblyDatePickerType"
      :format="config.comSougnBaseAssemblyDatePickerFormat"
      :align="config.comSougnBaseAssemblyDatePickerAlign"
      :range-separator="config.comSougnBaseAssemblyDatePickerRangeSeparator"
      :unlink-panels="config.comSougnBaseAssemblyDatePickerUnlinkPanels"
      :default-value="config.comSougnBaseAssemblyDatePickerDefaultValue"
      :prefix-icon="config.comSougnBaseAssemblyDatePickerPrefixIcon"
      :clear-icon="config.comSougnBaseAssemblyDatePickerClearIcon"
      v-model="output"
      >
    </el-date-picker>
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
