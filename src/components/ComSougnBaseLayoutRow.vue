<template>
  <div>
    <el-row>
      <el-col :span="parseInt(child.configs)"  v-for="child in configs.childs">
        <com-sougn-base-bi v-bind:childs="child.childs" :parentId="child.id"></com-sougn-base-bi>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'ComSougnBaseLayoutRow',
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

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
