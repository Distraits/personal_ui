<template>
<button class="btn-normal" :class="[`btn-${type}`,{
  'is-plain':plain
}]" >
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "p_button",
  props:{
    type:{
      type: String,
      default:''
    },
    plain:{
      type:Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.btn-normal{
  display: inline-block;
  padding: 12px 40px;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  line-height: 1;
  white-space: nowrap;
  box-sizing: border-box;
  outline: none !important;
  &:hover,&:focus{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
}

.btn-primary{
  color: #fff;
  background: #409eff;
  border-color: #dcdfe6;
  &:hover,&:focus{
    color: #ffffff;
    border-color: #66b1ff;
    background-color: #66b1ff;
  }
  &:active {
    border-color: #3a8ee6;
    background-color: #3a8ee6;
    color: #ffffff;
    outline: none;
  }
}


.btn-success{
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  &:active{
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
  }
}

.btn-danger{
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  &:active{
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
  }
}




//朴素按钮
.btn-normal.is-plain{
  &:hover,&:focus{
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
  }
}


.btn-primary.is-plain{
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}

.btn-success.is-plain{
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}




</style>
