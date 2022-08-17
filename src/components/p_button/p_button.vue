<template>
<button class="btn-normal" :class="`btn-${type}`">
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
    color: #ffffff;
    outline: none;
  }
}



</style>
