<template>
  <div class="input-box">
    <input
        class="input-normal"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleInput"
    >
    <icon
        v-if="clearable && value"
        @click="clear"
        class="clear"
        data="@icon/close.svg"
        color="#c0c4cc"/>
  </div>
</template>

<script>
export default {
  name: "p_input",
  props:{
    value: {
      type: [String, Number],
      default: "",
    },
    type:{
      type: String,
      default:'text',
    },
    placeholder:{
      type: String,
      default:'',
    },
    clearable:{
      type:Boolean,
      default: false
    },
    disabled:{
      type:Boolean,
      default: false
    }
  },
  methods:{
    handleInput(e){
      this.$emit("input", e.target.value);
    },
    clear(){
      this.$emit("input", '');
    }
  }
}
</script>

<style scoped lang="scss">
.input-box{
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
}

.input-normal{
  width: 100%;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color .2s;
  &:hover{
    border-color: #c0c4cc;
  }
  &:focus{
    border-color: #409eff;
  }
}

.clear{
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
}


</style>
