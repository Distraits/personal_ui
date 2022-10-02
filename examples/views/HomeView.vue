<template>
  <div class="home">
    <p-button type="primary" round plain  @click="visible=true">hh</p-button>
<!--    <p-input clearable placeholder="请输入" v-model="val"></p-input>-->
<!--    <p-icon name="close" @click="get"></p-icon>-->
    <p-input clearable placeholder="请输入" v-model="val"></p-input>
    <p-p-p-dialog
        v-model="visible"
        title="哈哈哈哈"
        @cancel="visible=false"
    >
      红红火火恍恍惚惚或
      <div slot="foot">
        <p-button type="primary"  plain >hh</p-button>
        <p-button type="primary"  plain >hh</p-button>
      </div>
    </p-p-p-dialog>
  </div>
</template>

<script>

import PButton from '../../packages/button'
import p_icon from '../../packages/icon'
import PInput from "../../packages/input";
import PPPDialog from "../../packages/dialog"
export default {
  name: 'HomeView',
  data() {
    return {
      val:'',
      visible:false,
    }
  },
  components:{
    'p-icon':p_icon,
    PInput,
    PPPDialog,
    PButton
  },

  mounted() {

  },
  methods:{
    get(){
      console.log('==-==--=')
    }
  }
}
</script>
