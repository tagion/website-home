import {
  LayoutPlugin,
  FormPlugin,
  FormInputPlugin,
  CollapsePlugin,
  CardPlugin,
  BNav,
  BButton,
  BInputGroup
} from "bootstrap-vue";
import * as VueScrollTo from "vue-scrollto";
import axios from "axios";
import VueAxios from "vue-axios";
import LoadScript from "vue-plugin-load-script";
import { AnalyticsPlugin } from "./plugins/analytics";
import { PrivacyPlugin } from "./plugins/privacy";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { addIcons } from "./icons";
import VueSocketIO from 'vue-socket.io'
import "focus-visible";

addIcons();

export default ({ Vue, options, router, siteData }) => {
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.config.productionTip = false
  Vue.use(VueScrollTo, {
    easing: "ease-in-out"
  });
  Vue.use(LayoutPlugin);
  Vue.use(FormPlugin);
  Vue.use(FormInputPlugin);
  Vue.use(VueAxios, axios);
  Vue.use(PrivacyPlugin, { siteData });
  Vue.use(AnalyticsPlugin);
  Vue.use(CollapsePlugin);
  Vue.use(CardPlugin);
  Vue.use(LoadScript);
  Vue.component("b-nav", BNav);
  Vue.component("b-button", BButton);
  Vue.component("b-input-group", BInputGroup);

  let socketLink = 'http://localhost:4050/monitor';

  if (process.env.APP_ENV === 'production') {
    socketLink = 'https://api.monitor.tagion.org/monitor';
  } else if (process.env.APP_ENV === 'staging') {
    socketLink = 'https://tagion-monitor-staging.azurewebsites.net/monitor';
  }

  Vue.use(new VueSocketIO({
    debug: false,
    vuex: false,
    connection: socketLink
  }))
};
