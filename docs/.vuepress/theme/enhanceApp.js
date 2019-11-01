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
import VueFacebookPixel from "vue-analytics-fb";
import "focus-visible";

export default ({ Vue, options, router, siteData }) => {
  // process.env.STAGE === undefined && 
  if (process.env.NODE_ENV !== "development") {
    Vue.use(VueFacebookPixel);

    Vue.analytics.fbq.init("1707211522748212", {
      em: "info@tagion.org"
    });
  }

  Vue.use(VueScrollTo, {
    easing: "ease-in-out"
  });
  Vue.use(LayoutPlugin);
  Vue.use(FormPlugin);
  Vue.use(FormInputPlugin);
  Vue.use(VueAxios, axios);
  Vue.component("b-nav", BNav);
  Vue.component("b-button", BButton);
  Vue.component("b-input-group", BInputGroup);
};
