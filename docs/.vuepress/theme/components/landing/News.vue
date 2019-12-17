<template>
  <div
    ref="medium-widget"
    id="medium-widget"
    class="lcontainer__medium-widget"
    :class="{'lcontainer__medium-widget--loaded': isMediumLoaded}"
  >
    <div class="lcontainer__spinner">
      <spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "@theme/components/Spinner";

export default {
  components: {
    Spinner
  },
  data() {
    return {
      isMediumLoaded: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.$loadScript("https://medium-widget.pixelpoint.io/widget.js")
        .then(() => {
          this.initMedium();
        })
        .catch(() => {
          console.error("Can't load Medium publication");
        });
    }, 500);
  },
  beforeDestroy() {
    let element = this.$refs["medium-widget"];
    element.innerHTML = "";
    this.$unloadScript("https://medium-widget.pixelpoint.io/widget.js");
  },
  methods: {
    initMedium() {
      window.MediumWidget.Init({
        renderTo: "#medium-widget",
        params: {
          resource: "https://medium.com/tagion",
          postsPerLine: 3,
          limit: 3,
          picture: "big",
          fields: ["description", "author", "publishAt"],
          ratio: "landscape"
        }
      });

      setTimeout(() => {
        this.isMediumLoaded = true;
      }, 500);
    }
  }
};
</script>