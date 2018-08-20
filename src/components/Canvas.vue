<template>
  <div>
    <div  class="base-config">
      <span @click="edit = !edit" class="edit-canvas">画布设置</span>
      <div class="edit" v-if="edit">
        <div slot="config" class="config" >
          <el-form ref="form"  label-width="90px" size="mini">
            <div v-for="canvasConfig in this.$store.state.canvas.canvas.config">
              <el-form-item :label="canvasConfig.label" v-if="canvasConfig.type == 'text'">
                <el-input v-model="canvasConfig.value"></el-input>
              </el-form-item>
              <el-form-item :label="canvasConfig.label" v-if="canvasConfig.type == 'color'">
                <el-color-picker v-model="canvasConfig.value" show-alpha style="z-index: 9999;" size="mini"></el-color-picker>
              </el-form-item>
              <el-form-item :label="canvasConfig.label" v-if="canvasConfig.type == 'switch'">
                <el-switch
                  v-model="canvasConfig.value"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  style="z-index: 9999;"
                  size="mini">
                </el-switch>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </div>
      <span @click="data = !data" class="data-canvas">数据源</span>
      <div class="edit" v-if="data">
        <div slot="config" class="config" >
          <el-form ref="form" label-width="100px" size="mini">
            <div v-for="data in $store.state.data.data" :key="data.name">
              数据源：{{data.name}}
              默认值：{{data.defData}}
              <span @click="dataDel(data.name)">删除</span>
            </div>
            <el-form-item label="数据名称">
              <el-input v-model="dataName"></el-input>
            </el-form-item>
            <el-form-item label="默认值">
              <el-input v-model="defData" type="textarea"></el-input>
            </el-form-item>
            <el-button type="info" size="mini" @click="addData">添加数据</el-button>
          </el-form>
        </div>
      </div>
    </div>
    <div v-bind:style="{ width: config.width, height: config.height, backgroundColor: config.backgroundColor }">
      <com-sougn-base-bi v-bind:childs="this.$store.state.canvas.canvas.content.child" :parentId="this.$store.state.canvas.canvas.content.id"></com-sougn-base-bi>
    </div>
  </div>
</template>

<script>
  import ComSougnBaseBi from './ComSougnBaseBi'

  export default {
    name: 'Canvas',
    components: {
      ComSougnBaseBi: ComSougnBaseBi
    },
    data () {
      return {
        edit: false,
        addSlort: false,
        data: false,
        dataName:'',
        defData:''
      }
    },
    mounted () {

    },
    methods: {
      canvasAdd: function (type){
        let assembly = {
          id: new Date().getTime(),
          type: type
        }
        this.$store.commit('CANVAS_ADD',assembly);
      },
      addData: function (){
        let data = {
          name:this.dataName,
          value:'',
          defData:this.defData
        }
        this.$store.commit('DATA_ADD',data);
        this.dataName = ''
        this.defData = ''
      },
      dataDel: function (dataName){
        this.$store.commit('DATA_DEL',dataName);
      }
    },
    computed: {
      config: function () {
        let stateCanvas = this.$store.state.canvas.canvas;
        let config = {
          width : '',
          height : '',
          backgroundColor : ''
        }
        for(let i in stateCanvas.config){
          if(stateCanvas.config[i].id === 'com-sougn-base-001'){
            config.width = stateCanvas.config[i].value
          }
          if(stateCanvas.config[i].id === 'com-sougn-base-002'){
            config.height = stateCanvas.config[i].value
          }
          if(stateCanvas.config[i].id === 'com-sougn-base-003'){
            config.backgroundColor = stateCanvas.config[i].value
          }
        }
        return config
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .edit{
    position: absolute;
    width: 300px;
    height: auto;
    right: 10px;
    top: 30px;
    background-color: #fff;
    z-index: 77;
    .config{
      box-shadow: 0 -0px 10px rgba(0,0,0,.2);
      border: 1px solid #ededed;
      border-radius: 3px;
      padding:20px 10px;
      box-sizing:box-size;
      &:after{
        content:"";
        clear:both;
        display:block;
      }
    }
  }
  .edit-canvas{
    cursor: pointer;
    position: fixed;
    top: 0px;
    right: 0px;
  }
  .data-canvas{
    cursor: pointer;
    position: fixed;
    top: 0px;
    right: 80px;
  }
  .base-config{
    height: 30px;
    width: 100%;
  }

</style>
