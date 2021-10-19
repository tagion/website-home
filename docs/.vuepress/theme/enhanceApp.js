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
import LoadScript from 'vue-plugin-load-script';
import "focus-visible";

export default ({ Vue, options, router, siteData }) => {
  Vue.use(VueScrollTo, {
    easing: "ease-in-out"
  });
  Vue.use(LayoutPlugin);
  Vue.use(FormPlugin);
  Vue.use(FormInputPlugin);
  Vue.use(VueAxios, axios);
  Vue.use(LoadScript);
  Vue.component("b-nav", BNav);
  Vue.component("b-button", BButton);
  Vue.component("b-input-group", BInputGroup);
};
