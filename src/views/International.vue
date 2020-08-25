<template>
  <div class="international relative container">
    <section class="sm:float-right sm:w-16"><Navigation></Navigation></section>
    <section
      class="md:pt-56 md:ml-16 md:w-3/4 xl:ml-48 container mx-auto w-5/6 mt-20 sm:mt-0 font-bold"
    >
      <div class="md:pt-64">
        <h1 class="text-white md:text-4xl xl:text-5xl md:pt-48">
          WELCOME TO TASKFORCE 47
        </h1>
        <div
          class="bg-white md:text-2xl xl:text-3xl w-auto inline-block px-1 font-light"
        >
          <h5>INTERNATIONAL ONBOARDING GUIDE</h5>
        </div>
      </div>
    </section>
    <section><InfoInt></InfoInt></section>
    <section><CardsInt></CardsInt></section>
    <section><AboutUsInt></AboutUsInt>u</section>
    <section><Socials></Socials></section>
    <FooterBar></FooterBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";
import FooterBar from "@/components/Footer-Bar.vue";
import AboutUsInt from "@/components/International/AboutUsInt.vue";
import CardsInt from "@/components/International/CardsInt.vue";
import InfoInt from "@/components/International/InfoInt.vue";
import Socials from "@/components/Socials.vue";
@Component({
  components: { Socials, InfoInt, CardsInt, AboutUsInt, FooterBar, Navigation }
})
export default class International extends Vue {}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .international {
    background: url("./../assets/background-international.jpg") no-repeat center
      top !important;
    height: 3040px;
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
