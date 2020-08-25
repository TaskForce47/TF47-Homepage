<template>
  <router-view></router-view>
</template>
<style lang="scss">
html {
  background-color: black;
  font-family: "Oswald", sans-serif !important;
}
a:hover {
  color: #808080;
}
img {
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
<script>
import { Component, Vue } from "vue-property-decorator";
@Component
export default class AppVue extends Vue {}
</script>
