<template>
  <section class="navigation md:w-16 md:mt-56 sm:float-right sm:fixed">
    <div class="">
      <div class="flex sm:flex-col text-white justify-around ">
        <div class="text-center text-2xl py-1 m-1 tooltip">
          <router-link to="/" aria-label="Link zur Startseite"
            ><font-awesome-icon :icon="['fas', 'home']"
          /></router-link>
          <span
            class="tooltip-text bg-black border border-gray-500 text-white rounded -ml-32"
            >Home</span
          >
        </div>
        <div class="text-center text-2xl py-1 m-1 tooltip">
          <router-link
            :to="{ path: '/#about-us' }"
            aria-label="Link zu Ueber uns"
          >
            <font-awesome-icon :icon="['fas', 'info-circle']" />
          </router-link>
          <span
            class="tooltip-text bg-black border border-gray-500 text-white rounded -ml-40"
            >About Us</span
          >
        </div>
        <div class="text-center text-2xl py-1 m-1 tooltip">
          <a
            href="https://forum.taskforce47.com/topic/115/regeln-änderungen"
            aria-label="Link zu den Regeln"
            ><font-awesome-icon :icon="['fas', 'book-open']"
          /></a>
          <span
            class="tooltip-text bg-black border border-gray-500 text-white rounded -ml-32"
          >
            Rules
          </span>
        </div>
        <div class="text-center text-2xl py-1 m-1 tooltip">
          <a href="https://forum.taskforce47.com" aria-label="Link zum Forum">
            <font-awesome-icon :icon="['fas', 'comments']" />
          </a>
          <span
            class="tooltip-text bg-black border border-gray-500 text-white rounded -ml-32"
            >Forum</span
          >
        </div>
        <div class="text-center text-2xl py-1 m-1 tooltip">
          <a href="https://gadget.taskforce47.com">
            <font-awesome-icon :icon="['fas', 'cog']" />
          </a>
          <span
            class="tooltip-text bg-black border border-gray-500 text-white rounded -ml-32"
            >Gadget</span
          >
        </div>
        <div class="text-center text-2xl py-1 md:mx-auto my-4 tooltip">
          <router-link
            :to="{ path: '/international' }"
            aria-label="Link zu International"
          >
            <img :src="ukPic" alt="Flagge des Vereinigten Königreiches" />
          </router-link>
          <span
            class="tooltip-text bg-black border border-gray-500 text-white rounded -ml-40 -mt-6"
            >International</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Navigation extends Vue {
  public ukPic = require("@/assets/uk.png");
}
</script>

<style scoped>
.navigation {
  background-color: rgba(0, 0, 0, 0.85);
}

.tooltip .tooltip-text {
  visibility: hidden;
  text-align: center;
  padding: 2px 6px;
  position: absolute;
  z-index: 100;
}
.tooltip:hover .tooltip-text {
  visibility: visible;
}
</style>
