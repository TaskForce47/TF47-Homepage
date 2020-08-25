import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faComments,
  faHome,
  faCog,
  faBookOpen,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import {
  faSteamSquare,
  faTeamspeak,
  faDiscord,
  faYoutube,
  faTwitch,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(
  faSteamSquare,
  faTeamspeak,
  faComments,
  faInfoCircle,
  faBookOpen,
  faCog,
  faHome,
  faDiscord,
  faYoutube,
  faTwitch,
  faInstagram,
  faTwitter
);
Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === "development";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
