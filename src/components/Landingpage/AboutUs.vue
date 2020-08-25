<template>
  <div id="about-us" class="mt-24 mx-4 xl:ml-48 sm:mt-180">
    <h1 class="bg-white w-fit px-1 text-5xl font-bold">ABOUT US</h1>
    <div class="flex flex-col xl:flex-row mt-6">
      <p
        class="bg-white about-text lg:p-3 px-1 lg:text-2xl md:text-xl text-2xl"
      >
        Der Name Task Force 47 existiert im Armaverse seit 7 Jahren, vormals ein
        Zusammenschluss aus verschiedenen kleinen Spielergruppen, ist es heute
        eine Community aus alten und neuen Mitgliedern die alle zusammen eine
        Task Force 47 bilden. Wir sind eine offene Community, jeder kann
        teilhaben und sich einbringen. Davon lebt unsere Community. Unsere
        Administrative gibt nur eine Richtung und Regeln vor, wie Ihr spielen
        möchtet entscheidet Ihr selbst! Zusammen mit täglich bis zu 60 Spielern
        bezwingen wir jeden Feind und dabei steht bei uns immer der Spaß im
        Vordergrund.
      </p>
      <img
        :src="logo"
        alt="TaskForce47 Logo"
        height="450px"
        width="450px"
        class="xl:ml-4 mt-4 lg:mt-0 sm:mx-auto"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class AboutUs extends Vue {
  public logo = require("@/assets/TF47_GER_100.svg");
}
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .about-text {
    height: 300px;
    width: 980px;
  }
}
</style>
