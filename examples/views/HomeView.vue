<template>
  <div class="home">
<!--    <p-button type="primary" round plain disabled>hh</p-button>-->
<!--    <p-input clearable placeholder="请输入" v-model="val"></p-input>-->
<!--    <p-icon name="close" @click="get"></p-icon>-->
    <p-input clearable placeholder="请输入" v-model="val"></p-input>
  </div>
</template>

<script>


import p_icon from '../../packages/icon'
import PInput from "../../packages/input";
export default {
  name: 'HomeView',
  data() {
    return {
      val:'',
    }
  },
  components:{
    'p-icon':p_icon,
    PInput
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
