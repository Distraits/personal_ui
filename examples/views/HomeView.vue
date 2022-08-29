<template>
  <div class="home">
<!--    <p-button type="primary" round plain disabled>hh</p-button>-->
    <p-input clearable placeholder="请输入" v-model="val"></p-input>
  </div>
</template>

<script>

import p_button from "../components/p_button/p_button";
import p_input from "@/components/p_input/p_input";
export default {
  name: 'HomeView',
  data() {
    return {
      val:'',
    }
  },
  components:{
    'p-button':p_button,
    'p-input':p_input,
  },

  mounted() {

  },
  methods:{

  }
}
</script>
