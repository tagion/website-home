<template>
  <layout-default
    class="landing-page testnet-page"
    id="landing-page"
  >
    <template slot="root-content">

      <div class="container-wrapper">
        <b-container
          class="container py-4"
        >
          <div class="not-connected">
            <div>Tagion AlphaOne Status</div>
            <div class="text-muted w-50">
              Tagion has completed testing on our AlphaOne network. This network is currently not running. We gained very useful data by running the network, and we are presently implementing it in AlphaTwo, which we will launch soon.
            </div>
          </div>
        </b-container>
      </div>

    </template>
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/layout/LayoutDefault";
import BrandButton from "@theme/components/sealed/BrandButton";
import SocialButtons from "@theme/components/sealed/SocialButtons";
import DownloadBrandButton from "@theme/components/sealed/DownloadBrandButton";
import NewsletterForm from "@theme/components/sealed/NewsletterForm";
import TeamCard from "@theme/components/sealed/TeamCard";
import News from "@theme/components/sealed/News";

import { isMobile } from "@theme/util";
import NodeList from "../components/sealed/NodeList";
import Hashgraph from "../components/sealed/Hashgraph";
import TokenForm from "../components/sealed/TokenForm";
import NetworkStatus from "../components/sealed/NetworkStatus";

export default {
  data() {
    return {
      isConnected: false,
      isSubscribed: false,
      hosts: {},
      selectedHost: "",
      socketTimeout: undefined,
    };
  },
  components: {
    LayoutDefault,
    BrandButton,
    SocialButtons,
    NodeList,
    Hashgraph,
    TokenForm,
    NetworkStatus,
  },
  mounted() {
    this.connectSocket();
  },
  beforeDestroy() {
    this.clearTimeoutSocket();
  },

  methods: {
    connectSocket() {
      this.$socket.emit("nodesInit", {}, this.onNodesInit.bind(this));
      this.sockets.subscribe("nodesUpdate", this.onNodesUpdate.bind(this));
      // this.clearTimeoutSocket();

      // this.socketTimeout = setTimeout(() => {
      // }, 100);
    },
    clearTimeoutSocket() {
      if (this.socketTimeout) {
        clearTimeout(this.socketTimeout);
      }
    },
    onNodeSelect(host) {
      this.selectNode(host);
    },
    selectNode(ip) {
      this.selectedHost = ip;
    },
    onNodesInit(data) {
      this.isConnected = true;
      this.hosts = data;
      let keys = Object.keys(this.hosts);
      if (!this.selectedHost) this.selectNode(keys[0]);
    },
    onNodesUpdate(data) {
      this.hosts = data;
    },
  },
};
</script>

<style src="../styles/landing.scss" lang="scss"></style>
<style src="../styles/testnet.scss" lang="scss"></style>
