<template>
    <svg class="icon" aria-hidden="true" :style="{color,'font-size':size+'px'}">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
import './iconfont.js'

export default {
  name: "PIcon",
  props: {
    name: {
      type: String,
    },
    size:{
      type:[Number,String],
      default:16,
    },
    color:{
      type:String,
      default: '#333'
    },
  },
  computed: {
    iconName() {
      return `#q-icon-${this.name}`
    }
  }
}
</script>

<style scoped>


.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
