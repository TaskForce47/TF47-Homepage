<template>
  <div class="pb-20 xl:mx-0 md:mx-56 mx-5 mt-20 xl:mt-5 xl:w-fit">
    <div class="bg-white xl:h-16 h-fit xl:mt-5 socials xl:ml-48">
      <div
        class="flex xl:flex-row flex-col xl:text-4xl text-2xl pt-3 text-center xl:text-left"
      >
        <h1
          class="font-bold text-2xl underline xl:no-underline pl-5 pr-6 pb-4 xl:pb-0 text-3xl -mt-1"
        >
          Follow us:
        </h1>
        <a
          class="py-3 xl:px-3"
          href="https://www.instagram.com/taskforce_47/"
          aria-label="Link zum Instagram Profil der TaskForce47"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" />
          <span class="ml-2 xl:ml-0 xl:hidden">Instagram</span>
        </a>
        <a
          class="py-3 xl:px-3"
          href="https://www.youtube.com/user/TaskForce47Community"
          aria-label="Link zum YouTube Kanal der TaskForce47"
        >
          <font-awesome-icon :icon="['fab', 'youtube']" />
          <span class="ml-2 xl:ml-0 xl:hidden">Youtube</span>
        </a>
        <a
          class="py-3 xl:px-3"
          href="https://www.twitch.tv/tf_47"
          aria-label="Link zum Twitch Kanal der TaskForce47"
        >
          <font-awesome-icon :icon="['fab', 'twitch']" />
          <span class="ml-2 xl:ml-0 xl:hidden">Twitch</span>
        </a>
        <a
          class="py-3 xl:px-3"
          href="https://discord.gg/w5GKzbr"
          aria-label="Link zum Discord der TaskForce47"
        >
          <font-awesome-icon :icon="['fab', 'discord']" />
          <span class="ml-2 xl:ml-0 xl:hidden">Discord</span>
        </a>
        <a
          class="py-3 xl:px-3"
          href="https://twitter.com/TaskForce_47"
          aria-label="Link zum Twitter Profil der TaskForce47"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <span class="ml-2 xl:ml-0 xl:hidden">Twitter</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Socials extends Vue {}
</script>

<style lang="scss" scoped>
.socials {
  a {
    margin-top: -1.25rem;
  }
}
</style>
