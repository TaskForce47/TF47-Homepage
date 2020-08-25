<template>
  <div id="about-us" class="mt-24 mx-4 xl:ml-48 sm:mt-120 md:132">
    <h1 class="bg-white w-fit px-1 text-5xl font-bold">ABOUT US</h1>
    <div class="flex flex-col xl:flex-row mt-6">
      <p
        class="bg-white about-text lg:p-3 px-1 lg:text-2xl md:text-xl text-2xl"
      >
        The name Task Force 47 has been around the ArmAverse for roughly 7 years
        now, starting out as an union of multiple small ArmA units, it has grown
        to become the biggest german ArmA community in times of ArmA 2. In ArmA
        3 we had a rough start, however since 2019 we are back at the top to
        provide the best MilSim public server experience in Europe. We are an
        open community, everyone can join us and contribute to our public
        server. We have a simple set of rules to follow and live by, however its
        up to you to create your experience together with upto 60 other players
        daily!
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
export default class AboutUsInt extends Vue {
  public logo = require("@/assets/TF47_GER_100.svg");
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .about-text {
    height: 300px;
    width: 980px;
  }
}
</style>
