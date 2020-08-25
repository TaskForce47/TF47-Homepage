<template>
  <div class="w-full mt-48 sm:mt-16 container">
    <div class="flex flex-wrap -mx-5 overflow-hidden md:-mx-2 lg:-mx-4">
      <div
        class="my-5 px-5 w-full overflow-hidden md:my-2 md:px-2 md:w-1/3 lg:my-4 lg:px-4"
      >
        <div class="bg-white px-4 py-2 m-6 card">
          <h1 class="font-bold text-2xl text-center">EVENTS & FORUM</h1>
          <h3
            class="bg-black text-white w-fit lg:px-2 px-2 sm:px-0 lg:text-lg mx-auto"
          >
            www.forum.taskforce47.com
          </h3>
        </div>
      </div>

      <div
        class="my-5 px-5 w-full overflow-hidden md:my-2 md:px-2 md:w-1/3 lg:my-4 lg:px-4"
      >
        <div class="bg-white px-4 py-2 m-6 card">
          <h1 class="font-bold text-2xl text-center">PUBLIC SERVER #1</h1>
          <h3
            class="bg-black text-white w-fit lg:px-2 px-2 sm:px-0 lg:text-lg mx-auto"
          >
            server.taskforce47.com:2302
          </h3>
        </div>
      </div>

      <div
        class="my-5 px-5 w-full overflow-hidden md:my-2 md:px-2 md:w-1/3 lg:my-4 lg:px-4"
      >
        <div class="bg-white px-4 py-2 m-6 card">
          <h1 class="font-bold text-2xl text-center">TEAMSPEAK</h1>
          <h3
            class="bg-black text-white w-fit px-2 lg:text-lg mx-auto sm:mt-8 lg:mt-0"
          >
            ts3.taskforce47.com
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CardsInt extends Vue {}
</script>

<style scoped lang="scss">
.card {
  max-width: 400px;
  min-height: 112px;
}
@media (min-width: 992px) {
  .card {
    min-height: unset;
  }
}
</style>
