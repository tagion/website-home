export const AnalyticsPlugin = {
  install(Vue, options) {
    let initialized = false;

    // UA-124576760-1

    // 4. add an instance method
    Vue.prototype.$analytics = {
      init: function(methodOptions) {
        if (!initialized) {
          console.log(process.env.NODE_ENV)
          console.log("init!", methodOptions);
          initialized = true;
        }
      },
      triggerEvent: function(methodOptions) {
        // Default to trigger both FB and GA
        if (methodOptions.fb === undefined) methodOptions.fb = true;
        if (methodOptions.ga === undefined) methodOptions.ga = true;

        console.log("works!", methodOptions);
      }
    };
  }
};
