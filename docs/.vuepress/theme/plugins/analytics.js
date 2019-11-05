export const AnalyticsPlugin = {
  install(Vue, options) {
    let initialized = false;
    let fb = undefined;

    let standartFbEvents = [
      "AddPaymentInfo",
      "AddToCart",
      "AddToWishlist",
      "CompleteRegistration",
      "Contact",
      "CustomizeProduct",
      "Donate",
      "FindLocation",
      "InitiateCheckout",
      "Lead",
      "Purchase",
      "Schedule",
      "Search",
      "StartTrial",
      "SubmitApplication",
      "Subscribe",
      "ViewContent"
    ];

    let isEnabled = process.env.APP_ENV === "production";

    // 4. add an instance method
    Vue.prototype.$analytics = {
      recordUtm: function(methodOptions) {
        if (!methodOptions) methodOptions = {};
        for (let key of Object.keys(methodOptions.query)) {
          localStorage.setItem(`last_${key}`, methodOptions.query[key]);
        }
      },
      getUtm: function() {
        return {
          last_utm_source: localStorage.getItem("last_utm_source"),
          last_utm_medium: localStorage.getItem("last_utm_medium"),
          last_utm_campaign: localStorage.getItem("last_utm_campaign"),
          last_utm_term: localStorage.getItem("last_utm_term"),
          last_utm_content: localStorage.getItem("last_utm_content")
        };
      },
      init: function() {
        if (!isEnabled) return;
        if (!initialized) {
          if (!Vue.prototype.$privacy.isAccepted()) {
            return;
          }

          // Init Facebook Pixel
          !(function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
              n.callMethod
                ? n.callMethod.apply(n, arguments)
                : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = "2.0";
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);

            t = b.createElement("script");
            t.async = !0;
            t.src = "https://www.google-analytics.com/analytics.js";
            s.parentNode.insertBefore(t, s);
          })(
            window,
            document,
            "script",
            "https://connect.facebook.net/en_US/fbevents.js"
          );

          fb = fbq;

          fb("init", "1707211522748212");

          // Google Analytics
          window.ga =
            window.ga ||
            function() {
              (ga.q = ga.q || []).push(arguments);
            };
          window.ga.l = +new Date();

          window.ga("create", "UA-124576760-1", "auto");

          initialized = true;

          this.triggerPageview();
        } else {
          this.triggerPageview();
        }
      },
      triggerPageview: function(methodOptions) {
        if (!isEnabled) return;
        if (!initialized) return;
        if (!methodOptions) methodOptions = {};

        if (methodOptions.fb === undefined) methodOptions.fb = true;
        if (methodOptions.ga === undefined) methodOptions.ga = true;

        let utm = this.getUtm();

        if (methodOptions.fb) fb("track", "PageView", { ...utm });
        if (methodOptions.ga) window.ga("send", "pageview");
      },
      triggerEvent: function(methodOptions) {
        if (!isEnabled) return;
        if (!initialized) return;
        if (!methodOptions) methodOptions = {};
        if (!methodOptions.fields) methodOptions.fields = {};

        if (methodOptions.fb === undefined) methodOptions.fb = true;
        if (methodOptions.ga === undefined) methodOptions.ga = true;
        if (methodOptions.category === undefined)
          methodOptions.category = "General";
        if (methodOptions.action === undefined) {
          console.log(
            "Event was not tracked, 'Action' property is not defined"
          );
          return;
        }

        let utm = this.getUtm();
        let isStandartFbEvent =
          standartFbEvents.indexOf(methodOptions.action) !== -1;

        if (methodOptions.fb) {
          fb(
            isStandartFbEvent ? "track" : "trackCustom",
            methodOptions.action,
            {
              ...utm,
              ...methodOptions.fields
            }
          );
        }
        if (methodOptions.ga) {
          window.ga(
            "send",
            "event",
            methodOptions.category,
            methodOptions.action
          );
        }
      }
    };
  }
};
