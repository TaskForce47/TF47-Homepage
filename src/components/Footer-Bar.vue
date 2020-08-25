<template>
  <div class=" bottom-0 text-white w-full px-5 pb-5 text-xl pt-5">
    <div class="flex flex-col items-center sm:flex-row">
      <div class="flex-initial px-2 cursor-pointer">
        <router-link to="/impressum" aria-label="Link zum Impressum"
          >IMPRESSUM</router-link
        >
      </div>
      <div class="flex-initial px-2 cursor-pointer">
        <router-link to="/datenschutz" aria-label="Link zum Datenschutz"
          >DATENSCHUTZ</router-link
        >
      </div>
      <div class="sm:right-0 sm:absolute sm:mr-5">
        © 2020 TASK FORCE 47
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class FooterBar extends Vue {}
</script>

<style scoped></style>
