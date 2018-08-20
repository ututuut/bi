<template>
  <div>
    <el-input v-model="output" :placeholder="config.comSougnBaseAssemblyInputTextPlaceholder" :maxlength="config.comSougnBaseAssemblyInputTextMaxlength" :minlength="config.comSougnBaseAssemblyInputTextMinlength" :size="config.comSougnBaseAssemblyInputTextSize" :prefix-icon="config.comSougnBaseAssemblyInputTextPrefixIcon" :suffix-icon="config.comSougnBaseAssemblyInputTextSuffixIcon" :auto-complete="config.comSougnBaseAssemblyInputTextAutoComplete" :clearable="config.comSougnBaseAssemblyInputTextClearable" :disabled="config.comSougnBaseAssemblyInputTextDisabled" :type="config.comSougnBaseAssemblyInputTextType" :readonly="config.comSougnBaseAssemblyInputTextReadonly" :autofocus="config.comSougnBaseAssemblyInputTextAutofocus"></el-input>
  </div>

</template>

<script>
  export default {
    name: 'InputText',
    props:['configs','parentId'],
    data () {
      return {
        output:'',
        input:''
      }
    },
    mounted () {

    },
    methods: {

    },
    watch:{
      output:function (newVal , oldVal){
        console.log(this.config.comSougnBaseAssemblyInputTextValue)
        let data = {
          name:this.config.comSougnBaseAssemblyInputTextValue,
          value:newVal
        }
        this.$store.dispatch('dataChange', data)
      }
    },
    computed: {
      config: function () {
        let configsEl = {}
        for(let i in this.configs.configs){
          configsEl[this.configs.configs[i].id] = this.configs.configs[i].value
        }

        return configsEl
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
