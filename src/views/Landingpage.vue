<template>
  <div class="landing relative container">
    <section class="sm:float-right sm:w-16">
      <Navigation></Navigation>
    </section>

    <section
      class="md:pt-56 md:ml-16 md:w-3/4 xl:ml-48 container mx-auto w-5/6 mt-20 sm:mt-0 font-bold"
    >
      <div class="md:pt-64">
        <h1 class="text-white md:text-4xl xl:text-5xl md:pt-48">
          WILLKOMMEN BEI DER TASKFORCE 47
        </h1>
        <div
          class="bg-white md:text-2xl xl:text-3xl w-auto inline-block px-1 font-light"
        >
          <h5>Die deutsche Arma 3 MilSim Community</h5>
        </div>
      </div>
    </section>
    <section>
      <Cards></Cards>
    </section>
    <section><AboutUs></AboutUs></section>
    <section><Socials></Socials></section>
    <section><FooterBar></FooterBar></section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";
import Cards from "@/components/Landingpage/Cards.vue";
import FooterBar from "@/components/Footer-Bar.vue";
import AboutUs from "@/components/Landingpage/AboutUs.vue";
import Socials from "@/components/Socials.vue";
@Component({
  components: {
    Socials,
    AboutUs,
    FooterBar,
    Navigation: Navigation,
    Cards: Cards
  }
})
export default class Landingpage extends Vue {}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .landing {
    background: url("./../assets/background-crop.jpg") no-repeat center top !important;
    height: 2979px;
    max-width: 1920px;
    h1 {
      font-size: 50pt;
    }
    h5 {
      font-size: 30pt;
    }
  }
}
</style>
