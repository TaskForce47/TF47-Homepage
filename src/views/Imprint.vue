<template>
  <div class="imprint relative w-full container">
    <section class="sm:float-right sm:w-16"><Navigation></Navigation></section>
    <div class="mx-auto container pt-16 md:pb-132 pb-40 sm:pt-132">
      <h1 class="text-white text-3xl font-bold">
        IMPRESSUM GEM&Auml;&szlig; &sect; 5 TMG
      </h1>
      <h2 class="text-white underline mt-3">KONTAKTDATEN</h2>
      <p class="text-white">
        CHRISTIAN GRANDJEAN <br />
        CRECELIUSSTRA&szlig;E 32 <br />
        42327 WUPPERTAL <br />
        E-MAIL: CHRISTIAN.GRANDJEAN@WEB.DE
      </p>
      <div class="text-field bg-white mt-12 p-2">
        <h3 class="font-bold">Haftung f&uuml;r Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
          f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
          gespeicherte fremde Informationen zu &uuml;berwachen oder nach
          Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit
          hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
          dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
          m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
          werden wir diese Inhalte umgehend entfernen.
        </p>
      </div>
      <div class="text-field bg-white mt-12 p-2">
        <h3 class="font-bold">Haftung f&uuml;r Links</h3>
        <p>
          Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
          deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
          f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen.
          F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
          Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
          Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte
          waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
      </div>
      <div class="text-field bg-white mt-12 p-2">
        <h3 class="font-bold">Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die
          Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
          bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
          Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den
          privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </div>

      <p class="bg-white mt-12 p-2 w-fit text-field">
        Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
      </p>
    </div>
    <section><FooterBar></FooterBar></section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";
import FooterBar from "@/components/Footer-Bar.vue";
@Component({
  components: { FooterBar, Navigation }
})
export default class Imprint extends Vue {}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .imprint {
    background: url("./../assets/background-impressum.jpg") no-repeat center top !important;
    height: 2160px;
    max-width: 1920px;
  }
  h1 {
    font-size: 50pt;
  }
  .text-field {
    line-height: 20pt;
    font-size: 15pt;
  }
}
</style>
