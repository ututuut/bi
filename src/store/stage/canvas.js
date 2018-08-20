export default {
  state: {
    canvas: {
      config: [ //画布基础布局
        {
          id:'com-sougn-base-001',
          value: '100%',
          help:'www.baidu.com',
          type:'text',
          label:'画布宽度'
        },{
          id:'com-sougn-base-002',
          value: '800px',
          help:'www.baidu.com',
          type:'text',
          label:'画布高度'
        },{
          id:'com-sougn-base-003',
          value: 'rgba(19, 206, 102, 0.8)',
          help:'www.baidu.com',
          type:'color',
          label:'画布背景色'
        },{
          id:'canvasState',
          value: true,
          help:'www.baidu.com',
          type:'switch',
          label:'画布状态'
        }
        // ,{
        //   id:'com-sougn-base-004',
        //   value: '。。。。。',
        //   help:'www.baidu.com',
        //   type:'text',
        //   label:'画布图'
        // }
      ],
      content: {
          type: 'layout',
          id: 'canvas',//组件的唯一主键
          haveSlot: true,//是否拥有子组件
          config: {//当前组件的配置

          },
          child: [//子组件
          ]
        }
    }
  },
  mutations: {
    CANVAS_ADD(state , assembly){
      //给画布修改样式
      state.canvas.content.child.push(assembly);
      //state.show = state.show?false:true;
      //你还可以在这里执行其他的操作改变state
    },
    ASSEMBLY_ADD(state , assembly ){
      //在子组件中添加
      if(assembly.parentId == "canvas"){
        state.canvas.content.child.push(assembly);
      }else{
        findAssemblyAdd(assembly.parentId , assembly , state.canvas.content.child)
      }
    },
    ASSEMBLY_DEL(state , id){
      if(id== "canvas"){
        console.log("基础画布，不允许删除");
        return ;
      }else{
        findAssemblyDel(id,state.canvas.content.child)
      }
    },
    ASSEMBLY_EDIT(state , configs){
      let id = configs.id
      let config = configs.config
      findAssemblyEdit(id,config,state.canvas.content.child)
      state.canvas = Object.assign({},state.canvas)
    }
  },
  actions:{
    switch_dialog(context){//这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('switch_dialog');
      //你还可以在这里触发其他的mutations方法
    },
  },
  getters:{

  }
}
function findAssemblyAdd(id , assembly , childs){
  for(let i in childs){
    if(childs[i].id == id){
      childs[i].childs.push(assembly);
      return ;
    }else{
      findAssemblyAdd(id , assembly , childs[i].childs)
    }
  }
}

function findAssemblyDel(id,childs){
  for(let i in childs){
    if(childs[i].id == id){
      childs.splice(i,1);
      return ;
    }else{
      findAssemblyDel(id,childs[i].childs)
    }
    if(childs[i].type == 'com-sougn-base-layout-row' && childs[i].childs.length == 0){
      childs.splice(i,1);
    }
  }
}

function findAssemblyEdit(id , childs , configs){
  for(let i in childs){
    if(childs[i].id == id){
      childs.configs=configs
      return ;
    }else{
      findAssemblyEdit(id,childs[i].childs,configs)
    }
  }
}
