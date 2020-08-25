<template>
  <div class="w-full mt-48 sm:mt-48 container">
    <div class="flex flex-wrap -mx-5 overflow-hidden md:-mx-2 lg:-mx-4">
      <div
        class="my-5 px-5 w-full overflow-hidden md:my-2 md:px-2 md:w-1/3 lg:my-4 lg:px-4"
      >
        <div class="bg-white px-4 py-2 m-6 card">
          <h1 class="font-bold text-2xl">EVENTS & FORUM</h1>
          <h3 class="bg-black text-white w-fit lg:px-2 px-2 sm:px-0 lg:text-lg">
            www.forum.taskforce47.com
          </h3>
          <img
            :src="eventPic"
            alt="Gruppe Soldaten laufend auf Rosche"
            class="card-pic my-3 md:hidden lg:block"
          />
          <p class="h-48 lg:h-56 md:mt-3 lg:mt-0 text-justify w-full">
            Schau in unserem Forum vorbei und sei immer auf dem Laufenden! Im
            Forum findest Du unsere Events und kannst Dich auch direkt anmelden.
            Daneben findest Du hier immer die aktuellen Neuigkeiten und
            Änderungen, zusammengefasst in unseren Changelogs. Hier kannst Du
            auch Wünsche und Ideen mit uns und der Community teilen und
            diskutieren.
          </p>
          <div class="flex justify-center mt-16 md:mt-48 lg:mt-8 xl:mt-4">
            <a
              href="https://forum.taskforce47.com"
              class="bg-black text-white px-3 py-1 text-xl cursor-pointer font-bold"
            >
              ZUM FORUM <font-awesome-icon :icon="['fas', 'comments']" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="my-5 px-5 w-full overflow-hidden md:my-2 md:px-2 md:w-1/3 lg:my-4 lg:px-4"
      >
        <div class="bg-white px-4 py-2 m-6 card">
          <h1 class="font-bold text-2xl">PUBLIC SERVER #1</h1>
          <h3 class="bg-black text-white w-fit lg:px-2 px-2 sm:px-0 lg:text-lg">
            server.taskforce47.com:2302
          </h3>

          <img
            :src="pubPic"
            alt="Gruppe Soldaten stehend"
            class="card-pic my-3 md:hidden lg:block"
          />
          <p class="h-48 lg:h-56 md:mt-3 lg:mt-0 text-justify w-full">
            Wolltest Du nicht auch schon immer Mal die Welt erobern? Komm mit
            auf unser virtuelles Schlachtfeld und erobere mit Deinen Freunden
            die verschiedenen Karten des Armaverse! Unser umfangreiches Modset
            bietet vielseitiges und realistisches Gameplay. Dabei haben Taktik
            und Spaß den Vorrang, ob mit völlig Fremden oder in Deiner Clique,
            hier bist Du stets willkommen!
          </p>
          <div class="flex justify-center mt-16 md:mt-48 lg:mt-8 xl:mt-4">
            <a
              href="steam://connect/116.202.164.243:2302"
              class="bg-black text-white px-3 py-1 text-xl cursor-pointer font-bold"
            >
              BEITRETEN
              <font-awesome-icon :icon="['fab', 'steam-square']" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="my-5 px-5 w-full overflow-hidden md:my-2 md:px-2 md:w-1/3 lg:my-4 lg:px-4"
      >
        <div class="bg-white px-4 py-2 m-6 card">
          <div class="last-card">
            <h1 class="font-bold text-2xl">TEAMSPEAK</h1>
            <h3 class="bg-black text-white w-fit px-2 lg:text-lg">
              ts3.taskforce47.com
            </h3>
          </div>
          <img
            :src="tsPic"
            alt="Soldat stehend vor Krankenhaus"
            class="card-pic my-3 md:hidden lg:block"
          />
          <p class="h-48 lg:h-56 md:mt-3 lg:mt-0 text-justify w-full">
            Hier musst Du sein, wenn Du auf unserem Public Server spielen
            möchtest, denn wir kommunizieren mit Task Force Radio im Spiel. Aber
            nicht nur dafür bist Du hier willkommen! Auf unserem Teamspeak
            Server kannst Du mit uns in Kontakt treten, neue Freunde machen und
            Dich mit Bekannten austauschen.
          </p>
          <div class="flex justify-center mt-16 md:mt-48 lg:mt-8 xl:mt-4">
            <a
              href="ts3server://ts3.tf47.de"
              class="bg-black text-white px-3 py-1 text-xl cursor-pointer font-bold"
            >
              VERBINDEN <font-awesome-icon :icon="['fab', 'teamspeak']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Cards extends Vue {
  public eventPic = require("@/assets/cards/rosche_feld_inf_running.png");
  public pubPic = require("@/assets/cards/gruppe_fa18_2.png");
  public tsPic = require("@/assets/cards/klaus_1920.jpg");
}
</script>

<style scoped lang="scss">
.card {
  max-width: 400px;
  height: 570px;
}
.card-pic {
  height: 180px;
  width: 380px;
}
@media (min-width: 765px) {
  .last-card {
    min-height: 96px;
  }
}

@media (min-width: 1024px) {
  .last-card {
    min-height: unset;
  }
}
</style>
