import Vue from 'vue'
import vuex from 'vuex'
import VCharts from 'v-charts'
import canvas from './stage/canvas.js'
import type from './stage/type.js'
import data from './stage/data.js'

Vue.use(vuex)
Vue.use(VCharts)

export default new vuex.Store({
  modules: {
    canvas: canvas,
    type: type,
    data: data
  }
})
