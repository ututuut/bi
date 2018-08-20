<template>
  <center>
    <div v-bind:style="{ width: config.comSougnBaseLayoutCenterWidth, height: config.comSougnBaseLayoutCenterHeight, background: config.comSougnBaseLayoutCenterBackground, padding: config.comSougnBaseLayoutCenterPadding , margin: config.comSougnBaseLayoutCenterMargin ,border: config.comSougnBaseLayoutCenterBorder}" class="center">
      <com-sougn-base-bi v-bind:childs="configs.childs" :parentId="configs.id"></com-sougn-base-bi>
    </div>
  </center>

</template>

<script>
  export default {
    name: 'ComSougnBaseLayoutCenter',
    props:['configs','parentId'],
    data () {
      return {

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
        return configsEl
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
