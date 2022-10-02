<template>
  <transition name="dialog-fade">
      <div class="p-dialog" v-show="visible" @click.self="visible=false" >
          <div class="p-dialog-con" style="margin-top: 15vh; width: 50%;">
              <div class="p-dialog-title">
                <span>hhhhh</span>
                <button @click="close">
                  <icon name="closeNo" />
                </button>
              </div>
              <div class="p-dialog-body">
                <slot></slot>
              </div>
              <div class="p-dialog-foot">
                  <slot name="foot"></slot>
              </div>
          </div>
      </div>
  </transition>
</template>

<script>
import icon from "../../icon";
export default {
  name: "PDialog",
  model:{
    prop: 'visible',
    event:'change'
  },
  props:{
    visible:{
      type:Boolean,
      default:false,
    },
    title:{
      type:String,
      default: null,
    },

  },
  components:{
   icon
 },
  data() {
    return {

    }
  },
  watch:{
    visible(val){
      console.log(val,'val-------')
      this.$emit('change',val)
    }
  },
  methods:{
    close(){
      this.$emit('cancel')
    },
  },

}
</script>

<style scoped lang="scss">

.dialog-fade-enter-active{
  animation: fade .3s;
}

.dialog-fade-leave-active {
  animation: fade .3s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}


.p-dialog{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);
}

.p-dialog-con{
  position: relative;
  margin: 0 auto 50px;
  background: #ffffff;
  border-radius: 2px;


  .p-dialog-title{
    padding: 20px 20px 10px;
    >span{
      line-height: 24px;
      font-size: 18px;
      color: #303133;
    }
    >button{
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
    }
  }

  .p-dialog-body{
    padding: 30px 20px;
  }

  .p-dialog-foot{
    padding: 10px 20px 20px;
    box-sizing: border-box;
  }


}

</style>
