<template>
  <div class="mx-auto container mt-56">
    <div id="man" class="z-50 lg:absolute lg:-mt-20 hidden lg:block "></div>
    <div class="lg:ml-40">
      <div id="why" class="w-fit bg-white sm:bg-transparent">
        <div class="lg:ml-32 sm:ml-20 lg:pt-6 sm:w-3/4 p-6 sm:p-0">
          <h3 class="font-bold underline text-3xl">
            Why Task Force 47 as a foreign player ?
          </h3>
          <p class="text-xl">
            You are looking for an ArmA 3 experience like no other? An unmatched
            mixture of fun and MilSim? Search no more! Stop by and tag along on
            our public server, you will not regret it. Since the very beginning
            of our community we have always had English speaking players from
            all nationalities around the world, some of which staying with us
            until today. Our set of modifications provides a great variety of
            nations to play with, be it British Forces, Spanish Forces or US
            Forces, we have something for everyone. We are looking forward to
            playing with you and make sure to check out our forums!
          </p>
        </div>
      </div>
      <div
        id="how"
        class="lg:ml-20 sm:mt-5 w-fit bg-white sm:bg-transparent mt-96"
      >
        <div
          class="lg:ml-12 sm:w-3/4 sm:ml-20 -mt-80 lg:-mt-80 xl:-mt-72 p-6 sm:p-0"
        >
          <h3 class="font-bold underline text-3xl">How does it work ?</h3>
          <p class="text-xl">
            Task Force 47 is an open community, we value the joy and fun of
            playing together over unnecessary ranks and procedures. So, how does
            it work? Simple, join our server via the official ArmA 3 Launcher,
            the required addons will be downloaded automatically. All you have
            to do is to install Task Force Radio Beta Plugin to your Teamspeak
            (Check our forums for the install guide!) and join our Teamspeak of
            course! If you need additional help in setting up your addons or
            Teamspeak plugin or encounter any problems on your way, ask one of
            our technical supporters on the Teamspeak for help!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class InfoInt extends Vue {}
</script>

<style scoped lang="scss">
@media (min-width: 768px) {
  #why {
    border-bottom: 20rem solid white;
    border-right: 100px solid transparent;
    height: 325px;
  }
  #how {
    border-top: 20rem solid white;
    border-right: 100px solid transparent;
    height: 325px;
  }
  #man {
    background: url("./../../assets/international/typ_01_mk17.png") no-repeat;
    height: 867px;
    width: 322px;
  }
}
</style>
