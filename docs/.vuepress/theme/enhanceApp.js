import {
  LayoutPlugin,
  FormPlugin,
  FormInputPlugin,
  BNav,
  BButton,
  BInputGroup
} from "bootstrap-vue";
import * as VueScrollTo from "vue-scrollto";
import axios from "axios";
import VueAxios from "vue-axios";
import { AnalyticsPlugin } from "./plugins/analytics";
import { PrivacyPlugin } from "./plugins/privacy";
import "focus-visible";

export default ({ Vue, options, router, siteData }) => {
  Vue.use(VueScrollTo, {
    easing: "ease-in-out"
  });
  Vue.use(LayoutPlugin);
  Vue.use(FormPlugin);
  Vue.use(FormInputPlugin);
  Vue.use(VueAxios, axios);
  Vue.use(PrivacyPlugin, { siteData });
  Vue.use(AnalyticsPlugin);
  Vue.component("b-nav", BNav);
  Vue.component("b-button", BButton);
  Vue.component("b-input-group", BInputGroup);
};
