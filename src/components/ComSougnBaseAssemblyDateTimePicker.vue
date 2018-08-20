<template>
  <div>
    <el-date-picker
      :readonly="config.comSougnBaseAssemblyDateTimePickerReadonly"
      :disabled="config.comSougnBaseAssemblyDateTimePickerDisabled"
      :editable="config.comSougnBaseAssemblyDateTimePickerEditable"
      :clearable="config.comSougnBaseAssemblyDateTimePickerClearable"
      :size="config.comSougnBaseAssemblyDateTimePickerSize"
      :placeholder="config.comSougnBaseAssemblyDateTimePickerPlaceholder"
      :start-placeholder="config.comSougnBaseAssemblyDateTimePickerStartPlaceholder"
      :end-placeholder="config.comSougnBaseAssemblyDateTimePickerEndPlaceholder"
      :type="config.comSougnBaseAssemblyDateTimePickerType"
      :format="config.comSougnBaseAssemblyDateTimePickerFormat"
      :align="config.comSougnBaseAssemblyDateTimePickerAlign"
      :range-separator="config.comSougnBaseAssemblyDateTimePickerRangeSeparator"
      :unlink-panels="config.comSougnBaseAssemblyDateTimePickerUnlinkPanels"
      :default-value="config.comSougnBaseAssemblyDateTimePickerDefaultValue"
      :prefix-icon="config.comSougnBaseAssemblyDateTimePickerPrefixIcon"
      :clear-icon="config.comSougnBaseAssemblyDateTimePickerClearIcon"
      v-model="output">
    </el-date-picker>
  </div>

</template>

<script>
  export default {
    name: 'TimePicker',
    name: 'DateTimePicker',
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
