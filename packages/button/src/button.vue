<template>
<button class="btn-normal" @click="handleClick" :class="[`btn-${type}`,{
  'is-plain':plain,'is-round':round,'is-disabled':disabled
}]" >
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "PButton",
  props:{
    type:{
      type: String,
      default:''
    },
    plain:{
      type:Boolean,
      default: false
    },
    round:{
      type:Boolean,
      default: false
    },
    disabled:{
      type:Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="scss">
.btn-normal{
  display: inline-block;
  padding: 12px 20px;
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

@mixin btn-color($color,$bg-color,$br-color){
  color: $color;
  background: $bg-color;
  border-color: $br-color;
}

@mixin pseudo-class($color,$bc_hover,$bc_active){
  &:hover,
  &:focus {
    background: $bc_hover;
    border-color: $bc_hover;
    color: $color;
  }
  &:active{
    background: $bc_active;
    border-color: $bc_active;
    color: $color;
    outline: none;
  }
}


.btn-primary{
  @include btn-color(#fff,#409eff,#409eff);
  @include pseudo-class(#fff,#66b1ff,#3a8ee6)
}


.btn-success{
  @include btn-color(#fff,#67c23a,#67c23a);
  @include pseudo-class(#fff,#85ce61,#5daf34)
}

.btn-danger{
  @include btn-color(#fff,#f56c6c,#f56c6c);
  @include pseudo-class(#fff,#f78989,#dd6161)
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
  @include btn-color(#409eff,#ecf5ff,#b3d8ff);
  @include pseudo-class(#fff,#66b1ff,#3a8ee6)
}

.btn-success.is-plain{
  @include btn-color(#67c23a,#f0f9eb,#c2e7b0);
  @include pseudo-class(#fff,#85ce61,#5daf34)
}

.btn-danger.is-plain{
  @include btn-color(#fff,#f56c6c,#f56c6c);
  @include pseudo-class(#fff,#f78989,#dd6161)
}

//圆角
.btn-normal.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}

//禁用
.btn-normal.is-disabled {
  &{
    opacity: .7;
  }
  &:hover,
  &:focus {
    cursor: not-allowed;
    background-image: none;
  }
}






</style>
