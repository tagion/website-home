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
import "focus-visible";

export default ({ Vue, options, router, siteData }) => {
  // !process.env.STAGE &&
  // if ( process.env.NODE_ENV !== "development") {
  //   console.log('init?')
  //   if (window && window.fbq) {
  //     console.log('init')

  //   }
  // }

  Vue.use(VueScrollTo, {
    easing: "ease-in-out"
  });
  Vue.use(LayoutPlugin);
  Vue.use(FormPlugin);
  Vue.use(FormInputPlugin);
  Vue.use(VueAxios, axios);
  Vue.use(AnalyticsPlugin);
  Vue.component("b-nav", BNav);
  Vue.component("b-button", BButton);
  Vue.component("b-input-group", BInputGroup);
};
