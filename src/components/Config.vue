<template>
  <div style="position: relative;padding-top: 25px;">
    <ul class="slot">
      <li><div @click="deleteAssembly">D</div></li>
      <li><div style="position: relative"><span @click="edit = !edit">E</span>
        <div class="close-quick" v-if="edit"  @click="edit = !edit">

        </div>
        <div class="edit" v-if="edit">
          <div slot="config" class="config" >
            <el-form ref="form"  label-width="90px" size="mini">
              <div v-if="configs.length == 0">
                此组件无法配置
              </div>
              <div v-for="config in configs">
                <el-form-item :label="config.label">
                  <el-input v-model="config.value" v-if="config.type == 'text'"></el-input>
                  <el-switch
                    v-model="config.value"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    v-if="config.type == 'switch'">
                  </el-switch>
                  <el-input
                    type="textarea"
                    placeholder="请输入内容"
                    v-model="config.value"
                    v-if="config.type == 'textarea'"
                    autosize>
                  </el-input>
                  <el-color-picker
                    v-model="config.value"
                    v-if="config.type == 'color'"
                    size="mini"
                    show-alpha>
                  </el-color-picker>
                  <el-select  v-model="config.value"
                              v-if="config.type == 'select'"
                              size="mini"
                              clearable
                              placeholder="请选择">
                    <el-option
                      v-for="item in config.options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-form>

          </div>
        </div>
      </div>

      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'Config',
    props:['configs','id'],
    data () {
      return {
        edit: false
      }
    },
    mounted () {

    },
    methods: {
      deleteAssembly:function (){
        this.$store.commit('ASSEMBLY_DEL', this.id)
      }
    },
    watch: {
      configs:{
        handler:function(val, oldVal){
          let nowId = this.id
          this.$store.commit('ASSEMBLY_EDIT', {id:nowId,config:val})
        },
        deep: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .slot{
    position: absolute;
    right: 0px;
    top: 0px;
    margin: 0px;
    padding: 0px;
    z-index:777;
    li{
      list-style-type:none;
      width: 20px;
      height: 20px;
      float: right;
      border-radius: 100%;
      background-color: #eee;
      box-shadow: 0 -0px 10px rgba(0,0,0,.2);
      margin-right: 10px;
      border: 1px solid #ededed;
      cursor: pointer;
    }
  }
  .edit{
    position: absolute;
    width: 300px;
    height: auto;
    right: 0px;
    top: 30px;
    background-color: #fff;
    .config{
      box-shadow: 0 -0px 10px rgba(0,0,0,.2);
      border: 1px solid #ededed;
      border-radius: 3px;
    }
  }
  .close-quick{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(255,255,255,0);
  }
</style>
