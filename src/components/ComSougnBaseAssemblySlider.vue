<template>
  <div>
    <el-slider v-model="output"
               :min="parseInt(config.comSougnBaseAssemblySliderMin)"
               :max="parseInt(config.comSougnBaseAssemblySliderMax)"
               :disabled="config.comSougnBaseAssemblySliderDisabled"
               :step="parseInt(config.comSougnBaseAssemblySliderStep)"
               :show-input="config.comSougnBaseAssemblySliderShowInput"
               :show-input-controls="config.comSougnBaseAssemblySliderShowInputControls"
               :input-size="config.comSougnBaseAssemblySliderInputSize"
               :show-stops="config.comSougnBaseAssemblySliderShowStops"
               :show-tooltip="config.comSougnBaseAssemblySliderShowTooltip"
               :range="config.comSougnBaseAssemblySliderRange"
               :vertical="config.comSougnBaseAssemblySliderVertical"
               :height="config.comSougnBaseAssemblySliderHeight"></el-slider>
  </div>

</template>

<script>
  export default {
    name: 'Slider',
    props:['configs','parentId'],
    data () {
      return {
        output:0,
        input:[]
      }
    },
    mounted () {

    },
    methods: {

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
          name:this.config.comSougnBaseAssemblySliderOutputValue,
          value:value
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
        let dataName = configsEl.comSougnBaseAssemblySliderInputBind
        if(this.$store.state.data.data[dataName] == undefined){
          this.input = eval(configsEl.comSougnBaseAssemblySliderDefInputValue)
        }else{
          this.input = this.$store.state.data.data[dataName].value
        }
        return configsEl
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
