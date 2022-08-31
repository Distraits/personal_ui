<template>
  <div class="input-box">
    <input
        class="input-normal"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleInput"
    />

    <span
        v-if="clearable && value"
        class="clear" @click="clear">
        <icon
            name="close"
            color="#c0c4cc"
        />
    </span>



  </div>
</template>

<script>
import icon from "../../icon";
export default {
  name: "PInput",
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
  components:{
    icon
  },
  methods:{
    handleInput(e){
      this.$emit("input", e.target.value);
    },
    clear(){
      console.log('------')
      this.$emit("input", '');
    },

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
  height: 100%;
  top: 0;
  right: 12px;
  line-height: 40px;
  transition: all 0.3s;
  text-align: center;
  cursor: pointer;
}


</style>
